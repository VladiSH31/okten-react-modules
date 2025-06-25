import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {

    const {handleSubmit, register} = useForm<IFormProps>();

    const handler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };
    return (
        <div className={'m-1'}>
            <form className={''} onSubmit={handleSubmit(handler)}>
                <label htmlFor="{'username'}" className="mb-2 font-medium text-gray-700">Username:</label>
                <input id={'username'} className={'border-1 rounded-md m-2'} type="text" {...register('username')}/>
                <label htmlFor="{'password'}" className="mb-2 font-medium text-gray-700">Password:</label>
                <input id={'password'} className={'border-1 rounded-md m-2'} type="text" {...register('password')}/>
                <label htmlFor="{'age'}" className="mb-2 font-medium text-gray-700">Age:</label>
                <input id={'age'} className={'border-1 rounded-md m-2'} type="number" {...register('age')}/>
                <button className={'border-1 rounded-md m-2'}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;