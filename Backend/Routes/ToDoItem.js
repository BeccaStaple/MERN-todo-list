const mongoose = require("mongoose")
const model = mongoose.model;
const schema = mongoose.Schema;

const toDoSchema = new schema({
  description : {
    type: String,
    required: true,
  },
  dateToComplete: {
    type: Date,
  },
  priorityLevel: {
    type: String,
    default: "Medium"
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const ToDoItem = model("todoItem", toDoSchema);

module.exports = ToDoItem;