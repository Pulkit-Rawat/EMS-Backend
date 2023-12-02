const Department = require("../../models/Departments");

const dptActions = {
  create: async (req, res) => {
    try {
      const { dptName } = req.body;
      let dpt = await Department.findOne({ dptName });

      //check if department is already created
      if (dpt) {
        return res.status(401).json({
          message: "Department already created",
          success: false,
        });
      }

      //create department
      dpt = await Department.create(req.body);

      if (dpt) {
        return res.status(200).json({
          message: "Department created successfully.",
          success: true,
        });
      }

      //default case error
      return res.status(401).json({
        message: "Something went wrong.",
        success: false,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Something went wrong...",
      });
    }
  },
  getDepartments: async (req, res) => {
    try {
      let departments = await Department.find();

      if (departments) {
        return res.status(200).json({
          message: "Departments found.",
          data: departments,
          success: true,
        });
      }

      //default case error
      return res.status(401).json({
        message: "Something went wrong.",
        success: false,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Something went wrong...",
      });
    }
  },
};

module.exports = dptActions;
