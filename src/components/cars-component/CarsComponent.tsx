import {useEffect, useState} from "react";
import type {ICars} from "../../models/ICars.ts";
import {getAllCars} from "../../services/cars.service.ts";
import './CarsComponent.css'
import CarComponent from "../car-component/CarComponent.tsx";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICars[]>([]);

    useEffect(() => {
        getAllCars()
            .then(value => setCars(value))
    }, []);


    return (
        <div className="cars-container"><h1 className="cars-title">🚗 Our Cars Collection</h1>
            <div className="cars-grid">
                {
                    cars.map(value => <CarComponent key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
};

export default CarsComponent;