import './FormComponent.css'
import {useForm} from "react-hook-form";

interface IFormProps {
    id: number;
    brand: string;
    price: number;
    year: number;
}

const FormComponent = () => {
    const {handleSubmit, register} = useForm<IFormProps>();


    const customHandler = (formDataValue: IFormProps) => {
        console.log(formDataValue);
    };

    return (
        <div className="form-container"><h2 className="form-title">Add New Car</h2>
            <form className="car-form" onSubmit={handleSubmit(customHandler)}>
                <div className="form-group"><label className="form-label">Car ID</label> <input className="form-input"
                                                                                                type="number"
                                                                                                placeholder="Enter ID"
                                                                                                {...register('id')}          />
                </div>
                <div className="form-group"><label className="form-label">Brand</label> <input className="form-input"
                                                                                               type="text"
                                                                                               placeholder="Enter car brand (e.g., BMW, Mercedes)"
                                                                                               {...register('brand')}          />
                </div>
                <div className="form-group"><label className="form-label">Price</label> <input className="form-input"
                                                                                               type="number"
                                                                                               placeholder="Enter price in USD"
                                                                                               {...register('price')}          />
                </div>
                <div className="form-group"><label className="form-label">Year</label> <input className="form-input"
                                                                                              type="number"
                                                                                              placeholder="Enter manufacturing year"
                                                                                              {...register('year')}          />
                </div>
                <button className="submit-button" type="submit"> ✨ Add Car</button>
            </form>
        </div>
    );
};

export default FormComponent;