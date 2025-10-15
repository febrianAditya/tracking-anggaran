import { Link, useLocation } from "react-router-dom"

export default function SideBar() {
    const location = useLocation();

    return(
        <>
            <aside id="layout-menu" className="layout-menu menu-vertical menu" style={{height: "100vh", position: "sticky", top: "0", overflowY: "auto"}}>
                <div className="app-brand demo">
                    <a href="index.html" className="app-brand-link">
                        <span className="app-brand-text demo menu-text fw-bold ms-3">Me4u</span>
                    </a>
                </div>

                <div className="menu-inner-shadow"></div>

                <ul className="menu-inner py-1">
                    
                    {/* <!-- Page --> */}    
                    <li className={`menu-item ${location.pathname === "/dashboard" ? "active" : ""}`}>
                        <Link to={"/dashboard"} className="menu-link">
                            <i className="menu-icon icon-base ti tabler-app-window"></i>
                            <div>Dashboard</div>
                        </Link>
                    </li>

                    <li className={`menu-item ${location.pathname === "/users" ? "active" : ""}`}>
                        <Link to={"/users"} className="menu-link">
                            <i className="menu-icon icon-base ti tabler-users"></i>
                            <div>Klien</div>
                        </Link>
                    </li>

                    <li className={`menu-item ${location.pathname === "/odp" ? "active" : ""}`}>
                        <Link to={"/odp"} className="menu-link">
                            <i className="menu-icon icon-base ti tabler-map-down"></i>
                            <div>ODP</div>
                        </Link>
                    </li>

                    <li className={`menu-item ${location.pathname === "/assets" ? "active" : ""}`}>
                        <Link to={"/assets"} className="menu-link">
                            <i className="menu-icon icon-base ti tabler-router"></i>
                            <div>Assets</div>
                        </Link>
                    </li>
                    <li className={`menu-item ${location.pathname === "/message" ? "active" : ""}`}>
                        <Link to={"/message"} className="menu-link">
                            <i className="menu-icon icon-base ti tabler-message"></i>
                            <div>Message BrodCast</div>
                        </Link>
                    </li>
                    <li className={`menu-item ${location.pathname === "/invoice" ? "active" : ""}`}>
                        <Link to={"/invoice"} className="menu-link">
                            <i className="menu-icon icon-base ti tabler-file-dollar"></i>
                            <div>Invoice</div>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}