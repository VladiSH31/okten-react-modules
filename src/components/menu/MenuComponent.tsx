import {Link} from "react-router-dom";
import './MenuComponent.css'

const MenuComponent = () => {
    return (
        <div className="menu-container">
            <div className="menu-wrapper">
                <nav className="menu-nav">
                    <ul className="menu-list">
                        <li className="menu-item"><Link to={'/'} className="menu-link"> 🏠 Home Page </Link></li>
                        <li className="menu-item"><Link to={'cars'} className="menu-link"> 🚗 Cars Page </Link></li>
                        <li className="menu-item"><Link to={'cars/create'} className="menu-link"> ➕ Add Cars
                            Page </Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MenuComponent;