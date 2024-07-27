import { Request, Response } from 'express';
import ListProductsService from './services/ListProductsService'

export default class ProductsController { 
  public async index(request: Request, response: Response){
    const listProductsService = new ListProductsService()
     const products = await listProductsService.execute()

     return response.json(products)
  }
}