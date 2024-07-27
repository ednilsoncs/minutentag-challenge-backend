
import productsDataBase from '../../../shared/db/products'

class ListProductsService {
  
  public async execute(
  ) {   
  const formattedList = productsDataBase.map(product=> {
    return {
      ...product,
      image: `${process.env.FILE_URL}${product.image}`
    }
  })
 

   return formattedList
  }
}

export default ListProductsService;
