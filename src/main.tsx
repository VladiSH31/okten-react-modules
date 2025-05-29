import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import SingleUserDetailsPage from "./pages/SingleUserDetailsPage.tsx";

const routes = createBrowserRouter([
    {path: '', element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/details', element: <SingleUserDetailsPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]}
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
