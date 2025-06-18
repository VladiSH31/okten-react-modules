import {useEffect, useState} from "react";
import type {ICartModel} from "../../models/carts/ICartModel.ts";
import {cartService} from "../../services/general.api.service.tsx";
import {CartComponent} from "../cart-component/CartComponent.tsx";
import {useParams} from "react-router-dom";

export const CartsComponent = () => {
    const {id} = useParams();

    const [carts, setCarts] = useState<ICartModel[]>([]);
    useEffect(() => {
        if (id) {
            cartService.getCartsById(id).then(({carts}) => setCarts(carts))
        }
    }, [id]);

    return (
        <div>
            {
                carts.map(value => <CartComponent key={value.id} cart={value}/>)
            }
        </div>
    );
};