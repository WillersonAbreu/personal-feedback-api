// Models
import User from "../models/User";
import UserValidationService from "./validations/UserValidationService";

class UserService {
  async index() {
    return await User.findAll({
      where: {
        is_active: true,
      },
    });
  }

  async store(userData, res) {
    await UserValidationService.store(userData, res);
    const user = await User.create(userData);
    return user;
  }

  async update(userId, userData, res) {
    // Finding the user by userId that iside the JWT token
    let user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await UserValidationService.update(userData, user.email, res);

    const updatedUser = await user.update(userData);
    return updatedUser;
  }

  async delete(userId, res) {
    if (!userId)
      return res
        .status(400)
        .json({ message: "Is necessary insert the user ID" });

    // Finding the user by userId that iside the JWT token
    let user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await user.update({ is_active: false });
    return updatedUser;
  }
}

export default new UserService();
