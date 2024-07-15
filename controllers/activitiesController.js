const Activity = require('../models/activity.js'); // Adjust path and casing as per your actual structure
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create a new activity (example usage)
const newActivity = new Activity({
  name: 'Activity Name', // Replace with actual name
  duration: 60 // Replace with actual duration in minutes
});

newActivity.save()
  .then(savedActivity => {
    console.log('Activity saved successfully:', savedActivity);
    // Handle success if needed
  })
  .catch(error => {
    console.error('Error saving activity:', error.message);
    // Handle error if needed
  });

// Get all activities
const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// // Get a single activity by ID
const getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(activity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// // Update an activity by ID
const updateActivity = async (req, res) => {
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedActivity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(updatedActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// // Delete an activity by ID
const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedActivity = await Activity.findByIdAndDelete(id);
    if (!deletedActivity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Exporting newActivity if needed for direct usage
module.exports = {
  newActivity,
  getAllActivities,
  getActivityById,
  updateActivity,
  deleteActivity
};
