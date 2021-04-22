const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();

const adoptionSchema = new mongoose.Schema({
  dinoName: String,
  photo: {
    type: mongoose.Schema.ObjectId,
    ref: 'Photo'
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
});

const Adoption = mongoose.model('Adoption', adoptionSchema);
const users = require("./users.js");
const photos = require("./photos.js");
const User = users.model;
const Photo = photos.model;
const validUser = users.valid;

router.post('/', validUser, async (req, res) => {
  if (!req.body.dinoName || !req.body.photo || !req.body.user)
    return res.status(400).send({
      message: "dino name, photo ID and user ID are required."
    });

  try {
    const adoption = new Adoption({
      dinoName: req.body.dinoName,
      photo: req.body.photo,
      user: req.body.user
    });
    await adoption.save();

    let item = await Photo.findOne({_id:req.body.photo});
    item.numDinos -= 1;

    await item.save();

    return res.send({
      adoption
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get('/', validUser, async (req, res) => {
    try {
        let adoptions = await Adoption.find({
          user: req.user
        }).populate('photo');
        return res.send(adoptions);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = {
  routes: router,
  model: Adoption,
};
