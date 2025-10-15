import { Outlet } from "react-router-dom"
import { useState } from "react";


import SideBar from "../components/SideBar"
import MenuMobile from "../components/MenuMobile"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "../css/iconify-icons.css"
import "../css/node-waves.css"
import "../css/demo.css"
import "../css/perfect-scrollbar.css"

export default function MainLayout() {
    const [navbarData, setNavbarData] = useState(null);


    return(
        <>
            <div className="layout-wrapper layout-content-navbar" >
                <div className="layout-container">

                    {/* <!-- Menu --> */}
                        <SideBar/>
                        {/* menu mobile */}
                        <MenuMobile/>
                    {/* <!-- / Menu --> */}

                    {/* <!-- Layout container --> */}
                        <div className="layout-page">
                        
                            {/* <!-- Navbar --> */}
                            <Navbar titlePage={navbarData}/>
                            {/* <!-- / Navbar --> */}

                            {/* <!-- Content wrapper --> */}
                            <div className="content-wrapper">
                                {/* <!-- Content --> */}
                                <Outlet context={{ setNavbarData }}/>
                                {/* <!-- / Content --> */}

                                {/* <!-- Footer --> */}
                                <Footer/>
                                {/* <!-- / Footer --> */}

                                <div className="content-backdrop fade"></div>
                            </div>
                            {/* <!-- Content wrapper --> */}
                            
                        </div>
                    {/* <!-- / Layout page --> */}
                </div>

                {/* <!-- Overlay --> */}
                <div className="layout-overlay layout-menu-toggle"></div>

                {/* <!-- Drag Target Area To SlideIn Menu On Small Screens --> */}
                <div className="drag-target"></div>
            </div>
        </>
    )
}