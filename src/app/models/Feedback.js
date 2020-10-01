import Sequelize, { Model } from "sequelize";

class Feedback extends Model {
  static init(sequelize) {
    super.init(
      {
        user_creator_id: Sequelize.INTEGER,
        user_receiver_id: Sequelize.INTEGER,
        points_to_improve: Sequelize.STRING,
        points_to_keep: Sequelize.STRING,
        suggestions: Sequelize.STRING,
        final_feedback: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_creator_id",
      as: "creator",
    });
    this.belongsTo(models.User, {
      foreignKey: "user_receiver_id",
      as: "receiver",
    });
  }
}

export default Feedback;
