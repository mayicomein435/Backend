
const express = require('express');
const { getDashboardData, generateReports } = require('../controllers/dashboardController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getDashboardData);
router.get('/reports', protect, authorize('admin'), generateReports);

module.exports = router;
