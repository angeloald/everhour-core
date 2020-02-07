const {
  createProject,
  getProject,
  updateProject,
  deleteProject
} = require("./")

describe("Valid CRUD for projects", () => {
  suiteVars = {
    data: {
      name: "Project Name",
      type: "board"
    },
    updateData: {
      name: "Project Name #2",
      type: "board"
    }
  }
  apiKey = process.env.EVERHOUR_API_KEY
  test("create project", () => {
    createProject(apiKey, suiteVars["data"]).then(res => {
      suiteVars["projectId"] = res.data.id
      expect(res.status).toMatch(201)
    })
  })

  test("read project", () => {
    getProject(apiKey, suiteVars["projectId"]).then(res => {
      expect(res.status).toMatch(200)
    })
  })

  test("update project", () => {
    updateProject(apiKey, suiteVars["projectId"], suiteVars["updateData"]).then(
      res => {
        expect(res.status).toMatch(200)
      }
    )
  })

  test("delete project", () => {
    deleteProject(apiKey, suiteVars["projectId"]).then(res => {
      expect(res.status).toMatch(204)
    })
  })
})
