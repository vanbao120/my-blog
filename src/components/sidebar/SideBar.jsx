import './sidebar.css'

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img
                    src="https://images.pexels.com/photos/986740/pexels-photo-986740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque dolorem nam ex labore delectus aperiam eaque doloribus, magnam expedita laborum sit. Recusandae dignissimos labore iusto rerum quaerat sit architecto iste.</p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle"> CATEGORIES</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Music</li>
                    <li className="sideBarListItem">Style</li>
                    <li className="sideBarListItem">Sport</li>
                    <li className="sideBarListItem">Tech</li>
                    <li className="sideBarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fa-brands fa-facebook-square"></i>
                    <i className="sideBarIcon fa-brands fa-twitter-square"></i>
                    <i className="sideBarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sideBarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
