
const Project = require('../models/Project');
const Task = require('../models/Task');

exports.getDashboardData = async (req, res) => {
    try {
        const projects = await Project.find().lean();
        const tasks = await Task.find().lean();
        const alerts = tasks.filter(task => new Date(task.deadline) - new Date() < 7 * 24 * 60 * 60 * 1000);
        res.json({ projects, tasks, alerts });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.generateReports = async (req, res) => {
    try {
        const projects = await Project.find().lean();
        const tasks = await Task.find().lean();
        // Generate a report (e.g., PDF, Excel, etc.) using your preferred library
        res.json({ message: 'Report generated successfully', data: { projects, tasks } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
