import avatarImage from "../assets/img/avatars/15.png"
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import { useNavigate } from "react-router-dom";


export default function Navbar({ titlePage }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return(
        <nav className="layout-navbar container-xxl navbar-detached navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-6">
                    <i className="icon-base ti tabler-menu-2 icon-md"></i>
                </a>
            </div>

            <div className="navbar-nav-right d-flex align-items-center justify-content-end" id="navbar-collapse">
                <h4 className="my-auto m-0">{titlePage}</h4>

                <ul className="navbar-nav flex-row align-items-center ms-md-auto">
                    {/* <!-- User --> */}
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                        <a
                            className="nav-link dropdown-toggle hide-arrow p-0"
                            data-bs-toggle="dropdown">
                            <div className="avatar avatar-online">
                                <img src={avatarImage} alt="gambar-avatar" className="rounded-circle" />
                            </div>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <a className="dropdown-item">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar avatar-online">
                                            <img src={avatarImage} alt="gambar" className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Febrian Aditya</h6>
                                            <small className="text-body-secondary">Admin</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className="dropdown-divider my-1 mx-n2"></div>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <i className="icon-base ti tabler-user icon-md me-3"></i><span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <i className="icon-base ti tabler-settings icon-md me-3"></i>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <span className="d-flex align-items-center align-middle">
                                    <i className="flex-shrink-0 icon-base ti tabler-credit-card icon-md me-3"></i>
                                    <span className="flex-grow-1 align-middle">Billing Plan</span>
                                    <span className="flex-shrink-0 badge rounded-pill bg-danger">4</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <div className="dropdown-divider my-1 mx-n2"></div>
                            </li>
                            <li>
                                {/* <a className="dropdown-item" href="javascript:void(0);">
                                    <i className="icon-base ti tabler-power icon-md me-3"></i><span>Log Out</span>
                                </a> */}
                                <button className="dropdown-item" onClick={handleLogout}>
                                    <i className="icon-base ti tabler-power icon-md me-3"></i>
                                    <span>Log Out</span>
                                </button>
                            </li>
                        </ul>
                    </li>
                    {/* <!--/ User --> */}
                </ul>
            </div>
        </nav>
    )
}