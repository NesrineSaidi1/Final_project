const express = require("express");
const {
  registerRules,
  validation,
  registerEntityRules,
} = require("../middleware/validator");
const Entity = require("../models/Entity");
const Router = express.Router();
const bcrypt = require("bcrypt");
const isAuth = require("../middleware/passport");
const jwt = require("jsonwebtoken");
const Internship = require("../models/internship");
//add entity
Router.post(
  "/register",
  registerEntityRules(),
  validation,
  async (req, res) => {
    const { Entity_name, Tax_number, Location, isEntity, email, Password } =
      req.body;
    try {
      const newEntity = new Entity({
        Entity_name,
        Tax_number,
        Location,
        isEntity,
        email,
        Password,
      });
      // check if the email exist
      const searchedEntity = await Entity.findOne({ email });

      if (searchedEntity) {
        return res.status(400).send({ msg: "email already exist" });
      }

      // hash password
      const salt = 10;
      const genSalt = await bcrypt.genSalt(salt);
      const hashedPassword = await bcrypt.hash(Password, genSalt);
      console.log(hashedPassword);
      newEntity.Password = hashedPassword;
      // generation token
      //save  the Entity
      const newEntityToken = await newEntity.save();
      const payload = {
        _id: newEntity._id,
        Entity_name: newEntityToken.Entity_name,
      };
      const token = await jwt.sign(payload, process.env.SecretOrkey, {
        expiresIn: 3600,
      });

      res.status(200).send({
        newEntityToken,
        msq: "Entity is saved",
        Token: `bearer ${token}`,
      });
    } catch (error) {
      res.send(error);
      console.log(error);
    }
  }
);
//get all interns
Router.get("/interns/:id", async (req, res) => {
  try {
    let result = await Internship.find({ id_Entity: req.params.id }).populate(
      "id_Entity",
      "Entity_name"
    );
     
    res.send({ Entity: result, msg: "all Entitys" });
  } catch (error) {
    console.log(error);
  }
});

//get Entity by filter
Router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    let result = await Entity.find(req.body);
    res.send({ Entity: result, msg: "all Entitys" });
  } catch (error) {
    console.log(error);
  }
});

//delete Entity
Router.delete("/:id", async (req, res) => {
  try {
    let result = await Entity.findByIdAndDelete(req.params.id);
    res.send("Entity is deleted");
  } catch (error) {
    console.log(error);
  }
});
//update Entity
Router.put("/:id", async (req, res) => {
  try {
    let result = await Entity.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ Entity: "result", msg: "Entity updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = Router;
 