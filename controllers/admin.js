const AdminModel = require("../models/admin");

class AdminController {
  static async showAdmin(req, res) {
    try {
      const result = await AdminModel.getAdmin();
      res.send({
        status: 200,
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: 500,
        error: "Internal Server Error",
      });
    }
  }

  static async registerAdmin(req, res) {
    console.log(req.body);
    try {
      const result = await AdminModel.createAdmin(req.body);
      res.send({
        status: 201,
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: 500,
        error: "Internal Server Error",
      });
    }
  }

  static async signinAdmin(req, res) {
    console.log(req.body);
    try {
      const { username, password } = req.body;
      const result = await AdminModel.loginAdmin({ username, password });

      res.send({
        status: 201,
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: 500,
        error: "Internal Server Error",
      });
    }
  }
}

module.exports = AdminController;
