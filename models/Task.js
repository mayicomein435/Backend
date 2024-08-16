// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    description: { type: String, required: true },
    deadline: { type: Date, required: true },
    category: { type: String, required: true },
    fileAttachments: [String],
    // other fields as necessary
});

module.exports = mongoose.model('Task', taskSchema);
