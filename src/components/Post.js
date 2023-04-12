import "../styles/Post.scss"
import Profile from "../../src/assets/prof.jpg"
import { Link } from "react-router-dom";


const Post = () => {
    return ( 
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={Profile}/>
                        <div className="details">
                            <Link to={`/profile/$(post.userId)`} style={{textDecoration:"none", color:"inherit"}}>
                                <span className="name">post.name</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p>post.desc</p>
                    <img src={Profile}/>
                </div>
                <div className="info">
                    <div className="item">

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={Profile}/>
                        <div className="details">
                            <Link to={`/profile/$(post.userId)`} style={{textDecoration:"none", color:"inherit"}}>
                                <span className="name">post.name</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p>post.desc</p>
                    <img src={Profile}/>
                </div>
                <div className="info">
                    <div className="item">

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={Profile}/>
                        <div className="details">
                            <Link to={`/profile/$(post.userId)`} style={{textDecoration:"none", color:"inherit"}}>
                                <span className="name">post.name</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p>post.desc</p>
                    <img src={Profile}/>
                </div>
                <div className="info">
                    <div className="item">

                    </div>
                </div>
            </div>
        </div>

        
     );
}
 
export default Post;
