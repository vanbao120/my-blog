import React from 'react'
import './topbar.css'
import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-pinterest-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/settings">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/settings">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topListItem"><Link className="link" to="/login">LOGOUT</Link></li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className="topImg"
                src="https://images.pexels.com/photos/10194747/pexels-photo-10194747.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="avatar" />
                <i className="iconSearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
