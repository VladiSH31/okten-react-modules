import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.tsx";

type MyPropsType = {
    product: IProduct;
}

const MyProducts: FC<MyPropsType> = ({product}) => {
    return (
        <div>
            <h2 className="text-xl">{product.title} {product.price} UAH</h2>
            <img src={product.image} alt={product.title}/>
        </div>
    );
};

export default MyProducts;