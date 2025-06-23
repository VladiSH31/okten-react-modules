import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (

        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex" style={{ gap: '48px', paddingLeft: '16px' }}>
                        <Link
                            to={'/'}
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors"
                        >
                            🏠 Home Page
                        </Link>
                        <Link
                            to={'users'}
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors"
                        >
                            👥 Users Page
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default MenuComponent;