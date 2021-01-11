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
    const inputPassword = req.body.password;
    const inputUsername = req.body.username;
    const inputFromUser = { inputPassword, inputUsername };

    try {
      const result = await AdminModel.createAdmin(inputFromUser);
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
    const { username, password } = req.body;
    const login = { username, password };

    try {
      const result = await AdminModel.loginAdmin(login);

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
