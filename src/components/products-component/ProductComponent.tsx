import './ProductComponent.css'
import type {IProducts} from "../../models/IProducts.ts";
import type {FC} from "react";

type IProductProps = {
    item: IProducts
}

const ProductComponent:FC<IProductProps> = ({item}) => {
    return (
        <div>
            <div>{item.title}</div>
            <div>{item.brand}</div>
            <div>{item.description}</div>
            <div>{item.images.map((image, index) => (
                <div className={'flex'} key={index}>
                    <img className={'w-1/3'} src={image} alt={item.title}/>
                </div>
            ))}</div>
        </div>
    );
};

export default ProductComponent;