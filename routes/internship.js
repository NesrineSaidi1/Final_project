const express = require("express");
const Internship = require("../models/internship");
const internshiptRouter = express.Router();

//add intern
internshiptRouter.post("/add", async (req, res) => {
  console.log(req.body)
  try {
    let newinternship = new Internship(req.body);
    let result = await newinternship.save();
    res.send({ internship: result, msg: "internship is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all interns
internshiptRouter.get("/", async (req, res) => {
  try {
    let result = await Internship.find();
    res.send({ internship: result, msg: "all internships" });
  } catch (error) {
    console.log(error);
  }
});

//get internship by filter
internshiptRouter.post("/", async (req, res) => {
  console.log(req.body)
  try {
    let result = await Internship.find(req.body);
    res.send({ internship: result, msg: "all internships" });
  } catch (error) {
    console.log(error);
  }
});

//delete user
internshiptRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Internship.findByIdAndDelete(req.params.id);
    res.send("internship is deleted");
  } catch (error) {
    console.log(error);
  }
});
//update user
internshiptRouter.put("/:id", async (req, res) => {
  try {
    let result = await Internship.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ internship: "result", msg: "internship updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = internshiptRouter;
