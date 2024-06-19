import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="text-gray-800">
            <Header />
            <Outlet />
            <Footer/>
            
         </div>
     )
}

export default Root;