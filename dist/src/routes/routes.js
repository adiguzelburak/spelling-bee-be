"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const express_1 = __importDefault(require("express"));
const tr_1 = __importDefault(require("../data/tr"));
const en_1 = __importDefault(require("../data/en"));
const router = express_1.default.Router();
exports.routers = router;
router.get("/en", (req, res) => {
    return res.send(en_1.default);
});
router.get("/tr", (req, res) => {
    return res.send(tr_1.default);
});
