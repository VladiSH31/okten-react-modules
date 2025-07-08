import {useEffect, useState} from "react";
import {getAll} from "../services/api.services.tsx";

export const useFetch = <T,>(endpoint: string, defaultValue: []) => {
    const [object, setObject] = useState<T[]>(defaultValue)

    useEffect(() => {
        getAll(endpoint)
            .then(users => setObject(users))
    }, [endpoint]);
    
    return object;
}