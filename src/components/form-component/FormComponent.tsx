import {type FormEvent,  useState} from "react";


interface IFormProps {
    username: string,
    password: string
}

const FormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: 'asd',
        password: 'qwe'
    });


    const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        console.log(form.username.value);
        console.log(form.password.value);
    };

    const onInputUsernameChange = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement
        console.log(input.value)
        setFormState({...formState, username: input.value})
    };

    const onInputPasswordChange = (event: FormEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        console.log(input);
        setFormState({...formState, password: input.value})
    };

    return (
        <div className={'m-1'}>
            <form className={''} onSubmit={handlerSubmit}>
                <input className={'border-1 rounded-md m-2'} type="text" name={'username'} value={formState.username}
                       onChange={onInputUsernameChange}/>
                <input className={'border-1 rounded-md m-2'} type="text" name={'password'} value={formState.password}
                       onChange={onInputPasswordChange}/>
                <button className={'border-1 rounded-md m-2'}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;