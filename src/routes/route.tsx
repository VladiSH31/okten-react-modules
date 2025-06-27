import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import CreateCarsPage from "../pages/CreateCarsPage.tsx";

const route = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element: <CreateCarsPage/>}
        ]}
])

export default route;