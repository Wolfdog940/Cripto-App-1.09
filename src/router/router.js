import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import {InfoPage} from "../pages/InfoPage/InfoPage"

const router = createBrowserRouter([
    {path: "/", element: (<HomePage/>)},
    {path: "/info/:id", element: (<InfoPage/>)}
]);
  
export default router