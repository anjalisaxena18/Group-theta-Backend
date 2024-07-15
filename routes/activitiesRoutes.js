const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activitiesController');
const Activity = require('../models/activity.js');

// POST /api/activities - Create a new activity
router.post('/', activitiesController.createActivity);

// GET /api/activities - Get all activities
router.get('/', activitiesController.getAllActivities);

// GET /api/activities/:id - Get an activity by ID
router.get('/:id', activitiesController.getActivityById);

// PUT /api/activities/:id - Update an activity by ID
router.put('/:id', activitiesController.updateActivity);

// DELETE /api/activities/:id - Delete an activity by ID
router.delete('/:id', activitiesController.deleteActivity);

module.exports = router;
