import { useState } from "react"
import ModalAddUser from "./ModalAddUser";
import ModalReadUser from "./ModalReadUser";
import ModalEditUser from "./ModalEditUser";
import ModalStatusUser from "./ModalStatusUser";
// import "../css/table-user.css"

export default function TableUsers({dataValue}) {
    
    const [detailUser, setDetailUser] = useState()

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    // Hitung data untuk halaman aktif
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentData = dataValue.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(dataValue.length / itemsPerPage);

    // Handler
    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToFirstPage = () => setCurrentPage(1);
    const goToLastPage = () => setCurrentPage(totalPages);

    function generatePages(currentPage, totalPages) {
        const pages = [];

        if (totalPages <= 5) {
            // Kalau total page < 5, tampilkan semua
            for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
            // Dekat awal
            pages.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
            // Dekat akhir
            pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
            // Tengah
            pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return pages;
    }
    
    function truncateText(text, maxLength = 10) {
        if (!text) return "";
        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text;
    }

    function formatDateToInput(dateStr) {
        // dateStr: "28-02-1995"
        const [day, month, year] = dateStr?.split("-");
        return `${year}-${month}-${day}`;
    }

    return(
        <>
            <div className="col-xxl-12">
                <div className="card">
                    <div className="card-body" style={{ paddingBottom: "14px"}}>

                        <div className="d-flex justify-content-end mb-4">
                            <div className="d-flex justify-content-end">  

                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUser">
                                    <i className="icon-base icon-16px ti tabler-plus me-md-2"></i><span className="d-md-inline-block d-none">Tambah Klien</span>
                                </button>

                                <div className="dropdown justify-content-end">
                                    <button
                                        className="btn btn-text-secondary btn-icon rounded-pill text-body-secondary border-0 me-n1 pb-2"
                                        type="button"
                                        id="teamMemberList"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className="icon-base ti tabler-dots-vertical icon-22px text-body-secondary"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="teamMemberList">
                                        <a className="dropdown-item">Download</a>
                                        <a className="dropdown-item">Refresh</a>
                                        <a className="dropdown-item">Share</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="d-flex mb-4 align-items-center">
                            <div className="dt-search m-0">
                                <label>
                                    <input type="search" className="form-control" placeholder="Cari Klien" aria-controls="DataTables_Table_0" style={{ width: "280px"}}/>
                                </label>
                            </div>
                        </div>

                        <div className="table-responsive mb-1" style={{ minHeight: "300px", overflowX: "auto" }}>
                            <table className="table table-sm" 
                                style={{
                                    tableLayout: "auto",
                                    minWidth: "1200px",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                <thead className="border-top">
                                    <tr>
                                        <th
                                            style={{
                                                position: "sticky",
                                                left: 0,
                                                background: "#fff",
                                                zIndex: 2,
                                            }}
                                        >
                                            Nama
                                        </th>
                                        <th>No Whatsapp</th>
                                        <th>Email</th>
                                        <th>Alamat</th>
                                        <th>Paket</th>
                                        <th>Daerah</th>
                                        {/* <th>Lat</th>
                                        <th>Long</th> */}
                                        <th>ODP</th>
                                        <th>No Router</th>
                                        <th>Tanggal Aktif</th>
                                        <th>Tanggal Non Aktif</th>
                                        <th>Status</th>
                                        <th>Actions</th> 
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        currentData.map((project) => (
                                            <tr key={project.id} style={{ height: "55px" }}> 
                                                <td
                                                    style={{
                                                        position: "sticky",
                                                        left: 0,
                                                        background: "#fff",
                                                        zIndex: 1, // lebih rendah dari th biar header tetap di atas
                                                    }}
                                                >{truncateText(project.klien, 18)}</td>
                                                <td>{project.waNumber}</td>
                                                <td>{project.email}</td>
                                                <td>{truncateText(project.alamat, 18)}</td>
                                                <td>{project.paket}</td>
                                                <td>{project.daerah}</td>
                                                {/* <td>{project.latitude}</td>
                                                <td>{project.longitude}</td> */}
                                                <td>{project.odp}</td>
                                                <td>{project.noRouter}</td>
                                                <td>{formatDateToInput(project.joinStart)}</td>
                                                <td>{project.endJoin}</td>
                                                <td className="pt-5">
                                                    <span className={`badge ${project.status ? "bg-label-success" : "bg-label-danger"}`}>
                                                        {project.status ? "Aktif" : "Non Aktif"}
                                                    </span>
                                                </td>
                                                <td>
                                                    <button 
                                                        data-bs-target="#readUser" 
                                                        className="btn btn-icon" 
                                                        data-bs-placement="top" 
                                                        title="Preview Klien"
                                                        data-bs-toggle="modal"
                                                        onClick={() => setDetailUser(project)}
                                                    >
                                                        <i className="icon-base ti tabler-eye icon-md"></i>
                                                    </button>
                                                    <button
                                                        data-bs-target="#editUser" 
                                                        className="btn btn-icon" 
                                                        data-bs-placement="top" 
                                                        title="Edit Klien"
                                                        data-bs-toggle="modal"
                                                        onClick={() => setDetailUser(project)}
                                                    >
                                                        <i className="icon-base ti tabler-pencil icon-md"></i>
                                                    </button>
                                                    <button
                                                        data-bs-target="#changeStatusUser" 
                                                        className="btn btn-icon" 
                                                        data-bs-placement="top" 
                                                        title="Status Klien"
                                                        data-bs-toggle="modal"
                                                        onClick={() => setDetailUser(project)}
                                                    >
                                                        <i className="icon-base ti tabler-lock icon-md"></i>
                                                    </button>
                                                    <a
                                                        data-bs-toggle="tooltip" 
                                                        className="btn btn-icon delete-record" 
                                                        data-bs-placement="top" 
                                                        title="Delete"
                                                    >
                                                        <i className="icon-base ti tabler-trash icon-md"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                    {/* filler row */}
                                    {
                                        Array.from({ length: itemsPerPage - currentData?.length }).map((_, i) => (
                                        <tr key={`empty-${i}`} style={{ height: "55px" }}>
                                            <td colSpan="14">
                                                {/* Jika data kosong dan ini row ke-2, tampilkan pesan */}
                                                {currentData.length === 0 && i === 1 && (
                                                    <p className="text-center m-0 mt-2">No data available</p>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                        {
                            dataValue.length > 0 && (
                                <>
                                    <nav aria-label="Page navigation" className="d-flex justify-content-end align-items-center px-3 pb-2 mt-6">
                                        <ul className="pagination pagination-sm mb-0">
                                            {/* First */}
                                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                            <button className="page-link" onClick={goToFirstPage}>
                                                <i className="icon-base ti tabler-chevrons-left icon-xs"></i>
                                            </button>
                                            </li>

                                            {/* Prev */}
                                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                            <button className="page-link" onClick={goToPrevPage}>
                                                <i className="icon-base ti tabler-chevron-left icon-xs"></i>
                                            </button>
                                            </li>

                                            {/* Dynamic pages */}
                                            {generatePages(currentPage, totalPages).map((page, index) => (
                                            <li
                                                key={index}
                                                className={`page-item ${page === currentPage ? "active" : ""} ${page === "..." ? "disabled" : ""}`}
                                            >
                                                <button
                                                className="page-link"
                                                onClick={() => page !== "..." && setCurrentPage(page)}
                                                >
                                                {page}
                                                </button>
                                            </li>
                                            ))}

                                            {/* Next */}
                                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                            <button className="page-link" onClick={goToNextPage}>
                                                <i className="icon-base ti tabler-chevron-right icon-xs"></i>
                                            </button>
                                            </li>

                                            {/* Last */}
                                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                            <button className="page-link" onClick={goToLastPage}>
                                                <i className="icon-base ti tabler-chevrons-right icon-xs"></i>
                                            </button>
                                            </li>
                                        </ul>
                                    </nav>

                                    <div className="d-flex justify-content-end pe-3 mb-4">
                                        <p style={{ margin: "0px"}}>
                                            Showing {indexOfFirst + 1} to{" "}
                                            {indexOfLast > dataValue.length ? dataValue.length : indexOfLast} of {dataValue.length} entries
                                        </p>
                                    </div>
                                </>
                            )
                        }
                        
                    </div>
                </div>

                <ModalAddUser/>
                
                <ModalReadUser detailUser={detailUser}/>

                <ModalEditUser detailUser={detailUser}/>

                <ModalStatusUser detailUser={detailUser}/>
                  
            </div>
        </>
    )
}