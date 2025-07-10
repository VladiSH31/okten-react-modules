import './ProductsPage.css'
import ProductsComponent from "../../components/products-component/ProductsComponent.tsx";

const ProductsPage = () => {
    return (
        <div>
            <div className="p-4">
                <h1 className="text-2xl font-bold text-center mb-2">
                    Products Page
                </h1>
            </div>

            <ProductsComponent/>
        </div>
    );
};

export default ProductsPage;