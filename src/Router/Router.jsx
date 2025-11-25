import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout
    }
])