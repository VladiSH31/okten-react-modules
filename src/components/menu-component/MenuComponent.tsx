import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul className={'flex m-2'}>
                <li className={'m-2'}><Link to={'/'}>Home Page</Link></li>
                <li className={'m-2'}><Link to={'users'}>Users Page</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;