const { Router } = require("express");
const departmentActions = require("./actions");
const departmentRouter = Router();

departmentRouter.post("/createDepartment", departmentActions.create);
departmentRouter.get("/getAllDepartments", departmentActions.getDepartments);
departmentRouter.post("/deleteDepartment", departmentActions.deleteDepartment);

module.exports = departmentRouter;
