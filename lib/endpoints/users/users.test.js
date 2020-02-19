const { getUsers } = require("./")

describe("Users endpoint", () => {
  const apiKey = process.env.EVERHOUR_API_KEY

  test("get users", () => {
    getUsers(apiKey).then(res => {
      expect(res.status).toMatch(200)
    })
  })
})
