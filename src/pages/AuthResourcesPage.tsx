import {useEffect, useState} from "react";
import {loadAuthResources, refresh} from "../services/api.service.tsx";
import type {IProducts} from "../models/IProducts.ts";
import ProductComponent from "../components/products-component/ProductComponent.tsx";

const AuthResourcesPage = () => {
    const [products, setProducts] = useState<IProducts[]>([])

    useEffect(() => {
        loadAuthResources()
            .then(value => setProducts(value))
            //     якщо виникає помилка ми її ловимо, і викликаємо функцію рефреш, яка оновлює пару токени
            .catch(reason => {
                console.log(reason);
                refresh()
                    .then(() => loadAuthResources())
                    .then(value => setProducts(value))
            })
    }, []);


    return (
        <div>
            {
                products.map(product =>
                    <ProductComponent key={product.id} item={product}/>
                )
            }
        </div>
    );
};

export default AuthResourcesPage;