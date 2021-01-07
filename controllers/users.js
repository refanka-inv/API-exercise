const UsersModel = require("../models/users");

class UsersController {
  static async showUsers(req, res) {
    try {
      const result = await UsersModel.getUsers();
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

  static async insertUsers(req, res) {
    console.log(req.body);
    try {
      const result = await UsersModel.createUsers(req.body);
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

  static async removeUsers(req, res) {
    console.log(req.body);
    try {
      const result = await UsersModel.deleteUsers(req.body);
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

  static async reviseUsers(req, res) {
    console.log(req.body);
    try {
      const result = await UsersModel.updateUsers(req.body);
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

module.exports = UsersController;
