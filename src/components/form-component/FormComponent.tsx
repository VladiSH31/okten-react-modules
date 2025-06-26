import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../../validators/user.validator.ts";

interface IFormProps {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({mode: 'all', resolver:joiResolver(userValidator)});

    const handler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };

    return (
        <div className={'m-1'}>
            <form className={''} onSubmit={handleSubmit(handler)}>
                <label htmlFor="{'username'}" className="mb-2 font-medium text-gray-700">Username:

                <input id={'username'} className={'border-1 rounded-md m-2'} type="text" {...register('username')}/>
                    {errors.username && <div>{errors.username.message}</div>}

                </label>
                <label htmlFor="{'password'}" className="mb-2 font-medium text-gray-700">Password:

                <input id={'password'} className={'border-1 rounded-md m-2'} type="text" {...register('password')}/>
                    {errors.password && <div>{errors.password.message}</div>}

                </label>
                <label htmlFor="{'age'}" className="mb-2 font-medium text-gray-700">Age:

                <input id={'age'} className={'border-1 rounded-md m-2'} type="number" {...register('age')}/>
                    {errors.age && <div>{errors.age.message}</div>}

                </label>
                <button className={'border-1 rounded-md m-2'} disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;