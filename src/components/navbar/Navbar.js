import "./Navbar.css";
import avatar from "../../assets/avatar.png";

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <div className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i class="fas fa-bars"></i>
            </div>

            <div className="navbar__left">
                <a href="#">Dashboard</a>
                <a href="#">Help Me to Create a Bot</a>
                <a className="active_link" href="#">User</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i class="fas fa-search"></i>
                </a>
                <a href="#">
                    <i class="far fa-clock"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="" alt="Avatar" />
                </a>
            </div>
        </div>
    )
}

export default Navbar;