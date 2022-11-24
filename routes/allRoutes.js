const express = require("express");
const router = express.Router();
const { GetTodoController } = require("../controllers/GetTodoController");

router.get("/getTodos", GetTodoController)

module.exports = router;