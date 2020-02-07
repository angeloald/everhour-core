const { createTask, getTask, updateTask, deleteTask } = require("./")
const { createProject, deleteProject } = require("../projects")

describe("Valid CRUD for projects", () => {
  suiteVars = {
    data: {
      name: "Test Task #1"
    },
    updateData: {
      name: "Test Task #1.1"
    },
    projectData: {
      name: "Project for Task Test"
    }
  }
  apiKey = process.env.EVERHOUR_API_KEY

  test("inititatie project", () => {
    createProject(apiKey, suiteVars["projectData"]).then(res => {
      suiteVars["projectId"] = res.data.id
      expect(res.status).toMathch(201)
    })
  })

  test("create task", () => {
    createTask(apiKey, suiteVars["data"]).then(res => {
      suiteVars["taskId"] = res.data.id
      expect(res.status).toMatch(201)
    })
  })

  test("read task", () => {
    getTask(apiKey, suiteVars["taskId"]).then(res => {
      expect(res.status).toMatch(200)
    })
  })

  test("update task", () => {
    updateTask(apiKey, suiteVars["taskId"], suiteVars["updateData"]).then(
      res => {
        s
        expect(res.status).toMatch(200)
      }
    )
  })

  test("delete task", () => {
    deleteTask(apiKey, suiteVars["taskId"]).then(res => {
      expect(res.status).toMatch(204)
    })
  })

  test("delete project for task test", () => {
    deleteProject(apiKey, suiteVars["projectId"]).then(res =>
      expect(res.status).toMatch(204)
    )
  })
})
