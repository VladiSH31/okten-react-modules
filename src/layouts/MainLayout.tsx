import {Outlet} from "react-router-dom";
import MenuComponent from "../components/menu-components/MenuComponent.tsx";
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <MenuComponent/>
            <main className="main-content">
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;