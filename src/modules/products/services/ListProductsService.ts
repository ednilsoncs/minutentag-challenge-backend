
import ListProductInventoryService from '../../stocks/services/ListProductInventoryService'
import productsDataBase from '../../../shared/db/products'

class ListProductsService {
  
  public async execute(
  ) {   
  const listProductInventoryService = new ListProductInventoryService()


  const formattedList = []

  for await (const product of productsDataBase){
    let price = 0

    for await (const item of product.skus){ 
      const inventoryItem = await listProductInventoryService.execute({sku: item.code})
      
      if(inventoryItem.stock > 0 && ( price === 0 || inventoryItem.price < price))
        price = inventoryItem.price
    }
   

    formattedList.push({
      ...product,
      image: `${process.env.FILE_URL}${product.image}`,
      price: price
    })
  }
 

   return formattedList
  }
}

export default ListProductsService;
