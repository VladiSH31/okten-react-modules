import {useEffect} from "react";
import {loadAuthResources, refresh} from "../services/api.service.tsx";

const AuthResourcesPage = () => {
    useEffect(() => {
        loadAuthResources()
            .then(value => console.log(value)).catch(reason => {
            console.log(reason);
            refresh()
                .then(() => loadAuthResources())
        })
    }, []);


    return (
        <div>
            Auth Resources Page
        </div>
    );
};

export default AuthResourcesPage;