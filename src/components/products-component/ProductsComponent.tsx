import './ProductsComponent.css'
import {useEffect, useState} from 'react';
import type {IProduct} from "../../models/IProducts.ts";
import {loadProducts} from "../../services/api.service.tsx";
import ProductComponent from "../product-component/ProductComponent.tsx";


const ProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        loadProducts().then(value => setProducts(value))
    }, []);

    return (
        <div>
            {
                products.map(value => <ProductComponent key={value.id} product={value}/>)
            }
        </div>
    );
};

export default ProductsComponent;