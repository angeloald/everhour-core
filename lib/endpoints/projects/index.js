const { post, get, put, del } = require("../../helpers/axiosFacade")

const createProject = (apiKey, data) => {
  const url = "https://api.everhour.com/projects"
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
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
const updateProject = (apiKey, projectId, data) => {
  const url = `https://api.everhour.com/projects/${projectId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
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
