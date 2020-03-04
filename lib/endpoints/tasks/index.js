const { post, get, put, del } = require("../../helpers/axiosFacade")

const createTask = (apiKey, projectId, data) => {
  const url = `https://api.everhour.com/projects/${projectId}/tasks`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  return post(url, headers, data)
}
const getTask = (apiKey, taskId) => {
  const url = `https://api.everhour.com/tasks/${taskId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  return get(url, headers)
}
const updateTask = (apiKey, taskId, data) => {
  const url = `https://api.everhour.com/tasks/${taskId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  return put(url, headers, data)
}
const deleteTask = (apiKey, taskId) => {
  const url = `https://api.everhour.com/tasks/${taskId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  return del(url, headers)
}

const setEstimate = (apiKey, taskId, estimate) => {
  const url = `https://api.everhour.com/tasks/${taskId}/estimate`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  const data = {
    type: "overall",
    total: estimate
  }
  return put(url, headers, data)
}

const deleteEstimate = (apiKey, taskId) => {
  const url = `https://api.everhour.com/tasks/${taskId}/estimate`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  return del(url, headers)
}

const createSchedule = (
  apiKey,
  taskId,
  userId,
  projectId,
  startDate,
  endDate,
  estimate,
  taskNote,
  includeWeekends = true
) => {
  const url = "https://api.everhour.com/resource-planner/assignments"
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  const data = {
    task: taskId,
    user: userId,
    project: projectId,
    startDate: startDate,
    endDate: endDate,
    time: estimate,
    note: taskNote,
    includeWeekends: includeWeekends,
    type: "task",
    forceOverride: true
  }
  return post(url, headers, data)
}

const deleteSchedule = (apiKey, scheduleId) => {
  const url = `https://api.everhour.com/resource-planner/assignments/${scheduleId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  return del(url, headers)
}

const getSchedule = (apiKey, taskId, fromDate = "") => {
  let url = `https://api.everhour.com/resource-planner/assignments?task=${taskId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  if (fromDate) {
    url += `&from=${fromDate}`
  }
  return get(url, headers)
}

const updateScheduleDueDate = async (apiKey, scheduleId, ehDueDate) => {
  const url = `https://api.everhour.com/resource-planner/assignments/${scheduleId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  const data = {
    startDate: ehDueDate,
    endDate: ehDueDate
  }
  return put(url, headers, data)
}

module.exports = {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  setEstimate,
  deleteEstimate,
  createSchedule,
  deleteSchedule,
  getSchedule,
  updateScheduleDueDate
}
