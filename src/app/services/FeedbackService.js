// Models
import Feedback from "../models/Feedback";
import User from "../models/User";
import FeedbackValidationService from "./validations/FeedbackValidationService";

class FeedbackService {
  async index() {
    return await Feedback.findAll();
  }

  async getCreatedFeedbacks(userId) {
    return await Feedback.findAll({
      where: { user_creator_id: userId },
      include: [
        {
          model: User,
          as: "creator",
          attributes: {
            exclude: [
              "email",
              "password",
              "about_user",
              "is_active",
              "createdAt",
              "updatedAt",
            ],
          },
        },
        {
          model: User,
          as: "receiver",
          attributes: {
            exclude: [
              "email",
              "password",
              "about_user",
              "is_active",
              "createdAt",
              "updatedAt",
            ],
          },
        },
      ],
      order: [["createdAt", "DESC"]],
    });
  }

  async getReceivedFeedbacks(userId) {
    return await Feedback.findAll({
      where: { user_receiver_id: userId },
      include: [
        {
          model: User,
          as: "creator",
          attributes: {
            exclude: [
              "email",
              "password",
              "about_user",
              "is_active",
              "createdAt",
              "updatedAt",
            ],
          },
        },
        {
          model: User,
          as: "receiver",
          attributes: {
            exclude: [
              "email",
              "password",
              "about_user",
              "is_active",
              "createdAt",
              "updatedAt",
            ],
          },
        },
      ],
      order: [["createdAt", "DESC"]],
    });
  }

  async store(feedbackData, res) {
    await FeedbackValidationService.store(feedbackData, res);
    const feedback = await Feedback.create(feedbackData);
    return feedback;
  }

  async update(feedbackId, feedbackData, res) {
    // Finding the feedback by feedbackId that iside the JWT token
    let feedback = await Feedback.findByPk(feedbackId);

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    await FeedbackValidationService.update(feedbackData);

    const updatedFeedback = await feedback.update(feedbackData);
    return updatedFeedback;
  }

  async delete(feedbackId, res) {
    if (!feedbackId)
      return res
        .status(400)
        .json({ message: "Is necessary insert the feedback ID" });

    // Finding the feedback by feedbackId
    let feedback = await Feedback.findByPk(feedbackId);

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    const deletedFeedback = await feedback.destroy();
    return deletedFeedback;
  }
}

export default new FeedbackService();
