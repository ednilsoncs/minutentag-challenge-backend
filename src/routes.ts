import products from './modules/products/routes'
import stockRouter from './modules/stocks/routes'
import { Router } from 'express';




const routes = Router();

routes.use('/products', products)
routes.use('/stock-price', stockRouter);



export default routes