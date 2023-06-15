function createProduct(
    id: string,
    stock: number = 1, // default value
    isNew: boolean =  true // default value
  ) {
  return {
    id,
    stock: stock,
    isNew: isNew
  }
}



export const p1 = createProduct('1')
export const p2 = createProduct('2', 0, false) 
export const p3 = createProduct('1') // stock = 1, isNew = true
export const p4 = createProduct('2', 0, false) // correct default values

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)