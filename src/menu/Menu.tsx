import {Link} from "react-router-dom";
import  './Menu.css'

export const Menu = () => {
    return (
        <div className="menu-container">
            <ul className="menu-list">
                <li className="menu-item"><Link to={'/'} className="menu-link">Home Page</Link></li>
                <li className="menu-item"><Link to={'/users'} className="menu-link">Users Page</Link></li>
                <li className="menu-item"><Link to={'/posts'} className="menu-link">Posts Page</Link></li>
                <li className="menu-item"><Link to={'/comments'} className="menu-link">Comments Page</Link></li>
                <li className="menu-item"><Link to={'/products'} className="menu-link">Products Page</Link></li>
            </ul>
        </div>
    );
};

export default Menu;