import FeedbackService from "../services/FeedbackService";

class FeedbackController {
  async index(req, res) {
    try {
      const feedbacks = await FeedbackService.index();
      return res.status(200).json(feedbacks);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getCreatedFeedbacks(req, res) {
    try {
      const { id: userId } = req.params;

      const feedbacks = await FeedbackService.getCreatedFeedbacks(userId);
      return res.status(200).json(feedbacks);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getCreatedFeedbacks(req, res) {
    try {
      const { id: userId } = req.params;

      const feedbacks = await FeedbackService.getCreatedFeedbacks(userId);
      return res.status(200).json(feedbacks);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getReceivedFeedbacks(req, res) {
    try {
      const { id: userId } = req.params;

      const feedbacks = await FeedbackService.getReceivedFeedbacks(userId);
      return res.status(200).json(feedbacks);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      // Validate the inserted data and store a new feedback
      const feedback = await FeedbackService.store(req.body, res);

      // Returning the success message
      return res.json({
        message: "Feedback registered successfully",
        status: 201,
        data: feedback,
      });
    } catch (error) {
      // Returning the exception error
      return res.json({ message: error.message, status: 400 });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      // Validate the inserted data and store a new feedback
      const feedback = await FeedbackService.update(id, req.body, res);

      // Returning the success message
      return res.json({
        message: "Feedback updated successfully",
        status: 204,
        data: feedback,
      });
    } catch (error) {
      // Returning the exception error
      return res.json({ message: error.message, status: 400 });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      // Validate the inserted data and store a new feedback
      const feedback = await FeedbackService.delete(id, res);

      // Returning the success message
      return res.json({
        message: "Feedback deleted successfully",
        status: 204,
        data: feedback,
      });
    } catch (error) {
      // Returning the exception error
      return res.json({ message: error.message, status: 400 });
    }
  }
}

export default new FeedbackController();
