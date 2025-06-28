import './FormComponent.css'
import {useForm} from "react-hook-form";
import {saveCars} from "../../services/cars.service.ts";

interface IFormProps {
    id: number;
    brand: string;
    price: number;
    year: number;
}

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({mode:'all'});


    const customHandler = (formDataValue: IFormProps) => {
        saveCars(formDataValue).then(value => console.log(value))
    };

    return (
        <div className="form-container"><h2 className="form-title">Add New Car</h2>
            <form className="car-form" onSubmit={handleSubmit(customHandler)}>
                {/*<div className="form-group"><label className="form-label">Car ID</label> <input className="form-input"*/}
                {/*                                                                                type="number"*/}
                {/*                                                                                placeholder="Enter ID"*/}
                {/*                                                                                {...register('id')}          />*/}
                {/*</div>*/}
                <div className="form-group"><label className="form-label">Brand<input className="form-input"
                                                                                               type="text"
                                                                                               placeholder="Enter car brand (e.g., BMW, Mercedes)"
                                                                                               {...register('brand')}          />
                    {errors.brand && errors.brand.message}
                </label>
                </div>
                <div className="form-group"><label className="form-label">Price <input className="form-input"
                                                                                               type="number"
                                                                                               placeholder="Enter price in USD"
                                                                                               {...register('price')}          />
                    {errors.price && errors.price.message}
                </label>
                </div>
                <div className="form-group"><label className="form-label">Year <input className="form-input"
                                                                                              type="number"
                                                                                              placeholder="Enter manufacturing year"
                                                                                              {...register('year')}          />
                    {errors.year && errors.year.message}
                </label>
                </div>
                <button className="submit-button" type="submit" disabled={!isValid}> ✨ Add Car</button>
            </form>
        </div>
    );
};

export default FormComponent;