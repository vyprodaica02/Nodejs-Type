"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const connection = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "Floorkiller2000",
    database: "demo_node_api",
});
connection.connect(function (err) { });
exports.default = connection;
