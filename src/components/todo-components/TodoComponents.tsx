import {useEffect, useState} from "react";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import type {IToDoComponent} from "../../models/IToDoComponent.ts";
import './TodoComponents.css'
import {loadTodos} from "../../services/api.service.ts";

const TodoComponents = () => {

    const [items, setItems] = useState<IToDoComponent[]>([])

    useEffect(() => {
        loadTodos().then(value => setItems(value))
    }, []);


    return (
        <div>
            {
                items.map(value => <TodoComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default TodoComponents;