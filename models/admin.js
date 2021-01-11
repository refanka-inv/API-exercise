const pool = require("../db/index");
const { hashPassword, checkPassword } = require("../helpers/encryptPassword");
const { generateToken } = require("../helpers/jwt");

class AdminModel {
  static async getAdmin() {
    try {
      const result = await pool.query("SELECT * FROM admin");
      const AdminData = result.rows;
      console.log(AdminData);
      return AdminData;
    } catch (error) {
      console.log(error);
    }
  }
  static async createAdmin(input) {
    const { inputPassword, inputUsername } = input;
    try {
      const encrypted = hashPassword(inputPassword);
      const result = await pool.query(
        `INSERT INTO admin (username, password) VALUES ($1, $2)`,
        [input.username, encrypted]
      );
      if (result) {
        return `Input ${inputUsername} inserted`;
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async loginAdmin(input) {
    try {
      /**
       * await pool.query(`Query Statements`, [value])
       */
      const hashedPassword = await pool.query(
        `SELECT password FROM admin WHERE username = $1`,
        [input.username]
      );
      const hashedPasswordData = hashedPassword.rows[0].password;
      const checked = checkPassword(input.password, hashedPasswordData);
      if (checked) {
        return generateToken(input.username);
      } else {
        return "wrong password";
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AdminModel;
