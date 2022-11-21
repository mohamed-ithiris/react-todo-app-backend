const express = require("express");
const router = express.Router();

router.get("/TodoList", (request, response) => {
    response.json({ data: ["name", "e3s"] })
})

router.use((_, res, next) => {
    console.log("Middleware")
    next();
})

router.get('/', (_, res) => {
    res.send("Hello World")
    console.log("root")
})

router.get('/one', (_, res) => {
    res.send("hello world one")
    console.log("one")
})

module.exports = router;