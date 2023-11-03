"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import { QueryError, RowDataPacket } from 'mysql2'
const connect_1 = __importDefault(require("../../../dist/app/common/connect"));
class Book {
    static getAll(callback) {
        connect_1.default.query('select * from book', function (err, book) {
            callback(book);
        });
    }
    static getById(id, result) {
        connect_1.default.query(`select * from book where id = ${id} `, function (err, book) {
            return result(book);
        });
    }
    static creat = (data, result) => {
        connect_1.default.query(`insert into book set ?`, data, (err, book) => {
            result({ id: book.insertId, ...data });
        });
    };
    static update = (data, result) => {
        connect_1.default.query(`UPDATE book SET name=?, image=?, author_id=? WHERE id=?`, [data.name, data.image, data.author_id, data.id], (err, book) => {
            result(data);
        });
    };
    static remove = (data, result) => {
        connect_1.default.query(`DELETE FROM book WHERE id = ${connect_1.default.escape(data)}`, function (err, book) {
            if (err) {
                console.error('Lỗi khi xóa dữ liệu:', err);
                return result('lỗi');
            }
            else {
                if (book.affectedRows === 0) {
                    return result(`Không tìm thấy ID để xóa ${data}`);
                }
                else {
                    return result('Xóa thành công');
                }
            }
        });
    };
}
//delete from book where id = ?
module.exports = Book;
