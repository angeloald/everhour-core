const { post, get, put, del } = require("../../helpers/axiosFacade")

const createSection = (apiKey, projectId, sectionName) => {
  const url = `https://api.everhour.com/projects/${projectId}/sections`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  const data = {
    name: sectionName
  }
  return post(url, headers, data)
}

const getSection = {}
const updateSection = {}

const deleteSection = (apiKey, sectionId) => {
  const url = `https://api.everhour.com/sections/${sectionId}`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  return del(url, headers)
}

module.exports = {
  createSection,
  deleteSection
}
