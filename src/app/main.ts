import { products, listProducts,addProduct, updateProduct,deleteProduct, getProduct, filterProducts, generateFakeInput, } from "./products/product.service";

while(products.length < 3) {
  addProduct(generateFakeInput());
}

console.log("updatedProduct", updateProduct(products[0].id, { name: 'New name', description: 'New description' }));
console.log("deletedProduct", deleteProduct(products[0].id));
console.log("getProduct", getProduct(products[1].id))
console.log("listProducts", listProducts())
console.log("filterProducts", filterProducts({ isNew: true }))

