const pool = require("../db/index");

class UsersModel {
  static async getUsers() {
    try {
      const result = await pool.query("SELECT * FROM user_table");
      const usersData = result.rows;
      console.log(usersData);
      return usersData;
    } catch (error) {
      console.log(error);
    }
  }
  static async createUsers(input) {
    try {
      const result = await pool.query(
        `INSERT INTO user_table (name, age) VALUES ($1, $2)`,
        [input.name, input.age]
      );
      if (result) {
        return `Input ${input.name} inserted`;
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteUsers(input) {
    try {
      const result = await pool.query(`DELETE FROM user_table WHERE id = $1`, [
        input.id,
      ]);
      if (result) {
        return `ID ${input.id} deleted`;
      }
    } catch (error) {
      console.log(error);
    }
  }
  static async updateUsers(input) {
    try {
      const result = await pool.query(
        `UPDATE user_table SET name = $1, age = $2 WHERE id = $3`,
        [input.name, input.age, input.id]
      );
      if (result) {
        return `ID ${input.id} updated`;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UsersModel;
