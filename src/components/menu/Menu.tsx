import { Link } from "react-router-dom";
import './Menu.css';

export function Menu() {
    return (
        <nav className="menu-container">
            <ul className="menu-list">
                <li className="menu-item">
                    <Link to={''} className="menu-link">
                        Home Page
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to={'users'} className="menu-link">
                        Users Page
                    </Link>
                </li>
            </ul>
        </nav>
    );
}