import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout/Layout";
import Home from "../Layouts/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login2 from "../Authentication/Login/login2";
import Registratation2 from "../Authentication/Registratation/Registratation2";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import SendAPercel from "../Pages/SendAPercel/SendAPercel";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Loader from "../Components/Loader/Loader";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyPercels from "../Pages/DashBoard/MyPercels/MyPercels";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentSuccess from "../Pages/DashBoard/Payment/PaymentSucess";
import PaymentCancelled from "../Pages/DashBoard/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../Pages/DashBoard/ApproveRiders/ApproveRiders";

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
                loader: () => fetch('/warehouses.json'),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/rider',
                loader: () => fetch('/warehouses.json'),
                element: <PrivateRoute>
                    <Rider></Rider>
                </PrivateRoute>
            },
            {
                path: '/send-percel',
                element: <PrivateRoute>
                    <SendAPercel></SendAPercel>
                </PrivateRoute>,
                loader: () => fetch('/warehouses.json'),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/aboutUs',
                Component: AboutUs
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashBoard></DashBoard>
        </PrivateRoute>,
        children: [
            {
                index: true,
                Component: MyPercels
            },
            {
                path: 'payment/:parcelId',
                Component: Payment
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess
            },
            {
                path: 'payment-cancel',
                Component: PaymentCancelled
            },
            {
                path: 'payment-history',
                Component: PaymentHistory
            },
            {
                path: 'approve-riders',
                Component: ApproveRiders
            }
        ]
    }
])