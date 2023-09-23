import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import {PostPage} from "./post";

const HomePage = lazy(() => import('./home'))

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/post/:id" element={<PostPage/>} />
        </Routes>
    );
};
