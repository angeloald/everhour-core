const { post, get, put, del } = require("../../helpers/axiosFacade")

const createProject = (apiKey, projectName, users = []) => {
  const url = "https://api.everhour.com/projects"
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  const data = {
    name: projectName,
    type: "board"
  }
  if (users && users.length) {
    data.users = users
  }
  return post(url, headers, data)
}

const getProject = (apiKey, projectId) => {
  const url = `https://api.everhour.com/projects/${projectId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  return get(url, headers)
}

const updateProject = (apiKey, projectId, newName, newUsers = []) => {
  const url = `https://api.everhour.com/projects/${projectId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  const data = {
    name: newName,
    type: "board"
  }
  if (newUsers && newUsers.length) {
    data.users = newUsers
  }
  return put(url, headers, data)
}

const deleteProject = (apiKey, projectId) => {
  const url = `https://api.everhour.com/projects/${projectId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  return del(url, headers)
}

module.exports = {
  createProject,
  getProject,
  updateProject,
  deleteProject
}
