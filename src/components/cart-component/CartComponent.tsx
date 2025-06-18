import type {FC} from "react";
import type {ICartModel} from "../../models/carts/ICartModel.ts";
import './CartComponent.css'

type CartPropsModel = {
    cart: ICartModel
}

export const CartComponent:FC<CartPropsModel> = ({cart}) => {
    return (
        <div className="cart-card">
            {/* Заголовок кошика */}
            <div className="cart-header">
                <h2 className="cart-title">Кошик #{cart.id}</h2>
                <div className="cart-meta">
                    <span className="cart-user">User: {cart.userId}</span>
                    <span className="cart-products-count">{cart.totalProducts} товарів</span>
                </div>
            </div>

            {/* Список товарів */}
            <div className="cart-products">
                <h3 className="products-title">Товари в кошику</h3>
                <div className="products-list">
                    {cart.products.map((product) => (
                        <div key={product.id} className="product-item">
                            <div className="product-image">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="product-thumbnail"
                                />
                            </div>
                            <div className="product-details">
                                <h4 className="product-title">{product.title}</h4>
                                <div className="product-info">
                                    <span className="product-price">${product.price}</span>
                                    <span className="product-quantity">x{product.quantity}</span>
                                </div>
                                <div className="product-totals">
                                    <span className="product-total">
                                        Всього: ${product.total.toFixed(2)}
                                    </span>
                                    <span className="product-discount">
                                        Зі знижкою: ${product.discountedTotal.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Підсумок кошика */}
            <div className="cart-summary">
                <div className="summary-row">
                    <span className="summary-label">Загальна кількість:</span>
                    <span className="summary-value">{cart.totalQuantity} шт</span>
                </div>
                <div className="summary-row">
                    <span className="summary-label">Сума без знижки:</span>
                    <span className="summary-value">${cart.total.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                    <span className="summary-label">До сплати:</span>
                    <span className="summary-value">${cart.discountedTotal.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};