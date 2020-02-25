const {
  createProject,
  getProject,
  updateProject,
  deleteProject
} = require("./")

describe("Valid CRUD for projects", () => {
  suiteVars = {
    pName: "Create project",
    pNewName: "Update project"
  }
  apiKey = process.env.EVERHOUR_API_KEY

  test("create project", async () => {
    const res = await createProject(apiKey, suiteVars.pName)
    suiteVars.pId = res.data.id
    expect(res.data.name).toBe(suiteVars.pName)
    expect(res.status).toBe(201)
  })

  test("update project", async () => {
    const res = await updateProject(apiKey, suiteVars.pId, suiteVars.pNewName)
    expect(res.data.name).toBe(suiteVars.pNewName)
    expect(res.status).toBe(200)
  })

  test("read project", async () => {
    const res = await getProject(apiKey, suiteVars["pId"])
    expect(res.data.name).toBe(suiteVars.pNewName)
    expect(res.status).toBe(200)
  })

  test("delete project", async () => {
    const res = await deleteProject(apiKey, suiteVars["pId"])
    expect(res.status).toBe(204)
  })
})
