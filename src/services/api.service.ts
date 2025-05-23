import type {IToDoComponent} from "../models/IToDoComponent.ts";

const endpointTodos = import.meta.env.VITE_API_URL + '/todos'

export const loadTodos = async ():Promise<IToDoComponent[]> => {
    const response = await fetch(endpointTodos);
    const data = await response.json();
    return data.todos;
}