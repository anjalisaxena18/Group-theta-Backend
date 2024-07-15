const express = require('express');
const router = express.Router();
const achievementsController = require('../controllers/achievementsController');

// GET /api/achievements - Get all achievements
router.get('/', achievementsController.getAllAchievements);

// POST /api/achievements - Create a new achievement
router.post('/', achievementsController.createAchievement);

// GET /api/achievements/:id - Get an achievement by ID
router.get('/:id', achievementsController.getAchievementById);

// PUT /api/achievements/:id - Update an achievement by ID
router.put('/:id', achievementsController.updateAchievement);

// DELETE /api/achievements/:id - Delete an achievement by ID
router.delete('/:id', achievementsController.deleteAchievement);

module.exports = router;
