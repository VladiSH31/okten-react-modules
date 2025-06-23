import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const route = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[
            {path: 'users', element: <UsersPage/>}
        ]}
])