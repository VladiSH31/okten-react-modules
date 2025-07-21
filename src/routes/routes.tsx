import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home-page/HomePage.tsx";
import UsersPage from "../pages/users-page/UsersPage.tsx";
import UserPage from "../pages/user-page/UserPage.tsx";
import PostsPage from "../pages/posts-page/PostsPage.tsx";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path:'users', element: <UsersPage/>},
            {path:'users/:id', element: <UserPage/>},
            {path:'posts', element: <PostsPage/>}
        ]}
])


