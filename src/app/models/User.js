import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        passwordConfirmation: Sequelize.VIRTUAL,
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

  static associate(models) {
    this.hasMany(models.Feedback, { foreignKey: "user_creator_id" });
    // this.belongsTo(models.Feedback, { foreignKey: "user_receiver_id" });
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
