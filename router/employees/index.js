const { Router } = require("express");
const empActions = require("./actions");
const empRouter = Router();

empRouter.get("/getAllEmployee", empActions.getAllEmployee);

module.exports = empRouter;
