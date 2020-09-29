import Sequelize, { Op } from "sequelize";
import UserService from "../services/UserService";
import UserValidationService from "../services/Validations/UserValidationService";

class UserController {
  async index(req, res) {
    try {
      const users = await UserService.index();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      // Validate the inserted data and store a new user
      const user = await UserService.store(req.body, res);

      // Returning the success message
      return res.json({
        message: "User registered successfully",
        status: 201,
        data: user,
      });
    } catch (error) {
      // Returning the exception error
      return res.json({ message: error.message, status: 400 });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      // Validate the inserted data and store a new user
      const user = await UserService.update(id, req.body, res);

      // Returning the success message
      return res.json({
        message: "User updated successfully",
        status: 204,
        data: user,
      });
    } catch (error) {
      // Returning the exception error
      return res.json({ message: error.message, status: 400 });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      // Validate the inserted data and store a new user
      const user = await UserService.delete(id, res);

      // Returning the success message
      return res.json({
        message: "User deleted successfully",
        status: 204,
        data: user,
      });
    } catch (error) {
      // Returning the exception error
      return res.json({ message: error.message, status: 400 });
    }
  }
}

export default new UserController();
