import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        passwordConfirmation: Sequelize.VIRTUAL,
        password: Sequelize.STRING,
        about_user: Sequelize.STRING,
        is_active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.passwordConfirmation) {
        user.password = await bcrypt.hash(user.passwordConfirmation, 8);
      }
    });

    return this;
  }

  static associate(models) {}

  async checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
