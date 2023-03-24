import "../styles/leftBar.scss"

import Friends from "../../src/assets/1.png"
import Groups from "../../src/assets/2.png"
import Market from "../../src/assets/3.png"
import Watch from "../../src/assets/4.png"
import Memories from "../../src/assets/5.png"
import Events from "../../src/assets/6.png"
import Gaming from "../../src/assets/7.png"
import Gallery from "../../src/assets/8.png"
import Videos from "../../src/assets/9.png"
import Messages from "../../src/assets/10.png"
import Tutorials from "../../src/assets/11.png"
import Courses from "../../src/assets/12.png"
import Fund from "../../src/assets/13.png"



const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <span>Menu</span>
          <div className="item">
            <img src={Friends}/>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups}/>
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market}/>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch}/>
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories}/>
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events}/>
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming}/>
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery}/>
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos}/>
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages}/>
            <span>Messages</span>
          </div>
          <hr/>
        </div>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Tutorials}/>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses}/>
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Fund}/>
            <span>Fund Website</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftBar;
