import { Request, Response } from "express";
declare class Controller {
    showFormCreate(req: Request, res: Response): void;
    getDataFromCreate(req: Request, res: Response): Promise<void>;
    getDataFromUpdate(req: Request, res: Response): Promise<void>;
    getList(req: Request, res: Response): Promise<void>;
    showFormUpdate(req: Request, res: Response): Promise<void>;
    deleteBook(req: Request, res: Response): Promise<void>;
}
export { Controller };
