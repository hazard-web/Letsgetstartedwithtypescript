"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(todo_1.default);
const Port = 8000;
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});
