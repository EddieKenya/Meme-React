import Outlet from "./Outlet";
import LeftBar from "./LeftBar";
import TopBar from "./Topbar";
import RightBar from "./RightBar";

const Navbar = () => {
    return ( 
        <div>
            <TopBar/>
            <div style={{display: "flex"}}>
                <LeftBar/>
                <Outlet/>
                <RightBar/>
            </div>
        </div>
     );
}
 
export default Navbar;