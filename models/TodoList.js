const mongoose = require("mongoose");

const TodoListSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "todo"
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("todolist", TodoListSchema);