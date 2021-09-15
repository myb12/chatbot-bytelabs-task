import './Sidebar.css';
import logo from '../../assets/myb-circle.svg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div classNameName={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>MYB Chatbot</h1>
                </div>
                <i
                    onclick="closeSidebar()"
                    className="fa fa-times"
                    id="sidebarIcon"
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fas fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-comment"></i>
                    <a href="#">Conversations</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-robot"></i>
                    <a href="#">Mybots</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-users"></i>
                    <a href="#">Visitors</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-chart-pie"></i>
                    <a href="#">Analytics</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-handshake"></i>
                    <a href="#">Contracts</a>
                </div>
                <div className="sidebar__link">
                    <i className="far fa-chart-bar"></i>
                    <a href="#">Reports</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-history"></i>
                    <a href="#">Activity Logs</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-globe"></i>
                    <a href="#">English</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-bell"></i>
                    <a href="#">Notifications</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-book"></i>
                    <a href="#">Documentation</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-question-circle"></i>
                    <a href="#">Support Center</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fas fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;