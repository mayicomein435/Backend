
const express = require('express');
const { createProject, updateProject, deleteProject, getProjects, getProjectById } = require('../controllers/projectController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, authorize('admin'), createProject);
router.put('/:id', protect, authorize('admin'), updateProject);
router.delete('/:id', protect, authorize('admin'), deleteProject);
router.get('/', protect, getProjects);
router.get('/:id', protect, getProjectById);

module.exports = router;
