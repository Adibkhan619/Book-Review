
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto work-sans">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;