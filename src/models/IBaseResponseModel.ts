import type {IProducts} from "./IProducts.ts";

export interface IBaseResponseModel {
  products?: IProducts[];
  total: number;
  skip: number;
  limit: number;
}