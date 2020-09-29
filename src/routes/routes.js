import { Router } from "express";

// Controllers
import UserController from "../app/controllers/UserController";
import FeedbackController from "../app/controllers/FeedbackController";

// Middlewares;
import AuthenticationMiddleware from "../app/middlewares/AuthenticationMiddleware";
import AuthenticationController from "../app/controllers/AuthenticationController";

const routes = new Router();

// Create user route
routes.post("/users", UserController.store);

// Authentication Routes
routes.post("/login", AuthenticationController.store);

// All routes below this middleware needs authorization by bearer token
routes.use(AuthenticationMiddleware);

/**
 * Users routes
 */
routes.get("/users", UserController.index);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

/**
 * Feedbacks routes
 */
routes.get("/feedbacks", FeedbackController.index);
routes.get("/feedbacks/created/:id", FeedbackController.getCreatedFeedbacks);
routes.get("/feedbacks/received/:id", FeedbackController.getReceivedFeedbacks);
routes.post("/feedbacks", FeedbackController.store);
routes.put("/feedbacks/:id", FeedbackController.update);
routes.delete("/feedbacks/:id", FeedbackController.delete);

module.exports = routes;
