import {useEffect, useState} from "react";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import type {IToDoComponent} from "../../models/IToDoComponent.ts";
import './TodoComponents.css'
import {loadtodos} from "../../services/api.service.ts";

const TodoComponents = () => {

    const [items, setItems] = useState<IToDoComponent[]>([])

    useEffect(() => {
        loadtodos().then(value => setItems(value))
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