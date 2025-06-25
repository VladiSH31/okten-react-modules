import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {

    useForm<IFormProps>();

    return (
        <div className={'m-1'}>
            <form className={''}>
                <label htmlFor="{'username'}" className="mb-2 font-medium text-gray-700">Username:</label>
                <input id={'username'} className={'border-1 rounded-md m-2'} type="text" name={'username'}/>
                <label htmlFor="{'password'}" className="mb-2 font-medium text-gray-700">Password:</label>
                <input id={'password'} className={'border-1 rounded-md m-2'} type="text" name={'password'}/>
                <label htmlFor="{'age'}" className="mb-2 font-medium text-gray-700">Age:</label>
                <input id={'age'} className={'border-1 rounded-md m-2'} type="number" name={'age'}/>
                <button className={'border-1 rounded-md m-2'}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;