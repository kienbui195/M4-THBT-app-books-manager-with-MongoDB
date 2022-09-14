import { Request, Response } from "express";
import { Book } from "../schemas/book.model";

class Controller {

    showFormCreate(req: Request, res: Response) {
        res.render('createBook');
    }

    async getDataFromCreate(req: Request, res: Response) {
        try {
            const bookNew = new Book(req.body);
            const book = await bookNew.save();
            if (book) {
                res.redirect('/');
            } else {
                res.render('error')
            }
        } catch(err) {
            res.render('error')
        }
    }

    async getDataFromUpdate(req: Request, res: Response) {
        try {
            const book = await Book.findOne({ _id: req.body.id })
            console.log(req.body.id)
            book.title = req.body.title;
            book.description = req.body.description;
            book.author = req.body.author;
            await book.save();
            if (book) {
                res.redirect('/');
            } else res.render('error')
        } catch (err) {
            res.render('error')
        }
    }

    async getList(req: Request, res: Response) {
        try {
            const books = await Book.find();
            res.render('listBook', {data: books})
        } catch (err) {
            res.render("error");
        }
    }

    async showFormUpdate(req: Request, res: Response) {
        try {
            const book = await Book.findOne({ _id: req.query.id })
            if (book) {
                res.render('updateBook', { data: book })
            } else res.render('error')
        } catch (err) {
            res.render('error');
        }
    }

    async deleteBook(req: Request, res: Response) {
        try {
            const book = await Book.findOne({ _id: req.query.id })
            if (book) {
                await book.remove();
                res.redirect('/');
            } else res.render('error')
        } catch (err) {
            res.render('error')
        }
    }
}

export { Controller };