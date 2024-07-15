const Achievement = require("../models/achievement");

// Get all achievements
exports.getAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new achievement
exports.createAchievement = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newAchievement = new Achievement({ title, description });
    const savedAchievement = await newAchievement.save();
    res.status(201).json(savedAchievement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get an achievement by ID
exports.getAchievementById = async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.json(achievement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an achievement by ID
exports.updateAchievement = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedAchievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!updatedAchievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.json(updatedAchievement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an achievement by ID
exports.deleteAchievement = async (req, res) => {
  try {
    const deletedAchievement = await Achievement.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAchievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
