import type {IProduct} from "../models/IProducts.ts";

const productsUrl = import.meta.env.VITE_API_URL + '/products'

type dataProducts = {
    products: IProduct[],
    total: number,
    skip: number,
    limit: number
}

export const loadProducts = async (): Promise<IProduct[]> => {
    const response = await fetch(productsUrl)
    const data: dataProducts = await response.json()
    return data.products;
}