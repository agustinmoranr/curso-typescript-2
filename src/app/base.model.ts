
// 1. we can define a reusable interface that our models can extend from
// 2. we can use readonly to define properties that can't be changed
export interface BaseModel {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt?: Date;
  deleted?: boolean;
}