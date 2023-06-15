import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL'
};

export interface Product extends BaseModel {
  name: string;
  description: string;
  price: number;
  stock: number;
  size?: Size;
  category?: Category
  image?: string;
  color?: string;
  isNew: boolean;
  tags?: string[];
}

