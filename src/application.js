import express from "express";
import routes from "./routes/routes";

import cors from "cors";

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
    this.server.use(cors());
  }

  // Registering routes
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
