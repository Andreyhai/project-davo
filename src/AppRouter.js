import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {
    HOME_ROUTE,
    ERROR_ROUTE
} from "./utils/CONSTS";

const AppRouter = () => {

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={ERROR_ROUTE} element={<ErrorPage/>} />
        </Routes>
    );
};

export default AppRouter;