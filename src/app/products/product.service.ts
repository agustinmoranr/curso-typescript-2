import { faker } from '@faker-js/faker';
import { Product, Size } from "./product.model";
import { CreateProductDto, UpdateProductDto, FilterProductDto } from './product.dto';

class UpdateProductError extends Error {}

export const products: Product[] = []


//crud
export function listProducts(): Product[] {
  return products.filter(product => !product.deleted);
}

//we can access the type of a property in an interface by key
// productId: Product['id']
// this way if the type of id changes in the future, we don't need to change the type here
export function getProduct(productId: Product['id']): Product {
  const product = products.find(product => product.id === productId);
  if(!product) {
    throw new UpdateProductError(`Product with id ${productId} not found`);
  }
  return product;
}

export function addProduct(input: CreateProductDto): Product {
  //data generated automatically from DB
  const id = faker.database.mongodbObjectId();
  const createdAt = faker.date.recent();
  //category retrieved from categoryId
  const category = { id: input.categoryId, name: faker.commerce.department(), createdAt: faker.date.past() }

  const newProduct = { ...input, id, createdAt, category };
  products.push(newProduct);
  return newProduct;
}

export function updateProduct(productId: string, productInput: UpdateProductDto): Product {
  const index = products.findIndex(product => product.id === productId);
  if(index === -1) {
    throw new UpdateProductError(`Product with id ${productId} not found`);
  }
  const updatedProduct = { ...products[index], ...productInput };
  products[index] = updatedProduct;
  return updatedProduct
}

export function deleteProduct(productId: string): Product {
  const index = products.findIndex(product => product.id === productId);
  if(index === -1) {
    throw new UpdateProductError(`Product with id ${productId} not found`);
  }
  return updateProduct(productId, { ...products[index], deleted: true })
}

export function filterProducts(input: FilterProductDto): Product[] {
  //Code for filtering by Product properties
  //input.color = "red" not allowed
  // input.tags.push('new tag') not allowed
  return products  
}

//helpers 
export const generateFakeInput = ():CreateProductDto => {
  return {
    name:  faker.commerce.productName(),  
    description: faker.commerce.productDescription(),
    price: parseInt(faker.commerce.price()),
    stock: faker.number.int({ min: 0, max: 100 }),
    size: faker.helpers.arrayElement([Size.XS, Size.S, Size.M, Size.L, Size.XL]),
    categoryId: faker.database.mongodbObjectId(),
    image: faker.image.url(),
    color: faker.color.hsl({format: 'css'}),
    isNew: faker.datatype.boolean(),
    tags: [faker.helpers.fake([faker.commerce.productAdjective(), faker.commerce.productAdjective(), faker.commerce.productAdjective()])],
  }
}
