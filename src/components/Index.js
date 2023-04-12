import LeftBar from "./LeftBar";
import TopBar from "./Topbar";
import RightBar from "./RightBar";
import Home from "./Home";

const Index = () => {
    return ( 
        <div>
            <TopBar/>
            <div style={{display: "flex"}}>
                <LeftBar/>
                <Home/>
                <RightBar/>
            </div>
        </div>
     );
}
 
export default Index;