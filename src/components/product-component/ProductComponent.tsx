import './ProductComponent.css'
import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductProps = {
    product: IProduct
}

const ProductComponent:FC<ProductProps> = ({product}) => {
    return (
        <div>
            <div>{product.title}</div>
            <div>{product.description}</div>
        </div>
    );
};

export default ProductComponent;