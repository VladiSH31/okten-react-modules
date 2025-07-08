import './ProductsComponent.css'
import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.ts";
import {axiosGetAll} from "../../services/api.services.tsx";
import ProductComponent from "../product-component/ProductComponent.tsx";

const ProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        axiosGetAll('/products').then(value => setProducts(value.products))
    }, []);

    return (
        <div>
            {products.map(value => <ProductComponent product={value}/>)}
        </div>
    );
};

export default ProductsComponent;