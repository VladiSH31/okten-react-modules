import Menu from "../menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;