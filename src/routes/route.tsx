import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layoutes/MainLayout.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>}
])