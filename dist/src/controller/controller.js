"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const book_model_1 = require("../schemas/book.model");
class Controller {
    showFormCreate(req, res) {
        res.render('createBook');
    }
    async getDataFromCreate(req, res) {
        try {
            const bookNew = new book_model_1.Book(req.body);
            const book = await bookNew.save();
            if (book) {
                res.redirect('/');
            }
            else {
                res.render('error');
            }
        }
        catch (err) {
            res.render('error');
        }
    }
    async getDataFromUpdate(req, res) {
        try {
            const book = await book_model_1.Book.findOne({ _id: req.body.id });
            console.log(req.body.id);
            book.title = req.body.title;
            book.description = req.body.description;
            book.author = req.body.author;
            await book.save();
            if (book) {
                res.redirect('/');
            }
            else
                res.render('error');
        }
        catch (err) {
            res.render('error');
        }
    }
    async getList(req, res) {
        try {
            let limit;
            let offset;
            if (!req.query.limit || !req.query.offset) {
                limit = 3;
                offset = 0;
            }
            else {
                limit = parseInt(req.query.limit);
                offset = parseInt(req.query.offset);
            }
            const books = await book_model_1.Book.find().limit(limit).skip(limit * offset);
            res.render('listBook', { data: books });
        }
        catch (err) {
            res.render("error");
        }
    }
    async showFormUpdate(req, res) {
        try {
            const book = await book_model_1.Book.findOne({ _id: req.query.id });
            if (book) {
                res.render('updateBook', { data: book });
            }
            else
                res.render('error');
        }
        catch (err) {
            res.render('error');
        }
    }
    async deleteBook(req, res) {
        try {
            const book = await book_model_1.Book.findOne({ _id: req.query.id });
            if (book) {
                await book.remove();
                res.redirect('/');
            }
            else
                res.render('error');
        }
        catch (err) {
            res.render('error');
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map