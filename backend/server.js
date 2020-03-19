import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import testRoute from "./routes/test";

// To get environment values
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected at mongodb://localhost:27017");
}).catch(err => {
  console.log(err);
});

// Since mongoose promise is deprecated, overide it with node's promise
mongoose.Promise = global.Promise;

// To use req.body from an incoming request stream
app.use(bodyParser.json());

// API Routes
app.use("/test", testRoute);

// Listens to a request from a browser
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});