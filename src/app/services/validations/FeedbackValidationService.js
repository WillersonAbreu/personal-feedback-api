// Yup validator
import * as Yup from "yup";

class FeedbackValidationService {
  // Validation schema
  createSchema = Yup.object({
    user_creator_id: Yup.number().required(
      "Is necessary insert the user creator ID"
    ),
    user_receiver_id: Yup.number().required(
      "Is necessary insert the user ID of the user that is receiving the feedback!"
    ),
    points_to_improve: Yup.string().required(
      "Is necessary insert the points to improve"
    ),
    points_to_keep: Yup.string().required(
      "Is necessary insert the points to keep"
    ),
    suggestions: Yup.string().required("Is necessary insert some suggestions"),
    final_feedback: Yup.string().required(
      "Is necessary insert the final feedback"
    ),
  });

  updateSchema = Yup.object().shape({
    user_creator_id: Yup.number(),
    user_receiver_id: Yup.number(),
    points_to_improve: Yup.string(),
    points_to_keep: Yup.string(),
    suggestions: Yup.string(),
  });

  async store(userData) {
    await this.createSchema.validate(userData);
  }

  async update(userData) {
    await this.updateSchema.validate(userData);
  }
}

export default new FeedbackValidationService();
