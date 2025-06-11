import HomePage from "../Pages/HomePage.tsx";
import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../Pages/users/UsersPage.tsx";
import PostsPage from "../Pages/posts/PostsPage.tsx";
import CommentsPage from "../Pages/comments/CommentsPage.tsx";
import ProductsPage from "../Pages/products/ProductsPage.tsx";
import MainLayouts from "../layouts/MainLayouts.tsx";
import UsersJsonplaceholderPage from "../Pages/users/jsonplaceholder/UsersJsonplaceholderPage.tsx";
import UsersDummyjsonPage from "../Pages/users/dummyjson/UsersDummyjsonPage.tsx";
import PostsDummyjsonPage from "../Pages/posts/dummyjson/PostsDummyjsonPage.tsx";
import PostsJsonplaceholderPage from "../Pages/posts/jsonplaceholder/PostsJsonplaceholderPage.tsx";
import CommentsJsonplaceholderPage from "../Pages/comments/jsonplaceholder/CommentsJsonplaceholderPage.tsx";
import CommentsDummyjsonPage from "../Pages/comments/dummyjson/CommentsDummyjsonPage.tsx";
import ProductsJsonplaceholderPage from "../Pages/products/jsonplaceholder/ProductsJsonplaceholderPage.tsx";
import ProductsDummyjsonPage from "../Pages/products/dummyjson/ProductsDummyjsonPage.tsx";

export const router = createBrowserRouter([

    {
        path: '/', element: <MainLayouts/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <UsersJsonplaceholderPage/>},
                    {path: 'dummyjson', element: <UsersDummyjsonPage/>}
                ]},
            {path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <PostsJsonplaceholderPage/>},
                    {path: 'dummyjson', element: <PostsDummyjsonPage/>}
                ]},
            {path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <CommentsJsonplaceholderPage/>},
                    {path: 'dummyjson', element: <CommentsDummyjsonPage/>}
                ]},
            {path: 'products', element: <ProductsPage/>, children: [
                    {path: 'jsonplaceholder', element: <ProductsJsonplaceholderPage/>},
                    {path: 'dummyjson', element: <ProductsDummyjsonPage/>}
                ]}
        ]
    },

])