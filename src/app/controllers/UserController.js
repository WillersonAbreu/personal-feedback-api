import Sequelize, { Op } from "sequelize";

// Models
// import User from "../models/User";

// Yup validator
import * as Yup from "yup";

class UserController {
  async index(req, res) {
    try {
      return res.status(200).json("OK");
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
