import express from "express";
import TestModel from "../models/Test"

const router = express.Router();

router.get("/", (req, res) => {
  res.send("/test API made");
});

router.get("/db", (req, res) => {
  TestModel.find({})
    .then(data => res.json(data));
});

router.post("/db", (req, res) => {
  if (req.body.message) {
    TestModel.create(req.body)
      .then(data => res.json(data));
  }
  else {
    res.send("message field value required");
  }
})

export default router;