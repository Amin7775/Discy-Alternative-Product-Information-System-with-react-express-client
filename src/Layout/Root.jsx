import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Root = () => {
    return (
        <div className="min-h-screen font-roboto"> 
        <Navbar></Navbar>
        <Outlet></Outlet>   
        </div>
    );
};

export default Root;