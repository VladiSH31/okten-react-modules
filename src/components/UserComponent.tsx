import {type FC, memo} from "react";

type SomeProps = {
    foo: () => void,
    arr: number[],
    item: {name:string}
}

const UserComponent: FC<SomeProps> = memo(({arr, item}: SomeProps) => {
    console.log('user');
    console.log(arr)

    return (
        <div>

            <div>{item.name}</div>
        </div>
    );
})

export default UserComponent;