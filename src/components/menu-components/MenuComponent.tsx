import {Link} from "react-router-dom";
import './MenuComponent.css'

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home Page</Link></li>
                <li><Link to={'users'}>Users Page</Link></li>
                <li><Link to={'users/:id'}>User Page</Link></li>
                <li><Link to={'posts'}>Posts Page</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;