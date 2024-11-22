import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../Pages/dashboard/Overview";
import PrivateRoot from "../PrivateRoot/PrivateRoot";
import SellerRoute from "../PrivateRoot/SellerRoute";
import MyProduct from "../Pages/dashboard/seller/MyProduct";
import AddProduct from "../Pages/dashboard/seller/AddProduct";
import BuyerRoute from "../PrivateRoot/BuyerRoute";
import MyWishList from "../Pages/dashboard/buyer/MyWishList";
import UpdateProduct from "../Pages/UpdateProduct";
import Admin from "../Pages/dashboard/admin/Admin";
import AllUser from "../Pages/dashboard/admin/AllUser";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },{
          path: '/product',
          element: <Product></Product>
        },{
          path: '/about',
          element: <About></About>
        },{
          path: '/contact-us',
          element: <ContactUs></ContactUs>
        },{
          path: '/login',
          element: <Login></Login>
        },{
          path: '/register',
          element: <Register></Register>
        } 
      ]
    },{
      path: "/dashboard",
      element: <PrivateRoot><DashboardLayout></DashboardLayout></PrivateRoot>,
      children: [
        {
          path: '/dashboard/overview',
          element: <Overview></Overview>
        },
        /////buyer route
        {
          path: '/dashboard/myWishlist',
          element: <BuyerRoute><MyWishList></MyWishList></BuyerRoute>
        },
        ////seller route
        {
          path: '/dashboard/myProduct',
          element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
        }, {
          path: '/dashboard/addProduct',
          element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
        },{
          path: '/dashboard/updateProduct/:id',
          element: <UpdateProduct></UpdateProduct>
          
        },{
          path: '/dashboard/admin',
          element: <Admin></Admin>
        },{
          path: '/dashboard/allUser',
          element: <AllUser></AllUser>
        }
      ]
    }
  ]);