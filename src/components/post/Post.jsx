import './post.css'
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <Link className="link" to="/single">
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/1157936/pexels-photo-1157936.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum modi reiciendis doloremque iure tempore illum eum quidem aliquid ex sit laudantium eaque maxime, porro, nam adipisci? Rerum, repellendus blanditiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum modi reiciendis doloremque iure tempore illum eum quidem aliquid ex sit laudantium eaque maxime, porro, nam adipisci? Rerum, repellendus blanditiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum modi reiciendis doloremque iure tempore illum eum quidem aliquid ex sit laudantium eaque maxime, porro, nam adipisci? Rerum, repellendus blanditiis.
            </p>
        </div>
        </Link>
    )
}
