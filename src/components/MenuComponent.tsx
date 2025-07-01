import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul className={'flex gap-3 m-4'}>
                <li className={'border-2 border-gray-600 rounded-md p-2'}>
                    <Link to={''}>Home Page</Link>
                </li>
                <li className={'border-2 border-gray-600 rounded-md p-2'}>
                    <Link to={'login'}>Login Page</Link>
                </li>
                <li className={'border-2 border-gray-600 rounded-md p-2'}>
                    <Link to={'auth/resources'}>Auth Resources Page</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;