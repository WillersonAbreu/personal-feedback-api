import AuthenticationService from "../services/AuthenticationService";

class AuthenticationController {
  async store(req, res) {
    try {
      const token = await AuthenticationService.login(req.body, res);

      return res.status(200).json({
        success: true,
        token,
      });
    } catch (error) {
      return res.status(401).json({
        error: error.message,
      });
    }
  }
}

export default new AuthenticationController();
