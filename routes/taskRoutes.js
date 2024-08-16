
const express = require('express');
const { createTask, updateTask, deleteTask, getTasks, getTaskById } = require('../controllers/taskController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, authorize('admin'), createTask);
router.put('/:id', protect, authorize('admin'), updateTask);
router.delete('/:id', protect, authorize('admin'), deleteTask);
router.get('/', protect, getTasks);
router.get('/:id', protect, getTaskById);

module.exports = router;
