import "./Navbar.css";
import avatar from "../../assets/avatar.png";

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <div className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fas fa-bars"></i>
            </div>

            <div className="navbar__left">
                <a href="/#">Dashboard</a>
                <a href="/#">Help Me to Create a Bot</a>
                <a className="active_link" href="/#">User</a>
            </div>

            <div className="navbar__right">
                <a href="/#">
                    <i className="fas fa-search"></i>
                </a>
                <a href="/#">
                    <i className="far fa-clock"></i>
                </a>
                <a href="/#">
                    <img width="30" src={avatar} alt="" alt="Avatar" />
                </a>
            </div>
        </div>
    )
}

export default Navbar;