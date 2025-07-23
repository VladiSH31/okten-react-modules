import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/home-page/HomePage.tsx";
import UsersPage from "../pages/users-page/UsersPage.tsx";
import PostsPage from "../pages/posts-page/PostsPage.tsx";
import CommentsPage from "../pages/comments-page/CommentsPage.tsx";
import ComplexPage from "../pages/complex-page/ComplexPage.tsx";

export const routes = createBrowserRouter([
    {path: "", element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>},
            {path: "comments", element: <CommentsPage/>},
            {path: "complex", element: <ComplexPage/>},

    ]},
])