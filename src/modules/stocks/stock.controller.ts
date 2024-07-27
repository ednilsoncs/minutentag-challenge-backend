import { Request, Response } from 'express';
import ListProductInventoryService from './services/ListProductInventoryService'

export default class StockController { 
  public async index(request: Request, response: Response){
    const { sku } = request.params;
    const listProductInventoryService = new ListProductInventoryService()
     const product = await listProductInventoryService.execute({sku})

     return response.json(product)
  }
}