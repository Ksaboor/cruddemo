const express = require("express");
const router = express.Router();
// TODO MODEL
const Todo = require('../models/Todo');
//TODO ROUTES

//TODO HOME
router.get("/", (req, res) => {
  res.send("Hello JavaScript Meetup!");
});

//TODO Create a TODO
router.post("/", (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    complete: req.body.complete
  });
  todo.save()
      .then(data => {
        res.status(200).json(data)
      }).catch(error => {
        res.json({ message: error})
  })
});

module.exports = router;
