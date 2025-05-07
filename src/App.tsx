import './App.css'
import {productsArray} from "./data/ProductsArray.tsx";
import MyProducts from "./components/my-products/MyProducts.tsx";

function App() {
    return (
        <>
            {
                productsArray.map((product, index) => <MyProducts key={index} product={product}/>
                    )

            }
        </>
    )
}

export default App
