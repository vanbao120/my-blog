import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://images.pexels.com/photos/5825575/pexels-photo-5825575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Sky"
            />
        </div>
    )
}
