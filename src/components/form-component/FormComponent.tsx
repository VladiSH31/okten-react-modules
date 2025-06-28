import  './FormComponent.css'
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
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>ID:<input type="text" {...register('id')}/></label>
                <label>Brand:<input type="text" {...register('brand')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>Send</button>
            </form>
        </div>
    );
};

export default FormComponent;