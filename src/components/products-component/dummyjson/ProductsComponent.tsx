import './ProductsComponent.css'
import {useEffect, useState} from "react";
import type {IProductsDummyjson} from "../../../models/products/dummyjson/IProductsDummyjson.ts";
import {getDummyJson} from "../../../services/Global.api.service.ts";
import type {IBaseResponseModel} from "../../../models/IBaseResponseModel.ts";
import ProductComponent from "../../product-component/dummyjson/ProductComponent.tsx";

const ProductsComponent = () => {

    const [products, setProducts] = useState<IProductsDummyjson[]>([])
    useEffect(() => {
        getDummyJson<IBaseResponseModel & { products: IProductsDummyjson[] }>('products')
            .then(({products}) => setProducts(products))
    }, []);

    return (
        <div>
            {
                products.map(value => <ProductComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default ProductsComponent;