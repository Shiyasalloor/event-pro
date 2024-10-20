const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true // Automatically generated by MongoDB
  },
  team_name: {
    type: String,
    required: true // Name of the team responsible for the task
  },
  event_id: {
    type: String,
    required: true, // Reference to the corresponding event
    ref: 'Event' // This references the Event model
  },
  task: {
    type: String,
    required: true // Description of the task
  },
  start_date: {
    type: Date,
    required: true // Start date of the task
  },
  end_date: {
    type: Date,
    required: true // End date of the task
  },
  assigned_to: {
    type: String,
    required: true // Username of the person assigned to the task
  }
});

// Create the model from the schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
