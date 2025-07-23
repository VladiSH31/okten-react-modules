import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";

export const routes = createBrowserRouter([
    {path: "/", element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>},
            {path: "comments", element: <CommentsPage/>},
            {path: "complex", element: <ComplexPage/>},

    ]},
])