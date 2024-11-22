import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "../Private/PrivateRoute";
import Overview from "../Pages/Overview";
import MyProducts from "../Pages/MyProducts";
import SellerPrivateRoute from "../Private/SellerPrivateRoute";
import AddProducts from "../Pages/AddProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/Products",
                element: <Products></Products>
            },
            {
                path: "/About",
                element: <About></About>
            },
            {
                path: "/Contact",
                element: <Contact></Contact>
            },
            {
                path: "/Login",
                element: <Login></Login>
            },
            {
                path: "/Register",
                element: <Register></Register>
            },
        ]
    },
    {
        path:'/dashboard',
        // element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard/overview",
                element: <Overview></Overview>
            },
            {
                path: "/dashboard/myProducts",
            // element: <SellerPrivateRoute><MyProducts></MyProducts></SellerPrivateRoute>
                element: <MyProducts></MyProducts>
            },
            {
                path: "/dashboard/addProducts",
                element: <AddProducts></AddProducts>
            },
    ]
    }
])