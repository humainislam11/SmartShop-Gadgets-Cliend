import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayouts = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div><Navbar></Navbar></div>
            <div className="min-h-screen"><Outlet></Outlet></div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default MainLayouts;