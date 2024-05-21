import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div className="min-h-screen font-roboto"> 
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;