import express from "express";
const bookRouter = express.Router();
import multer from "multer";
import { Controller } from "../controller/controller";
const upload = multer();

const controller = new Controller();

bookRouter.get('/create', (req, res) => {
    controller.showFormCreate(req, res);
})

bookRouter.post('/create', upload.none(), (req, res) => {
    controller.getDataFromCreate(req, res).catch (err => {
        console.log(err.message)
    })
})

bookRouter.get('/', (req, res) => {
    controller.getList(req, res).catch (err => {
        console.log(err.message)
    })
})

bookRouter.post('/update', upload.none(), (req, res) => {
    controller.getDataFromUpdate(req, res).catch (err => {
        console.log(err.message)
    })
})

bookRouter.get('/update', (req, res) => {
    controller.showFormUpdate(req, res).catch (err => {
        console.log(err.message)
    })
})

bookRouter.get('/delete', (req, res) => {
    controller.deleteBook(req, res).catch (err => {
        console.log(err.message)
    })
})


export default bookRouter;