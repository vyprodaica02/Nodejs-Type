// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import { QueryError, RowDataPacket } from 'mysql2'
import db from '../../../dist/app/common/connect'

class Book {
  static getAll(callback: any) {
    db.query('select * from book', function (err: any, book: any) {
      callback(book)
    })
  }

  static getById(id: any, result: any) {
    db.query(`select * from book where id = ${id} `, function (err: any, book: any) {
      return result(book)
    })
  }
  static creat = (data: any, result: any) => {
    db.query(`insert into book set ?`, data, (err: any, book: any) => {
      result({ id: book.insertId, ...data })
    })
  }

  static update = (data: any, result: any) => {
    db.query(
      `UPDATE book SET name=?, image=?, author_id=? WHERE id=?`,
      [data.name, data.image, data.author_id, data.id],
      (err: any, book: any) => {
        result(data)
      }
    )
  }

  static remove = (data: any, result: any) => {
    db.query(`DELETE FROM book WHERE id = ${db.escape(data)}`, function (err: any, book: any) {
      if (err) {
        console.error('Lỗi khi xóa dữ liệu:', err)
        return result('lỗi')
      } else {
        if (book.affectedRows === 0) {
          return result(`Không tìm thấy ID để xóa ${data}`)
        } else {
          return result('Xóa thành công')
        }
      }
    })
  }
}
//delete from book where id = ?
module.exports = Book
