function createProduct(id: string, stock?: number, isNew?: boolean) {
  return {
    id,
    stock: stock || 1,
    isNew: isNew || true
  }
}

function createProductV2(id: string, stock?: number, isNew?: boolean) {
  return {
    id,
    stock: stock ?? 1,
    isNew: isNew ?? true
  }
}

// || "or" operator takes in count every falsy value
// "" = false
// 0 = false
// false = false
// null = false
// undefined = false

// ?? "nullish coalescing" operator takes in count only null and undefined

const p1 = createProduct('1')
const p2 = createProduct('2', 0, false) // stock = 1, isNew = true

const p3 = createProductV2('1')
const p4 = createProductV2('2', 0, false) // correct default values

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)