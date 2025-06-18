import type {FC} from "react";
import type {ICartModel} from "../../models/carts/ICartModel.ts";

type CartPropsModel = {
    cart: ICartModel
}

export const CartComponent:FC<CartPropsModel> = ({cart}) => {
    return (
        <div>
            <div>{cart.total}</div>
            <div>{cart.totalQuantity}</div>
            <div></div>
        </div>
    );
};