import type {FC, ReactNode} from "react";
import type {ISimps} from "../../../models/ISimps.tsx";

type MySimsProps ={
    value: ISimps,
    children: ReactNode
}

const MyCharacterComponent:FC<MySimsProps> = ({value, children}) => {
    return (
        <div>
            <h2>{value.name} {value.surname}</h2>
            <img src={value.photo} alt={value.name}/>
            <p>Age: {value.age}</p>
            <p>{children}</p>
        </div>
    );
};

export default MyCharacterComponent;