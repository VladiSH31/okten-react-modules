
interface IFormProps {
    username: string,
    password: string
}

const FormComponent = () => {



    return (
        <div className={'m-1'}>
            <form className={''}>
                <input className={'border-1 rounded-md m-2'} type="text" name={'username'}/>
                <input className={'border-1 rounded-md m-2'} type="text" name={'password'}/>
                <button className={'border-1 rounded-md m-2'}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;