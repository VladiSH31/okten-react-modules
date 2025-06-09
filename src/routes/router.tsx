import HomePage from "../Pages/HomePage.tsx";
import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../Pages/UsersPage.tsx";
import PostsPage from "../Pages/PostsPage.tsx";
import CommentsPage from "../Pages/CommentsPage.tsx";
import ProductsPage from "../Pages/ProductsPage.tsx";
import MainLayouts from "../layouts/MainLayouts.tsx";

export const router = createBrowserRouter([

    {
        path: '/', element: <MainLayouts/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'products', element: <ProductsPage/>}
        ]
    },

])