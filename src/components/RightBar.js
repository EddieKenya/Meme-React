import "../styles/right.scss";
import Premier from "../assets/premier.png"
import Safaricom from "../assets/safaricom.png"
import Betika from "../assets/Betika.png"

const RightBar = () => {
    return ( 
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Premier}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Betika}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Safaricom}/>
                        </div>
                    </div>
                    <span>For Adverts: edwinmakhanu630@gmail.com</span>
                </div>


            </div>
        </div>
     );
}
 
export default RightBar;