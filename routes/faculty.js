const express = require("express");
const router = express.Router();
const Faculty = require("../models/faculty");

// Getting all faculty
router.get("/", async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating one faculty
router.post("/", async (req, res) => {
  const faculty = new Faculty(req.body);

  try {
    const newFaculty = await faculty.save();
    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Getting one faculty
router.get("/:id", getFaculty, (req, res) => {
  res.json(res.faculty);
});

// Updating one faculty
router.patch("/:id", getFaculty, async (req, res) => {
  if (req.body.name != null) {
    res.faculty.name = req.body.name;
  }

  if (req.body.subscribedChannel != null) {
    res.faculty.subscribedChannel = req.body.subscribedChannel;
  }
  try {
    const updatedFaculty = await res.faculty.save();
    res.json(updatedFaculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Deleting one faculty
router.delete("/:id", getFaculty, async (req, res) => {
  try {
    await res.faculty.remove();
    res.json({ message: "Deleted This Faculty" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function for getting faculty object by ID
async function getFaculty(req, res, next) {
  try {
    faculty = await Faculty.findById(req.params.id);
    if (faculty == null) {
      return res.status(404).json({ message: "Can't find faculty member!" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.faculty = faculty;
  next();
}

module.exports = router;
