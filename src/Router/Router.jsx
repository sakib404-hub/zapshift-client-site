import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout/Layout";
import Home from "../Layouts/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Coverage from "../Pages/Coverage/Coverage";
import Login from "../Authentication/Login/Login";
import Registratation from "../Authentication/Registratation/Registratation";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login2 from "../Authentication/Login/login2";
import Registratation2 from "../Authentication/Registratation/Registratation2";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Rider from "../Pages/Rider/Rider";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/coverage',
                Component: Coverage,
                loader: () => fetch('/warehouses.json')
            },
            {
                path: '/rider',
                element: <PrivateRoute>
                    <Rider></Rider>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: '/login',
                Component: Login2
            },
            {
                path: '/register',
                Component: Registratation2
            }
        ]
    }
])