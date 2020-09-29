import jwt from "jsonwebtoken";

// Models
import User from "../models/User";

// Validations
import AuthenticationValidationService from "./validations/AuthenticationValidationService";

class AuthenticationService {
  async login(loginData, res) {
    const { email, password } = loginData;
    await AuthenticationValidationService.login(loginData);

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ error: "User not found" });

    const { id, name, birthdate, user_type, is_active } = user;

    if (!is_active)
      return res.status(401).json({
        error: "This account is inactive please contact us",
      });

    if (!(await user.checkPassword(password))) {
      return res
        .status(401)
        .json({ error: "The email or password not match!" });
    }

    return jwt.sign(
      { id, name, email, birthdate, user_type },
      process.env.JWT_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
  }
}

export default new AuthenticationService();
