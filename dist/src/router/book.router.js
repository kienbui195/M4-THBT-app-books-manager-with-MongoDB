"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRouter = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const controller_1 = require("../controller/controller");
const upload = (0, multer_1.default)();
const controller = new controller_1.Controller();
bookRouter.get('/create', (req, res) => {
    controller.showFormCreate(req, res);
});
bookRouter.post('/create', upload.none(), (req, res) => {
    controller.getDataFromCreate(req, res).catch(err => {
        console.log(err.message);
    });
});
bookRouter.get('/', (req, res) => {
    controller.getList(req, res).catch(err => {
        console.log(err.message);
    });
});
bookRouter.post('/update', upload.none(), (req, res) => {
    controller.getDataFromUpdate(req, res).catch(err => {
        console.log(err.message);
    });
});
bookRouter.get('/update', (req, res) => {
    controller.showFormUpdate(req, res).catch(err => {
        console.log(err.message);
    });
});
bookRouter.get('/delete', (req, res) => {
    controller.deleteBook(req, res).catch(err => {
        console.log(err.message);
    });
});
exports.default = bookRouter;
//# sourceMappingURL=book.router.js.map