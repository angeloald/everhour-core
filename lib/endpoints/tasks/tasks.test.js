const { createTask, getTask, updateTask, deleteTask } = require("./")
const { createProject, deleteProject } = require("../projects")
const { createSection } = require("../sections")

describe("Valid CRUD for projects", () => {
  const suiteVars = {}
  const apiKey = process.env.EVERHOUR_API_KEY

  beforeAll(async () => {
    const proj = await createProject(apiKey, "project setup", [
      process.env.EVERHOUR_USER_ID
    ])
    suiteVars.pId = proj.data.id
    const sect = await createSection(apiKey, suiteVars.pId, "section setup")
    suiteVars.sId = sect.data.id
    suiteVars.tName = "task name"
    suiteVars.tUpdatedName = "task updated name"
  })

  afterAll(async () => {
    await deleteProject(apiKey, suiteVars.pId)
  })

  test("create task", async () => {
    const res = await createTask(apiKey, suiteVars.pId, {
      name: suiteVars.tName,
      section: suiteVars.sId
    })
    suiteVars.tId = res.data.id
    expect(res.status).toBe(201)
  })

  test("read task", async () => {
    const res = await getTask(apiKey, suiteVars.tId)
    expect(res.data.name).toBe(suiteVars.tName)
    expect(res.status).toBe(200)
  })

  test("update task", async () => {
    const res = await updateTask(apiKey, suiteVars.tId, {
      name: suiteVars.tUpdatedName
    })
    expect(res.data.name).toBe(suiteVars.tUpdatedName)
    expect(res.status).toBe(200)
  })

  test("delete task", async () => {
    const res = await deleteTask(apiKey, suiteVars.tId)
    expect(res.status).toBe(204)
  })
})
