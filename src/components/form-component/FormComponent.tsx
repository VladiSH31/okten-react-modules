import {useForm} from "react-hook-form";

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
    } = useForm<IFormProps>({mode: 'all'});

    const handler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };
    return (
        <div className={'m-1'}>
            <form className={''} onSubmit={handleSubmit(handler)}>
                <label htmlFor="{'username'}" className="mb-2 font-medium text-gray-700">Username:
                <input id={'username'} className={'border-1 rounded-md m-2'} type="text" {...register('username',{
                    required: true,
                    minLength: {
                        value: 4,
                        message: 'username is too short'
                    },
                    maxLength: {
                        value: 12,
                        message: 'username is too long'
                    }
                })}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label htmlFor="{'password'}" className="mb-2 font-medium text-gray-700">Password:
                <input id={'password'} className={'border-1 rounded-md m-2'} type="text" {...register('password', {
                    required: true,
                    minLength: {
                        value: 3,
                        message: 'pass is too short'
                    },
                    maxLength: {
                        value: 10,
                        message: 'pass is too long'
                    }
                })}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label htmlFor="{'age'}" className="mb-2 font-medium text-gray-700">Age:
                <input id={'age'} className={'border-1 rounded-md m-2'} type="number" {...register('age', {
                    required:true,
                    valueAsNumber: true,
                    min: {
                        value:1,
                        message: 'age too small'
                    },
                    max: {
                        value: 117,
                        message: 'age to big'
                    }
                })}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button className={'border-1 rounded-md m-2'} disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;