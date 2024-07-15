const Goal = require("../models/goal");

// Get all goals
exports.getAllGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new goal
exports.createGoal = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newGoal = new Goal({ title, description });
    const savedGoal = await newGoal.save();
    res.status(201).json(savedGoal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a goal by ID
exports.getGoalById = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }
    res.json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a goal by ID
exports.updateGoal = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedGoal = await Goal.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!updatedGoal) {
      return res.status(404).json({ message: "Goal not found" });
    }
    res.json(updatedGoal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a goal by ID
exports.deleteGoal = async (req, res) => {
  try {
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
    if (!deletedGoal) {
      return res.status(404).json({ message: "Goal not found" });
    }
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
