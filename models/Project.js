// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    deadlines: { type: Date, required: true },
    technologies: [String],
    teamLeader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    budget: { type: Number, required: true },
    risks: [String],
    // other fields as necessary
});

module.exports = mongoose.model('Project', projectSchema);
