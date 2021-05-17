const express = require("express");
const router = express.Router();
const Event = require("../models/events");

// Getting all evnts
router.get("/", async (req, res) => {
  try {
    const evnts = await Event.find();
    res.json(evnts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating one evnt
router.post("/", async (req, res) => {
  const evnt = new Event(req.body);

  try {
    const newEvent = await evnt.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Getting one evnt
router.get("/:id", getEvent, (req, res) => {
  res.json(res.evnt);
});

// Updating one evnt
router.patch("/:id", getEvent, async (req, res) => {
  if (req.body.name != null) {
    res.evnt.name = req.body.name;
  }

  if (req.body.subscribedChannel != null) {
    res.evnt.subscribedChannel = req.body.subscribedChannel;
  }
  try {
    const updatedEvent = await res.evnt.save();
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Deleting one evnt
router.delete("/:id", getEvent, async (req, res) => {
  try {
    await res.evnt.remove();
    res.json({ message: "Deleted This Event" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function for gettig evnt object by ID
async function getEvent(req, res, next) {
  try {
    evnt = await Event.findById(req.params.id);
    if (evnt == null) {
      return res.status(404).json({ message: "Cant find evnt" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.evnt = evnt;
  next();
}

module.exports = router;
