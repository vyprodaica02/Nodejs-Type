"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Book = require('../../../dist/app/Modal/BookModal');
exports.get_list = function (req, res) {
    Book.getAll(function (data) {
        res.send({ data });
    });
};
exports.detail = function (req, res) {
    Book.getById(req.params.id, (result) => {
        res.send({ result });
    });
};
exports.add = (req, res) => {
    const data = req.body;
    Book.creat(data, (result) => {
        res.send({ result });
    });
};
exports.delete = (req, res) => {
    const { id } = req.body;
    Book.remove(id, (result) => {
        res.send({ result });
    });
};
exports.update = (req, res) => {
    const data = req.body;
    Book.update(data, (result) => {
        res.send({ result });
    });
};
