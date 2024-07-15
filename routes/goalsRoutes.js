const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goalsController');

// GET /api/goals - Get all goals
router.get('/', goalsController.getAllGoals);

// POST /api/goals - Create a new goal
router.post('/', goalsController.createGoal);

// GET /api/goals/:id - Get a goal by ID
router.get('/:id', goalsController.getGoalById);

// PUT /api/goals/:id - Update a goal by ID
router.put('/:id', goalsController.updateGoal);

// DELETE /api/goals/:id - Delete a goal by ID
router.delete('/:id', goalsController.deleteGoal);

module.exports = router;
