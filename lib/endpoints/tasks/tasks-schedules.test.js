const {
  createTask,
  setEstimate,
  deleteEstimate,
  createSchedule,
  deleteSchedule,
  getSchedule,
  updateScheduleDueDate
} = require("./")
const { createProject, deleteProject } = require("../projects")
const { createSection } = require("../sections")

describe("Tests for task schedules and estimates", () => {
  const suiteVars = {}
  const apiKey = process.env.EVERHOUR_API_KEY

  beforeAll(async () => {
    suiteVars.uId = process.env.EVERHOUR_USER_ID
    suiteVars.estimate = 3600
    const proj = await createProject(apiKey, "project setup", [suiteVars.uId])
    suiteVars.pId = proj.data.id
    const sect = await createSection(apiKey, suiteVars.pId, "section setup")
    suiteVars.sId = sect.data.id
  })

  afterAll(async () => {
    await deleteProject(apiKey, suiteVars.pId)
  })

  test("create task", async () => {
    const res = await createTask(apiKey, suiteVars.pId, {
      name: "Test Task #1",
      section: suiteVars.sId
    })
    suiteVars.tId = res.data.id
    expect(res.status).toBe(201)
  })

  test("create estimate", async () => {
    const res = await setEstimate(apiKey, suiteVars.tId, suiteVars.estimate)
    expect(res.data.total).toBe(suiteVars.estimate)
    expect(res.status).toBe(200)
  })

  test("create schedule", async () => {
    suiteVars.startDate = "2020-01-05"
    const dueDate = "2020-01-10"
    const note = "this is a note"
    const res = await createSchedule(
      apiKey,
      suiteVars.tId,
      suiteVars.uId,
      suiteVars.pId,
      suiteVars.startDate,
      dueDate,
      suiteVars.estimate,
      note
    )
    expect(res.data.time).toBe(suiteVars.estimate)
    expect(res.status).toBe(200)
    // this should be a 201 according to the documentation as of Feb 25, 2020
  })

  test("get schedule", async () => {
    const res = await getSchedule(apiKey, suiteVars.tId, suiteVars.startDate)
    suiteVars.assignId = res.data[0].id
    expect(res.status).toBe(200)
  })

  test("update schedule", async () => {
    const dueDate = "2020-01-15"
    const res = await updateScheduleDueDate(apiKey, suiteVars.assignId, dueDate)
    expect(res.data.endDate).toBe(dueDate)
    expect(res.status).toBe(200)
  })

  test("delete estimate", async () => {
    const res = await deleteEstimate(apiKey, suiteVars.tId)
    expect(res.status).toBe(204)
  })

  test("delete schedule", async () => {
    const res = await deleteSchedule(apiKey, suiteVars.assignId)
    expect(res.status).toBe(204)
  })
})
