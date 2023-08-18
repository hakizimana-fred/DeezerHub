"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const start = () => {
    app.get("/healthcheck", (_req, res) => res.send("smth is running"));
    app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`));
};
void start();
//# sourceMappingURL=index.js.map