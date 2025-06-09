import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage from "./Pages/UsersPage.tsx";
import MainLayouts from "./layouts/MainLayouts.tsx";
import PostsPage from "./Pages/PostsPage.tsx";
import CommentsPage from "./Pages/CommentsPage.tsx";
import ProductsPage from "./Pages/ProductsPage.tsx";
import HomePage from "./Pages/HomePage.tsx";


createRoot(document.getElementById('root')!).render(
<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<MainLayouts/>}>
            <Route index={true} element={<HomePage/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}/>
            <Route path={'products'} element={<ProductsPage/>}/>
        </Route>
    </Routes>
</BrowserRouter>
)
