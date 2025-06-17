import {Link} from "react-router-dom";

export function Menu() {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home Page</Link></li>
                <li><Link to={'users'}>Users Page</Link></li>
            </ul>
        </div>
    );
}