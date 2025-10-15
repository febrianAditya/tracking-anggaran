import { useEffect, useState } from "react";
import MapsLeaflet from "../MapsLeaflet";
import ModalAddOdp from "./ModalAddOdp";
import ModalDeleteOdp from "./ModalDeleteOdp";
import ModalEditOdp from "./ModalEditOdp";

export default function MapsOdpAccordion({ dataOdp }) {
    const [dataOdpMaster, setDataOdpMaster] = useState()
    const [locOdp, setLocOdp] = useState()
    const [detailOdp, setDetailOdp] = useState()

    const colors = ["bg-primary", "bg-success", "bg-danger", "bg-warning", "bg-info"];

    useEffect(() => {
        setDataOdpMaster(dataOdp)
    }, [dataOdp])

    const handleLoc = (latLoc, longLoc) => {
        const locOdp = {
            lat: latLoc,
            lng: longLoc
        }
        setLocOdp(locOdp)
    }

    const handleDetailOdp = (odp) => {
        setDetailOdp(odp)
    }

    function calculatePercentage(totalClient, capacityClient) {
        if (capacityClient === 0) return 0; // biar ga error bagi 0
        return (totalClient / capacityClient) * 100;
    }

    return(
        <>
            {/* <!-- Chat & Contacts --> */}
            <div
                className="app-chat-contacts app-sidebar flex-grow-0 overflow-hidden border-end"
                id="app-chat-contacts"
            >

                {/* Header */}
                <div className="sidebar-header h-px-75 px-5 border-bottom d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-end me-lg-0">
                        <div className="flex-grow-1 input-group input-group-merge">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addOdp">
                                    <i className="icon-base icon-16px ti tabler-plus me-md-2"></i><span className="d-md-inline-block d-none">Tambah Odp</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div 
                    className="sidebar-body" 
                    style={{ 
                        flex: 1, 
                        overflowY: "auto", 
                        maxHeight: "calc(100vh - 100px)" 
                    }}
                >
                    <div className="accordion mt-4" id="accordionExample">

                        {
                            dataOdpMaster?.map((odp, idx) => (
                                <div className="accordion-item" key={odp.id}>

                                    {/* Accordion Header */}
                                    <h2 className="accordion-header" id={`heading-${odp.id}`}>
                                        <button
                                            type="button"
                                            className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`}
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse-${odp.id}`}
                                            aria-expanded={idx === 0 ? "true" : "false"}
                                            aria-controls={`collapse-${odp.id}`}
                                            onClick={ e => {
                                                const isExpanded = e.currentTarget.getAttribute("aria-expanded") === "true";
                                                if (isExpanded) {
                                                    handleLoc(odp.lat, odp.long);
                                                    handleDetailOdp(odp)
                                                }
                                            }}
                                        >
                                            <div className="text-start w-100">

                                                <div className="fw-bold">{`${odp.daerah} - ${odp.idOdp}`}</div>

                                                <p className="text-body-secondary mb-2">Total Kapasitas: {`22/60`}</p>

                                                {/* Progrees Bar */}
                                                <div className="d-flex flex-grow-1 align-items-center">
                                                    <div className="progress w-100 me-4" style={{ height: "12px" }}>
                                                        <div
                                                            className={`progress-bar ${colors[odp.id % colors.length]}`}
                                                            role="progressbar"
                                                            style={{ width: `${calculatePercentage(22, 60).toFixed(2)}%` }}
                                                            aria-valuenow={calculatePercentage(22, 60)}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                    <span className="text-body-secondary">{`${calculatePercentage(22, 60).toFixed(2)}%`}</span>
                                                </div>
                                                {/* /Progrees Bar */}

                                            </div>
                                        </button>
                                    </h2>
                                    {/* /Accordion Header */}

                                    {/* Accordion Body */}
                                    <div
                                        id={`collapse-${odp.id}`}
                                        className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <img 
                                                src="https://picsum.photos/200" 
                                                alt="icon" 
                                                className="card-img-top"
                                                width="200" height="150"
                                            />
                                            <p className="text-body-secondary m-0 mt-3">Alamat: {odp.alamat}</p>
                                            <p className="text-body-secondary m-0">Instalasi: {odp.instalasiTanggal}</p>
                                            <p className="text-body-secondary m-0">Pengecekan: {odp.pengecekanTerakhir}</p>
                                            <div className="d-flex justify-content-end">
                                                <button 
                                                    data-bs-target="#editOdp" 
                                                    className="btn btn-icon" 
                                                    data-bs-placement="top" 
                                                    title="Edit Odp"
                                                    data-bs-toggle="modal"
                                                    // onClick={() => setDetailUser(project)}
                                                >
                                                    <i className="icon-base ti tabler-pencil icon-md"></i>
                                                </button>
                                                <button
                                                    data-bs-target="#deleteOdp" 
                                                    className="btn btn-icon" 
                                                    data-bs-placement="top" 
                                                    title="Hapus Odp"
                                                    data-bs-toggle="modal"
                                                    // onClick={() => setDetailUser(project)}
                                                >
                                                    <i className="icon-base ti tabler-trash icon-md"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Accordion Body */}

                                </div>
                            ))
                        }
                        
                    </div>
                </div>

            </div>
            {/* <!-- /Chat contacts --> */}


            {/* <!-- Maps Leaflet --> */}
            <div
                className="col app-chat-conversation d-flex align-items-center justify-content-center flex-column"
                id="app-chat-conversation"
            >
                <MapsLeaflet selectedOdp={locOdp} detailOdp={dataOdpMaster}/>
            </div>
            {/* <!-- /Maps Leaflet --> */}

            <ModalAddOdp/>

            <ModalDeleteOdp/>

            <ModalEditOdp/>

            <div className="app-overlay"></div>
        </>
    )
}