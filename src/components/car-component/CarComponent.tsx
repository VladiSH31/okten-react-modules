import './CarComponent.css'
import type {FC} from "react";
import type {ICars} from "../../models/ICars.ts";


type CarsPropsType = {
    item: ICars
}

const CarComponent: FC<CarsPropsType> = ({item}) => {
    return (
        <div className="car-card">
            <div className="car-id">{item.id}</div>
            <div className="car-brand">{item.brand}</div>
            <div className="car-year">{item.year}</div>
            <div className="car-price">{item.price}</div>
        </div>
    );
};

export default CarComponent;