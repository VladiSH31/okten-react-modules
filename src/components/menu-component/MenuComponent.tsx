import './MenuComponent.css'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {MyContextTheme} from "../../MyContextTheme.tsx";

const MenuComponent = () => {
    const {theme, changeTheme} = useContext(MyContextTheme)

    const handler = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        changeTheme(newTheme);
    }
    return (
        <div>
            <nav className="flex justify-between items-center px-4 py-2">
                <ul>
                    <li><Link to={'/'}>Home Page</Link></li>
                    <li><Link to={'/users'}>Users Page</Link></li>
                    <li><Link to={'/products'}>Products Page</Link></li>
                </ul>
                <div>
                    <button onClick={handler} className="theme-toggle">
                        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                    </button>
                </div>
            </nav>

        </div>
    );
};

export default MenuComponent;