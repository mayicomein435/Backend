
const cron = require('node-cron');
const Task = require('../models/Task');
const { sendDeadlineAlert } = require('./mailer');

// Schedule the job to run every minute
cron.schedule('* * * * *', async () => {
    try {
        const tasks = await Task.find();
        const now = new Date();

        tasks.forEach(task => {
            const deadline = new Date(task.deadline);
            if (deadline <= now) {
                // Replace with the actual email of the team leader or user
                const recipientEmail = 'recipient@example.com';
                const subject = `Task Deadline Reached: ${task.description}`;
                const text = `The deadline for the task "${task.description}" has been reached.`;

                sendDeadlineAlert(recipientEmail, subject, text);
            }
        });
    } catch (error) {
        console.error('Error checking deadlines:', error);
    }
});
