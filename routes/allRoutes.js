const express = require("express");
const router = express.Router();
const {
    GetTodoController,
    AddTodoController 
} = require("../controllers/TodoController");

router.get("/getTodos", GetTodoController)
router.post("/addTodos", AddTodoController)

module.exports = router;