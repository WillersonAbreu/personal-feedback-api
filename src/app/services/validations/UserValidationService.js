//Models
import User from "../../models/User";

// Yup validator
import * as Yup from "yup";

class UserValidationService {
  // Validation schema
  createSchema = Yup.object({
    name: Yup.string().required("Is necessary insert an user name").min(3),
    email: Yup.string().email().required("Insert a valid email"),
    password: Yup.string().required("Is necessary insert a password").min(6),
    passwordConfirmation: Yup.string().when("password", (password, field) =>
      password
        ? field
            .required("The password confirmation does not match")
            .oneOf([Yup.ref("password")])
        : field
    ),
    about_user: Yup.string().required("Is necessary insert an text about user"),
  });

  updateSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email(),

    password: Yup.string(),
    passwordConfirmation: Yup.string().when("password", (password, field) =>
      password ? field.required().oneOf([Yup.ref("password")]) : field
    ),
    currentPassword: Yup.string().when("password", (currentPassword, field) =>
      currentPassword ? field.required() : field
    ),
  });

  async store(userData, res) {
    await this.createSchema.validate(userData);
    await this.isEmailUsed(userData.email, res);
  }

  async update(userData, foundUserEmail, res) {
    await this.updateSchema.validate(userData);

    if (await this.isCurrentEmailUsed(userData.email, foundUserEmail)) {
      return res.status(400).json({ message: "This email is already in use!" });
    }
  }

  async isEmailUsed(email, res) {
    // Looking for user where the email is equal to email from req.body
    const userExists = await User.findOne({
      where: { email: email },
    });

    // Check if user exists
    if (userExists) {
      console.log(res);
      return res.status(400).json({ message: "This email is already in use" });
    }
  }

  async isCurrentEmailUsed(insertedEmail, foundUserEmail) {
    // Verfifying if the user wants to change the current email
    if (insertedEmail !== foundUserEmail) {
      const userExists = await User.findOne({
        where: { email: foundUserEmail },
      });

      if (userExists) {
        return true;
      }
    }
  }
}

export default new UserValidationService();
