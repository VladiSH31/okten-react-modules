import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/home/HomePage.tsx";
import UsersPage from "../pages/users/UsersPage.tsx";
import ProductsPage from "../pages/products/ProductsPage.tsx";


export const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'products', element: <ProductsPage/>}
        ]}
])
