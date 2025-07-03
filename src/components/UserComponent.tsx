import {type FC, memo} from "react";

type SomeProps={
    foo: () => void
}

const UserComponent:FC<SomeProps> = memo(() => {
    console.log('user');

    return (
        <div>
            User Component
        </div>
    );
})

export default UserComponent;