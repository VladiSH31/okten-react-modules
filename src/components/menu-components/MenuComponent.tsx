import {NavLink} from "react-router-dom";
import './MenuComponent.css';

const MenuComponent = () => {
    const getLinkClass = ({isActive}: { isActive: boolean }) => isActive ? 'activeLink' : 'normalLink';

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="flex items-center space-x-4 h-16 text-lg">
                    <li><NavLink to={'/'} className={getLinkClass}>Home</NavLink></li>
                    <li><NavLink to={'/users'} className={getLinkClass}>Users</NavLink></li>
                    <li><NavLink to={'/posts'} className={getLinkClass}>Posts</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default MenuComponent;