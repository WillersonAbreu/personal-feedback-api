import { Router } from "express";
import multer from "multer";
import path from "path";

// Controllers
import UserController from "../app/controllers/UserController";

// Middlewares
// import AuthMiddleware from '../app/middlewares/AuthMiddleware';

const routes = new Router();

routes.get("/hello", UserController.index);

// Static files
// routes.get('/static/profile/:file', (req, res) => {
//   const { file } = req.params;
//   console.log(file);
//   const storedFile = path.resolve('temp', 'profile_images', `${file}`);
//   return res.sendFile(storedFile);
// });

// Authentication Routes
// routes.post("/login", SessionController.store);

// Create User Route
// routes.post("/users", UserController.store);

// All routes below this middleware needs authorization by bearer token
// routes.use(AuthMiddleware);

module.exports = routes;
