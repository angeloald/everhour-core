const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  setEstimate,
  deleteEstimate
} = require("./")
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
    },
    estimate: 3600
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

  test("create estimate", () => {
    setEstimate(apiKey, suiteVars["taskId"], suiteVars["estimate"]).then(
      res => {
        expect(res.data.time.total).toMatch(suiteVars["estimate"])
      }
    )
  })

  test("delete estimate", () => {
    deleteEstimate(apiKey, suiteVars["taskId"]).then(res => {
      expect(res.status).toMatch(204)
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
