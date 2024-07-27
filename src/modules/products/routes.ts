import { Router } from "express";
import ProductsController from "./products.controllers";


const productsController  = new ProductsController() 
const productsRouter = Router()


productsRouter.get('/', productsController.index)


export default productsRouter