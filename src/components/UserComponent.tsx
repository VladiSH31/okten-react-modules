import {type FC, memo} from "react";

type SomeProps = {
    foo: () => void,
    arr: number[]
}

const UserComponent: FC<SomeProps> = memo(({arr}: SomeProps) => {
    console.log('user');
    console.log(arr)

    return (
        <div>
            User Component
        </div>
    );
})

export default UserComponent;