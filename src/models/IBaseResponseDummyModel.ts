import type {IProduct} from "./IProduct.ts";

export interface IBaseResponseDummyModel {
    "total": number,
    "skip": number,
    "limit": number,
    "products": IProduct[]
}