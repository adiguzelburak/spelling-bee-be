"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const routes_1 = require("./routes/routes");
const config_1 = require("../config");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use(routes_1.routers);
app.listen(config_1.config.server.port, () => {
    console.log(`SERVER WORKS AT: ${config_1.config.server.port}`);
});
