const express = require("express");
const Request = require("../models/request");
const requestRouter = express.Router();

//add user
requestRouter.post("/add", async (req, res) => {
  try {
    let newrequest = new Request(req.body);
    let result = await newrequest.save();
    res.send({ request: result, msg: "request is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all users
requestRouter.get("/", async (req, res) => {
  try {
    let result = await Request.find();
    res.send({ request: result, msg: "all requests" });
  } catch (error) {
    console.log(error);
  }
});

//delete user
requestRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Request.findByIdAndDelete(req.params.id);
    res.send("request is deleted");
  } catch (error) {
    console.log(error);
  }
});
//update user
requestRouter.put("/:id", async (req, res) => {
  try {
    let result = await Request.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ request: "result", msg: "request updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = requestRouter;
