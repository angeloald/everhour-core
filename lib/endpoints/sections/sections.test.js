const { createSection, deleteSection } = require("./")
const { createProject, deleteProject } = require("../projects")

describe("Valid CRUD for sections", () => {
  const suiteVars = {}
  const apiKey = process.env.EVERHOUR_API_KEY

  beforeAll(async () => {
    const proj = await createProject(apiKey, "project setup", [
      process.env.EVERHOUR_USER_ID
    ])
    suiteVars.pId = proj.data.id
  })

  afterAll(async () => {
    await deleteProject(apiKey, suiteVars.pId)
  })

  test("create section", async () => {
    const res = await createSection(apiKey, suiteVars.pId, "section")
    suiteVars.sId = res.data.id
    expect(res.data.name).toBe("section")
    expect(res.status).toBe(201)
  })

  test("delete section", async () => {
    const res = await deleteSection(apiKey, suiteVars.sId)
    expect(res.status).toBe(204)
  })
})
