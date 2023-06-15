import { Product } from "./product.model";

//Omit Allow us to create a new type from an existing type by *removing* the properties we want to remove.
export interface CreateProductDto extends Omit<Product, "id" | "createdAt" | "category">  {
  categoryId: string;
}

//Pick Allow us to create a new type from an existing type by *selecting* the properties we want to keep.
type PickExample = Pick<Product, "name" | "description">;

//Parcial make all properties of an interface or type *optional*.
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Required make all properties of an interface or type *required*.
type RequiredExample = Required<Product>;

export interface FilterProductDto extends Readonly<Partial<Omit<Product, "tags">>> {
  readonly tags?: ReadonlyArray<string>;
}