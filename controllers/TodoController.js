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

const AddTodoController = async (request, response, next) => {
    try {
        const { todo, priority, status } = request.body;
        if (todo === "" || priority === "" || status === "") {
            let errorMesssage = "";
            if (todo === "") errorMesssage += "todo cannot be empty "
            if (priority === "") errorMesssage += "priority cannot be empty "
            response.status(201).send(errorMesssage);
        } else {
            await todolist.create({
                todo: todo,
                priority: priority,
                status: status
            });
            const allTodo = await todolist.find();
            response.status(201).send(allTodo);
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { GetTodoController, AddTodoController };