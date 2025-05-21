import type {IToDoComponent} from "../models/IToDoComponent.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'

export const loadtodos = async ():Promise<IToDoComponent[]> => {
    return await fetch(endpointTodos)
        .then(response => response.json())

}