import {Outlet} from "react-router-dom";
import MenuComponent from "../components/menu-component/MenuComponent.tsx";
import {MyContextTheme} from "../MyContextTheme.tsx";
import {useState} from "react";


const MainLayout = () => {
    const [theme, setTheme] = useState<string>('light')
    return (
        <div className={`app ${theme}`}>
            <MyContextTheme.Provider value={{
                theme: theme,
                changeTheme: (themeValue) => {
                    setTheme(themeValue)
                }
            }}>

                <MenuComponent/>
                <Outlet/>
            </MyContextTheme.Provider>
        </div>
    );
};

export default MainLayout;