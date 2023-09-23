import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {PostPage} from "./post";

const HomePage = lazy(() => import('./home'))

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/post/:id" element={<PostPage/>} />
            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    );
};
