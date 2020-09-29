// Yup validator
import * as Yup from "yup";

class AuthenticationValidationService {
  // Validation schema
  loginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Is necessary insert the email to login"),
    password: Yup.string().required(
      "Is necessary insert the password to login"
    ),
  });

  async login(userData) {
    await this.loginSchema.validate(userData);
  }
}

export default new AuthenticationValidationService();
