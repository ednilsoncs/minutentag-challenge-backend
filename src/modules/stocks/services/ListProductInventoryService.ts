import AppError from '../../../shared/errors/AppError'
import inventory from '../../../shared/db/stock-price'


class ListProductInventoryService {
  
  public async execute(
    {sku}: { sku: string}
  ) {   
   
   let productExist = null

   
   productExist = Object.keys(inventory).find(item => sku === item) as undefined | keyof typeof inventory
   
   if(!productExist) { 
    throw new AppError('This SKU not existe', 404)
   }
   
   return inventory[productExist]
  }
}

export default ListProductInventoryService;
