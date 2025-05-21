import {useEffect, useState} from "react";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import type {IToDoComponent} from "../../models/IToDoComponent.ts";
import './TodoComponents.css'

const TodoComponents = () => {

    const [items, setItems] = useState<IToDoComponent[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(response => setItems(response))
    }, []);


    return (
        <div>
            {
                items.map((item) => <TodoComponent key={item.id} item={item}/>)
            }
        </div>
    );
};

export default TodoComponents;