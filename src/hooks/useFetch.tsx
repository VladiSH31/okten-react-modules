import {useEffect, useState} from "react";

export const useFetch = <T,>(url: string, defaultValue: T) => {
    const [obj, setObj] = useState<T[]>(defaultValue)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(value => setObj(value));
    }, []);

    return obj;

}