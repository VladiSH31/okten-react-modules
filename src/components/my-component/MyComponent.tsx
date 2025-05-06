// import type {FC} from "react";
//
// type MyComponentPropType = { text: string }
//
// const MyComponent: FC<MyComponentPropType> = ({text}) => {
//     return <div>{text}</div>
// }
//
// export default MyComponent

import type {FC, ReactNode} from "react";


type MyComponentPropType = { title: string; children?: ReactNode }

const MyComponent: FC<MyComponentPropType> = ({title, children}) => {
    return (
        <div className='text-3xl font-bold underline'>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};

export default MyComponent;