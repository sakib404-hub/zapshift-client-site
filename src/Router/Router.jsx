import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout/Layout";
import Home from "../Layouts/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])