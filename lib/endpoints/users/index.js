const { get } = require("../../helpers/axiosFacade")

const getUsers = apiKey => {
  const url = `https://api.everhour.com/team/users`
  const headers = {
    "content-type": "application/json",
    "x-api-key": apiKey
  }
  return get(url, headers)
}

module.exports = {
  getUsers
}
