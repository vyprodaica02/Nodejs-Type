"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//cấu hình bodyparser
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('../dist/app/Router/HomeRouter')(app);
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('../dist/app/Router/BookRouter')(app);
app.listen(port, () => {
    console.log(` http://localhost:${port}`);
});
``;
