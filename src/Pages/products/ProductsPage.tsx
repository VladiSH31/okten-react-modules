import { Link, Outlet } from "react-router-dom";
import './ProductsPage.css'

const ProductsPage = () => {
    return (
        <div className="products-page-container bg-gray-50 min-h-screen p-6">
            <div className="products-blocks-container space-y-4">
                <div className="products-block">
                    <Link to="jsonplaceholder" className="products-block-link">
                        Products JSONPlaceHolder
                    </Link>
                </div>
                <div className="products-block">
                    <Link to="dummyjson" className="products-block-link">
                        Products DummyJSON
                    </Link>
                </div>
            </div>
            <div className="content-container mt-6">
                <Outlet />
            </div>
        </div>
    );
};

export default ProductsPage;