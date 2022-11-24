const mongoose = require("mongoose");

const TodoListSchema = mongoose.Schema({
    todo: String,
    priority: String,
    status: String,
}, {
    timestamps: true
});

module.exports = mongoose.model("todolist", TodoListSchema);