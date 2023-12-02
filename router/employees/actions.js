const User = require("../../models/Users");

const empActions = {
  getAllEmployee: async (req, res) => {
    try {
      let users = await User.find({ role: 2 });
      if (users) {
        return res.status(200).json({
          message: "Employees list found.",
          data: users,
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

module.exports = empActions;
