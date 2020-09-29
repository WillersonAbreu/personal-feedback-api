import express from "express";
import routes from "./routes/routes";

// Initiate all models
import "./database";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  // Registering middlewares
  middlewares() {
    this.server.use(express.json());
  }

  // Registering routes
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
