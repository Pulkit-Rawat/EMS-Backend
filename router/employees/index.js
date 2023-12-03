const { Router } = require("express");
const empActions = require("./actions");
const empRouter = Router();

empRouter.get("/getAllEmployee", empActions.getAllEmployee);
empRouter.post("/getEmployeeByID", empActions.getEmployeeByID);

module.exports = empRouter;
