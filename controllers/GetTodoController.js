// Model imports
const todolist = require("../models/TodoList");

// Controllers
const GetTodoController = async (request, response, next) => {
    try {
        const todoList = await todolist.find({});
        response.status(200).send(todoList);
    } catch (error) {
        console.log(error, "error");
    }
}

module.exports = { GetTodoController };