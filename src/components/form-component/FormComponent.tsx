import './FormComponent.css'
import {useForm} from "react-hook-form";
import {saveCars} from "../../services/cars.service.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsValidator} from "../../validators/cars.validator";

interface IFormProps {
    id: number;
    brand: string;
    price: number;
    year: number;
}

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}}
        = useForm<IFormProps>({mode:'all', resolver: joiResolver(carsValidator)});


    const customHandler = (formDataValue: IFormProps) => {
        saveCars(formDataValue).then(value => console.log(value))
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Add New Car</h2>
            <form className="car-form" onSubmit={handleSubmit(customHandler)}>

                <div className="form-group">
                    <label className="form-label">Brand</label>
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Enter car brand (e.g., BMW, Mercedes)"
                        {...register('brand')}
                    />
                    {errors.brand && (
                        <span className="error-message">{errors.brand.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label">Price</label>
                    <input
                        className="form-input"
                        type="number"
                        placeholder="Enter price in USD"
                        {...register('price')}
                    />
                    {errors.price && (
                        <span className="error-message">{errors.price.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label">Year</label>
                    <input
                        className="form-input"
                        type="number"
                        placeholder="Enter manufacturing year"
                        {...register('year')}
                    />
                    {errors.year && (
                        <span className="error-message">{errors.year.message}</span>
                    )}
                </div>

                <button className="submit-button" type="submit" disabled={!isValid}>
                    ✨ Add Car
                </button>
            </form>
        </div>
    );
};

export default FormComponent;