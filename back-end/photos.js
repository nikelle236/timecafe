const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 50000000
  }
});

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const photoSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    path: String,
    title: String,
    numDinos: { type: Number, min: 0 },
    donation: { type: Number, min: 0 },
    description: String,
    created: {
      type: Date,
      default: Date.now
    },
});
  
const Photo = mongoose.model('Photo', photoSchema);

router.post("/", validUser, upload.single('photo'), async (req, res) => {
    if (!req.user.isAdmin) {
      return res.status(403).send({
        message: "You do not have permission."
      });
    }

    if (!req.file) {
      return res.status(400).send({
        message: "Must upload a file."
      });
    }

    if (!req.body.title) {
      return res.status(400).send({
        message: "Must include a title."
      });
    }
    
    if (req.body.numDinos < 0) {
      return res.status(400).send({
        message: "Must have a valid number."
      });
    }

    if (req.body.donation < 0) {
      return res.status(400).send({
        message: "Must have a valid number."
      });
    }

    const photo = new Photo({
      user: req.user,
      path: "/images/" + req.file.filename,
      title: req.body.title,
      numDinos: req.body.numDinos,
      donation: req.body.donation,
      description: req.body.description,
    });
    try {
      await photo.save();
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.get("/", validUser, async (req, res) => {
    try {
      let photos = await Photo.find({
        user: req.user
      }).sort({
        created: -1
      }).populate('user');
      return res.send(photos);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

router.get("/all", async (req, res) => {
  try {
    let photos = await Photo.find().sort({
      created: -1
    }).populate('user');
    return res.send(photos);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  try {
    let item = await Photo.findOne({_id:req.params.id});
    item.numDinos = req.body.numDinos
    await item.save()
    return res.send(item)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
    model: Photo,
    routes: router,
}