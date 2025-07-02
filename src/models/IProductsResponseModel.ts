import type {IProducts} from "./IProducts.ts";

export interface IProductsResponseModel {
  products: IProducts[];
  total: number;
  skip: number;
  limit: number;
}