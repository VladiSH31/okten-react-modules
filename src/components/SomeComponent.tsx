import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {getUsersPage} from "../services/api.service.tsx";


const SomeComponent = () => {

    const [query] = useSearchParams();

    useEffect(() => {
        const pg = query.get('pg')

        if (pg) {
            getUsersPage(+pg)
                .then(json => console.log(json))
        }

    }, [query]);

    return (
        <div>

        </div>
    );
};

export default SomeComponent;