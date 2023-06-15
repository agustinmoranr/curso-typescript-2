
type Size = 'small' | 'medium' | 'large';

/* 
the difference between a type and an interface is that an interface can be implemented by a class, and we can extend multiple interfaces, but we can only extend one type.
 */


// type Product = {
//   name: string;
//   price: number;
//   stock: number;
//   size?: Size;
// }

interface Product {
  name: string;
  price: number;
  stock: number;
  size?: Size;
}
