import React from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TestPageView from "./views/TestPageView.jsx";

import '../scss/spa.scss';
import FrontpageView from "./views/FrontpageView.jsx";
import DeckView from "./views/DeckView.jsx";
import CardView from "./views/CardView.jsx";
import ErrorView from "./views/ErrorView.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FrontpageView />,
        errorElement: <ErrorView />
    },
    {
        path: "/card",
        element: <CardView />
    },
    {
        path: "/deck/:id",
        element: <DeckView />
    }
]);

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
