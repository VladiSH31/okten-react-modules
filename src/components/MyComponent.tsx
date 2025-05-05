// import type {FC} from "react";
//
// type MyComponentPropType = { text: string }
//
// const MyComponent: FC<MyComponentPropType> = ({text}) => {
//     return <div>{text}</div>
// }
//
// export default MyComponent

import type {FC} from "react";
import styles from './MyComponent.module.css'

type MyComponentPropType = { text: string }

const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return (
        <div className={styles.target}>
            {text}
        </div>
    );
};

export default MyComponent;