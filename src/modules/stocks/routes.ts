import { Router } from "express";
import StockController from "./stock.controller";


const stockController  = new StockController() 
const stockRouter = Router()


stockRouter.get('/:sku', stockController.index)


export default stockRouter