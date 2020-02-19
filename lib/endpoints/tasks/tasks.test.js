const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  setEstimate,
  deleteEstimate,
  createSchedule,
  deleteSchedule
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
    userId: process.env.EVERHOUR_USER_ID,
    estimate: 3600,
    startDate: "2019-01-21",
    endDate: "2019-01-30",
    note: "this is a task"
  }
  apiKey = process.env.EVERHOUR_API_KEY

  test("initiate project", () => {
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

  test("create schedule", () => {
    createSchedule(
      apiKey,
      suiteVars["taskId"],
      suiteVars["userId"],
      suiteVars["projectId"],
      suiteVars["startDate"],
      suiteVars["endDate"],
      suiteVars["estimate"],
      suiteVars["note"]
    ).then(res => {
      suiteVars["assignmentId"] = res.data.id
      expect(res.data.time).toMatch(suiteVars["estimate"])
    })
  })

  test("delete estimate", () => {
    deleteEstimate(apiKey, suiteVars["taskId"]).then(res => {
      expect(res.status).toMatch(204)
    })
  })

  test("delete schedule", () => {
    deleteSchedule(apiKey, suiteVars["assignmentId"]).then(res => {
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
