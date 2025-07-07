import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


const RightBranchA = () => {

    const {counterValue, increment} = useContext(MyContext)

    return (
        <div>
            Right Branch A
            <button className={'border'} onClick={() => {
                increment(counterValue)
            }}>increment current value</button>
        </div>
    );
};

export default RightBranchA;