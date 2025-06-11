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