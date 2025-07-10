import './ProductComponent.css'
import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductProps = {
    product: IProduct
}

const ProductComponent:FC<ProductProps> = ({product}) => {
    return (
        <div className="product-card">
            <div className="product-header">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">${product.price}</div>
            </div>

            <div className="product-description">
                {product.description}
            </div>

            <div className="product-footer">
                <div className="product-status">
                    <span className={`status-badge ${
                        product.availabilityStatus === 'In Stock'
                            ? 'status-in-stock'
                            : 'status-out-of-stock'
                    }`}>
                        {product.availabilityStatus}
                    </span>
                </div>

                <div className="product-rating">
                    <span className="rating-stars">⭐</span>
                    <span className="rating-value">{product.rating}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;