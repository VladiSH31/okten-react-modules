import {useLocation} from "react-router-dom";
import type {IUser} from "../models/IUser.ts";
import SingleUserDetailsComponent from "../components/single-user-details-component/SingleUserDetailsComponent.tsx";

const SingleUserDetailsPage = () => {
    const {state} = useLocation();
    const user = state as IUser
    return (
        <div>
           <SingleUserDetailsComponent user={user}/>
        </div>
    );
};

export default SingleUserDetailsPage;