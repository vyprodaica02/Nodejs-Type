// eslint-disable-next-line @typescript-eslint/no-var-requires
const Book = require('../../../dist/app/Modal/BookModal')
import { Request, Response } from 'express'

exports.get_list = function (req: Request, res: Response) {
  Book.getAll(function (data: any) {
    res.send({ data })
  })
}

exports.detail = function (req: any, res: any) {
  Book.getById(req.params.id, (result: any) => {
    res.send({ result })
  })
}

exports.add = (req: Request, res: Response) => {
  const data = req.body
  Book.creat(data, (result: any) => {
    res.send({ result })
  })
}

exports.delete = (req: Request, res: Response) => {
  const { id } = req.body
  Book.remove(id, (result: any) => {
    res.send({ result })
  })
}

exports.update = (req: Request, res: Response) => {
  const data = req.body
  Book.update(data, (result: any) => {
    res.send({ result })
  })
}
