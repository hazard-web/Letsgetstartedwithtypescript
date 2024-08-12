"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todo = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todo: todo });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todo.push(newTodo);
    res.status(201).json({ message: 'Added newTodo', todo: newTodo, Todo: todo });
});
router.put('/todo/:todoId', (req, res, next) => {
    const body = req.body;
    const params = req.body;
    const tid = params.todoId;
    const todoIndex = todo.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todo[todoIndex] = { id: todo[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'Updated Todo Sucessfully', todo: todo });
    }
    res.status(404).json({ message: 'Could not find the id to update' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.body;
    todo = todo.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'Deleted Todo', todo: todo });
});
exports.default = router;
