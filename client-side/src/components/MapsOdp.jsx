import { useState } from "react";

export default function MapsOdp() {
    const [showSidebar, setShowSidebar] = useState(false);


    return(
        <>
            {/* <!-- Sidebar Left --> */}
            <div className="app-chat-sidebar-left app-sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasStart" data-bs-backdrop="false">
                <div className="chat-sidebar-left-user sidebar-header d-flex flex-column justify-content-center align-items-center flex-wrap px-6 pt-12">
                    
                    <h5 className="mt-4 mb-0">John Doe</h5>
                    <span>Admin</span>
                    <i
                        className="icon-base ti tabler-x icon-lg cursor-pointer close-sidebar"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
            </div>
            {/* <!-- /Sidebar Left--> */}


            {/* <!-- Chat & Contacts --> */}
            <div
                className="col app-chat-contacts app-sidebar flex-grow-0 overflow-hidden border-end"
                id="app-chat-contacts"
            >
                <div className="sidebar-header h-px-75 px-5 border-bottom d-flex align-items-center">

                    <div className="d-flex align-items-center me-6 me-lg-0">
                        <div className="flex-grow-1 input-group input-group-merge">
                            <span className="input-group-text" id="basic-addon-search31">
                                <i className="icon-base ti tabler-search icon-xs" />
                            </span>
                            <input
                                type="text"
                                className="form-control chat-search-input"
                                placeholder="Search..."
                                aria-label="Search..."
                                aria-describedby="basic-addon-search31" 
                            />
                        </div>
                    </div>

                </div>

                <div 
                    className="sidebar-body" 
                    style={{ 
                        flex: 1, 
                        overflowY: "auto", 
                        maxHeight: "calc(100vh - 100px)" 
                    }}
                >
                    {/* <!-- Chats --> */}
                    <ul className="list-unstyled chat-contact-list py-2 mb-0" id="chat-list">

                        <li className="chat-contact-list-item chat-contact-list-item-title mt-0">
                            <h5 className="text-primary mb-0">Chats</h5>
                        </li>

                        <li className="chat-contact-list-item chat-list-item-0 d-none">
                            <h6 className="text-body-secondary mb-0">No Chats Found</h6>
                        </li>

                        <li className="chat-contact-list-item mb-1">
                            <a 
                                className="d-flex align-items-center"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasStart"
                                aria-controls="offcanvasStart"
                            >
                                <div className="flex-shrink-0 avatar avatar-online">
                                    <img src="../../assets/img/avatars/13.png" alt="Avatar" className="rounded-circle" />
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="chat-contact-name text-truncate m-0 fw-normal">Waldemar Mannering</h6>
                                        <small className="chat-contact-list-item-time">5 Minutes</small>
                                    </div>
                                    <small className="chat-contact-status text-truncate">Refer friends. Get rewards.</small>
                                </div>
                            </a>
                        </li>

                        <li className="chat-contact-list-item mb-1">
                            <a className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar avatar-offline">
                                    <img src="../../assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="chat-contact-name text-truncate fw-normal m-0">Felecia Rower</h6>
                                        <small className="chat-contact-list-item-time">30 Minutes</small>
                                    </div>
                                    <small className="chat-contact-status text-truncate">I will purchase it for sure. 👍</small>
                                </div>
                            </a>
                        </li>

                        <li className="chat-contact-list-item mb-0">
                            <a className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar avatar-busy">
                                    <span className="avatar-initial rounded-circle bg-label-success">CM</span>
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="chat-contact-name text-truncate fw-normal m-0">Calvin Moore</h6>
                                        <small className="chat-contact-list-item-time">1 Day</small>
                                    </div>
                                    <small className="chat-contact-status text-truncate">If it takes long you can mail inbox user</small>
                                </div>
                            </a>
                        </li>

                    </ul>

                    {/* <!-- Contacts --> */}
                    <ul className="list-unstyled chat-contact-list mb-0 py-2" id="contact-list">
                        <li className="chat-contact-list-item chat-contact-list-item-title mt-0">
                            <h5 className="text-primary mb-0">Contacts</h5>
                        </li>
                        <li className="chat-contact-list-item contact-list-item-0 d-none">
                            <h6 className="text-body-secondary mb-0">No Contacts Found</h6>
                        </li>
                        <li className="chat-contact-list-item">
                            <a className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar">
                                    <img src="../../assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-4">
                                    <h6 className="chat-contact-name text-truncate m-0 fw-normal">Natalie Maxwell</h6>
                                    <small className="chat-contact-status text-truncate">UI/UX Designer</small>
                                </div>
                            </a>
                        </li>
                        <li className="chat-contact-list-item">
                            <a className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar">
                                    <img src="../../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-4">
                                    <h6 className="chat-contact-name text-truncate m-0 fw-normal">Jess Cook</h6>
                                    <small className="chat-contact-status text-truncate">Business Analyst</small>
                                </div>
                            </a>
                        </li>
                        <li className="chat-contact-list-item">
                            <a className="d-flex align-items-center">
                                <div className="avatar d-block flex-shrink-0">
                                    <span className="avatar-initial rounded-circle bg-label-primary">LM</span>
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-4">
                                    <h6 className="chat-contact-name text-truncate m-0 fw-normal">Louie Mason</h6>
                                    <small className="chat-contact-status text-truncate">Resource Manager</small>
                                </div>
                            </a>
                        </li>
                        <li className="chat-contact-list-item">
                            <a className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar">
                                    <img src="../../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-4">
                                    <h6 className="chat-contact-name text-truncate m-0 fw-normal">Krystal Norton</h6>
                                    <small className="chat-contact-status text-truncate">Business Executive</small>
                                </div>
                            </a>
                        </li>
                        <li className="chat-contact-list-item">
                            <a className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar">
                                    <img src="../../assets/img/avatars/8.png" alt="Avatar" className="rounded-circle" />
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-4">
                                    <h6 className="chat-contact-name text-truncate m-0 fw-normal">Stacy Garrison</h6>
                                    <small className="chat-contact-status text-truncate">Marketing Ninja</small>
                                </div>
                            </a>
                        </li>
                        <li className="chat-contact-list-item">
                            <a className="d-flex align-items-center">
                                <div className="avatar d-block flex-shrink-0">
                                    <span className="avatar-initial rounded-circle bg-label-success">CM</span>
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-4">
                                    <h6 className="chat-contact-name text-truncate m-0 fw-normal">Calvin Moore</h6>
                                    <small className="chat-contact-status text-truncate">UX Engineer</small>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- /Chat contacts --> */}

            {/* <!-- Chat conversation --> */}
            <div
                className="col app-chat-conversation d-flex align-items-center justify-content-center flex-column"
                id="app-chat-conversation"
            >
                <div className="bg-label-primary p-8 rounded-circle">
                    <i className="icon-base ti tabler-message-2 icon-50px"></i>
                </div>
                <p className="my-4">Select a contact to start a conversation.</p>
                <button className="btn btn-primary app-chat-conversation-btn" id="app-chat-conversation-btn">
                    Select Contact
                </button>
            </div>
            {/* <!-- /Chat conversation --> */}

            {/* <!-- Chat History --> */}
            <div className="col app-chat-history d-none" id="app-chat-history">
                <div className="chat-history-wrapper">
                    <div className="chat-history-header border-bottom">
                        
                        <div className="d-flex justify-content-between align-items-center">

                            <div className="d-flex overflow-hidden align-items-center">
                                <i
                                    className="icon-base ti tabler-menu-2 icon-lg cursor-pointer d-lg-none d-block me-4"
                                    data-bs-toggle="sidebar"
                                    data-overlay
                                    data-target="#app-chat-contacts" 
                                />
                                <div className="flex-shrink-0 avatar avatar-online">
                                    <img
                                        src="../../assets/img/avatars/4.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                        data-bs-toggle="sidebar"
                                        data-overlay
                                        data-target="#app-chat-sidebar-right" 
                                    />
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-4">
                                    <h6 className="m-0 fw-normal">Felecia Rower</h6>
                                    <small className="user-status text-body">NextJS developer</small>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <span className="btn btn-text-secondary cursor-pointer d-sm-inline-flex d-none me-1 btn-icon rounded-pill">
                                    <i className="icon-base ti tabler-phone icon-22px"></i>
                                </span>
                                <span className="btn btn-text-secondary cursor-pointer d-sm-inline-flex d-none me-1 btn-icon rounded-pill">
                                    <i className="icon-base ti tabler-video icon-22px"></i>
                                </span>
                                <span className="btn btn-text-secondary cursor-pointer d-sm-inline-flex d-none me-1 btn-icon rounded-pill">
                                    <i className="icon-base ti tabler-search icon-22px"></i>
                                </span>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-icon btn-text-secondary text-secondary rounded-pill dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="true"
                                        id="chat-header-actions"
                                    >
                                        <i className="icon-base ti tabler-dots-vertical icon-22px"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="chat-header-actions">
                                        <a className="dropdown-item">View Contact</a>
                                        <a className="dropdown-item">Mute Notifications</a>
                                        <a className="dropdown-item">Block Contact</a>
                                        <a className="dropdown-item">Clear Chat</a>
                                        <a className="dropdown-item">Report</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="chat-history-body">
                        <ul className="list-unstyled chat-history">

                            <li className="chat-message chat-message-right">
                                <div className="d-flex overflow-hidden">
                                    <div className="chat-message-wrapper flex-grow-1">
                                        <div className="chat-message-text">
                                            <p className="mb-0">How can we help? We're here for you! 😄</p>
                                        </div>
                                        <div className="text-end text-body-secondary mt-1">
                                            <i className="icon-base ti tabler-checks icon-16px text-success me-1"></i>
                                            <small>10:00 AM</small>
                                        </div>
                                    </div>
                                    <div className="user-avatar flex-shrink-0 ms-4">
                                        <div className="avatar avatar-sm">
                                            <img src="../../assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="chat-message">
                                <div className="d-flex overflow-hidden">
                                    <div className="user-avatar flex-shrink-0 me-4">
                                        <div className="avatar avatar-sm">
                                            <img src="../../assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                                        </div>
                                    </div>
                                    <div className="chat-message-wrapper flex-grow-1">
                                        <div className="chat-message-text">
                                            <p className="mb-0">Hey John, I am looking for the best admin template.</p>
                                            <p className="mb-0">Could you please help me to find it out? 🤔</p>
                                        </div>
                                        <div className="chat-message-text mt-2">
                                            <p className="mb-0">It should be Bootstrap 5 compatible.</p>
                                        </div>
                                        <div className="text-body-secondary mt-1">
                                            <small>10:02 AM</small>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="chat-message chat-message-right">
                                <div className="d-flex overflow-hidden">
                                    <div className="chat-message-wrapper flex-grow-1">
                                        <div className="chat-message-text">
                                            <p className="mb-0">Vuexy has all the components you'll ever need in a app.</p>
                                        </div>
                                        <div className="text-end text-body-secondary mt-1">
                                            <i className="icon-base ti tabler-checks icon-16px text-success me-1"></i>
                                            <small>10:03 AM</small>
                                        </div>
                                    </div>
                                    <div className="user-avatar flex-shrink-0 ms-4">
                                        <div className="avatar avatar-sm">
                                            <img src="../../assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="chat-message">
                                <div className="d-flex overflow-hidden">
                                    <div className="user-avatar flex-shrink-0 me-4">
                                        <div className="avatar avatar-sm">
                                            <img src="../../assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                                        </div>
                                    </div>
                                    <div className="chat-message-wrapper flex-grow-1">
                                        <div className="chat-message-text">
                                            <p className="mb-0">Looks clean and fresh UI. 😃</p>
                                        </div>
                                        <div className="chat-message-text mt-2">
                                            <p className="mb-0">It's perfect for my next project.</p>
                                        </div>
                                        <div className="chat-message-text mt-2">
                                            <p className="mb-0">How can I purchase it?</p>
                                        </div>
                                        <div className="text-body-secondary mt-1">
                                            <small>10:05 AM</small>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="chat-message chat-message-right">
                                <div className="d-flex overflow-hidden">
                                    <div className="chat-message-wrapper flex-grow-1">
                                        <div className="chat-message-text">
                                            <p className="mb-0">Thanks, you can purchase it.</p>
                                        </div>
                                        <div className="text-end text-body-secondary mt-1">
                                            <i className="icon-base ti tabler-checks icon-16px text-success me-1"></i>
                                            <small>10:06 AM</small>
                                        </div>
                                    </div>
                                    <div className="user-avatar flex-shrink-0 ms-4">
                                        <div className="avatar avatar-sm">
                                            <img src="../../assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="chat-message">
                                <div className="d-flex overflow-hidden">
                                    <div className="user-avatar flex-shrink-0 me-4">
                                        <div className="avatar avatar-sm">
                                            <img src="../../assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                                        </div>
                                    </div>
                                    <div className="chat-message-wrapper flex-grow-1">
                                        <div className="chat-message-text">
                                            <p className="mb-0">I will purchase it for sure. 👍</p>
                                        </div>
                                        <div className="chat-message-text mt-2">
                                            <p className="mb-0">Thanks.</p>
                                        </div>
                                        <div className="text-body-secondary mt-1">
                                            <small>10:08 AM</small>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="chat-message chat-message-right">
                                <div className="d-flex overflow-hidden">
                                    <div className="chat-message-wrapper flex-grow-1">
                                        <div className="chat-message-text">
                                            <p className="mb-0">Great, Feel free to get in touch.</p>
                                        </div>
                                        <div className="text-end text-body-secondary mt-1">
                                            <i className="icon-base ti tabler-checks icon-16px text-success me-1"></i>
                                            <small>10:10 AM</small>
                                        </div>
                                    </div>
                                    <div className="user-avatar flex-shrink-0 ms-4">
                                        <div className="avatar avatar-sm">
                                            <img src="../../assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="chat-message">
                                <div className="d-flex overflow-hidden">
                                    <div className="user-avatar flex-shrink-0 me-4">
                                        <div className="avatar avatar-sm">
                                            <img src="../../assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                                        </div>
                                    </div>
                                    <div className="chat-message-wrapper flex-grow-1">
                                        <div className="chat-message-text">
                                            <p className="mb-0">Do you have design files for Vuexy?</p>
                                        </div>
                                        <div className="text-body-secondary mt-1">
                                            <small>10:15 AM</small>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="chat-message chat-message-right">
                                <div className="d-flex overflow-hidden">
                                    <div className="chat-message-wrapper flex-grow-1 w-50">
                                        <div className="chat-message-text">
                                            <p className="mb-0">
                                            Yes that's correct documentation file, Design files are included with the template.
                                            </p>
                                        </div>
                                        <div className="text-end text-body-secondary mt-1">
                                            <i className="icon-base ti tabler-checks icon-16px me-1"></i>
                                            <small>10:15 AM</small>
                                        </div>
                                    </div>
                                    <div className="user-avatar flex-shrink-0 ms-4">
                                        <div className="avatar avatar-sm">
                                            <img src="../../assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                    {/* <!-- Chat message form --> */}
                    <div className="chat-history-footer shadow-xs">
                        <form className="form-send-message d-flex justify-content-between align-items-center">
                            <input
                                className="form-control message-input border-0 me-4 shadow-none"
                                placeholder="Type your message here..." 
                            />

                            <div className="message-actions d-flex align-items-center">
                                <span className="btn btn-text-secondary btn-icon rounded-pill cursor-pointer">
                                    <i className="speech-to-text icon-base ti tabler-microphone icon-22px text-heading"></i>
                                </span>
                                <label htmlFor="attach-doc" className="form-label mb-0">
                                    <span className="btn btn-text-secondary btn-icon rounded-pill cursor-pointer mx-1">
                                    <i className="icon-base ti tabler-paperclip icon-22px text-heading"></i>
                                    </span>
                                    <input type="file" id="attach-doc" hidden />
                                </label>
                                <button className="btn btn-primary d-flex send-msg-btn">
                                    <span className="align-middle d-md-inline-block d-none">Send</span>
                                    <i className="icon-base ti tabler-send icon-16px ms-md-2 ms-0"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- /Chat History --> */}

            {/* <!-- Sidebar Right --> */}
            <div className="col app-chat-sidebar-right app-sidebar overflow-hidden" id="app-chat-sidebar-right">
                <div className="sidebar-header d-flex flex-column justify-content-center align-items-center flex-wrap px-6 pt-12">
                    <div className="avatar avatar-xl avatar-online chat-sidebar-avatar">
                        <img src="../../assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                    </div>
                    <h5 className="mt-4 mb-0">Felecia Rower</h5>
                    <span>NextJS Developer</span>
                    <i
                        className="icon-base ti tabler-x icon-lg cursor-pointer close-sidebar d-block"
                        data-bs-toggle="sidebar"
                        data-overlay
                        data-target="#app-chat-sidebar-right" 
                    />
                </div>

                <div className="sidebar-body p-6 pt-0">
                    <div className="my-6">
                        <p className="text-uppercase mb-1 text-body-secondary">About</p>
                        <p className="mb-0">
                            It is a long established fact that a reader will be distracted by the readable content .
                        </p>
                    </div>

                    <div className="my-6">
                        <p className="text-uppercase mb-1 text-body-secondary">Personal Information</p>
                        <ul className="list-unstyled d-grid gap-4 mb-0 ms-2 py-2 text-heading">
                            <li className="d-flex align-items-center">
                            <i className="icon-base ti tabler-mail icon-md"></i>
                            <span className="align-middle ms-2">josephGreen@email.com</span>
                            </li>
                            <li className="d-flex align-items-center">
                            <i className="icon-base ti tabler-phone-call icon-md"></i>
                            <span className="align-middle ms-2">+1(123) 456 - 7890</span>
                            </li>
                            <li className="d-flex align-items-center">
                            <i className="icon-base ti tabler-clock icon-md"></i>
                            <span className="align-middle ms-2">Mon - Fri 10AM - 8PM</span>
                            </li>
                        </ul>
                    </div>

                    <div className="my-6">
                        <p className="text-uppercase text-body-secondary mb-1">Options</p>
                        <ul className="list-unstyled d-grid gap-4 ms-2 py-2 text-heading">
                            <li className="cursor-pointer d-flex align-items-center">
                                <i className="icon-base ti tabler-bookmark icon-md"></i>
                                <span className="align-middle ms-2">Add Tag</span>
                            </li>
                            <li className="cursor-pointer d-flex align-items-center">
                                <i className="icon-base ti tabler-star icon-md"></i>
                                <span className="align-middle ms-2">Important Contact</span>
                            </li>
                            <li className="cursor-pointer d-flex align-items-center">
                                <i className="icon-base ti tabler-photo icon-md"></i>
                                <span className="align-middle ms-2">Shared Media</span>
                            </li>
                            <li className="cursor-pointer d-flex align-items-center">
                                <i className="icon-base ti tabler-ban icon-md"></i>
                                <span className="align-middle ms-2">Block Contact</span>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex mt-6">
                        <button
                            className="btn btn-danger w-100"
                            data-bs-toggle="sidebar"
                            data-overlay
                            data-target="#app-chat-sidebar-right">
                            Delete Contact<i className="icon-base ti tabler-trash icon-16px ms-2"></i>
                        </button>
                    </div>

                </div>
            </div>
            {/* <!-- /Sidebar Right --> */}

            <div className="app-overlay"></div>
        
        </>
    )
}