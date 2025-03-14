const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: "Error creating event" });
  }
});

router.get("/events/:userId", async (req, res) => {
  const events = await Event.find({ userId: req.params.userId }).sort("date");
  res.json(events);
});

module.exports = router;
