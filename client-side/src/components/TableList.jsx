import { useEffect, useState } from "react"
import Pagination from "./Pagintaion";


export default function TableList({dataValue}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dataValue)
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Hitung data untuk halaman aktif
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentData = data.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    function truncateText(text, maxLength = 10) {
        if (!text) return "";
        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text;
    }


    return(
        <>
            <div className="col-xxl-6">
                <div className="card">
                    <div className="card-body" style={{ paddingBottom: "14px"}}>
                        <div className="d-flex justify-content-between mb-1">
                            <h5 class="card-title m-0">Belum Bayar</h5>
                            <div class="dropdown">
                                <button
                                    class="btn btn-text-secondary btn-icon rounded-pill text-body-secondary border-0 me-n1 pb-2"
                                    type="button"
                                    id="teamMemberList"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i class="icon-base ti tabler-dots-vertical icon-22px text-body-secondary"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="teamMemberList">
                                    <a class="dropdown-item" href="javascript:void(0);">Download</a>
                                    <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                                    <a class="dropdown-item" href="javascript:void(0);">Share</a>
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive mb-1" style={{ minHeight: "300px"}}>
                            <table className="table table-sm">
                                <thead className="border-top">
                                    <tr>
                                    <th>KLIEN</th>
                                    <th>BATAS</th>
                                    <th>NOMINAL</th>
                                    <th>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentData.map((project) => (
                                    <tr key={project.id} style={{ height: "55px" }}>
                                        <td>{truncateText(project.klien)}</td>
                                        <td>{project.deadLine}</td>
                                        <td>{project.nominal}</td>
                                        <td className="pt-5">
                                        <span className="badge bg-label-danger">Unpaid</span>
                                        </td>
                                    </tr>
                                    ))}

                                    {/* filler row */}
                                    {
                                        Array.from({ length: itemsPerPage - currentData.length }).map((_, i) => (
                                        <tr key={`empty-${i}`} style={{ height: "55px" }}>
                                            <td colSpan="4">
                                                {/* Jika data kosong dan ini row ke-2, tampilkan pesan */}
                                                {currentData.length === 0 && i === 1 && (
                                                <p className="text-center m-0 mt-2">No data available</p>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                        </div>

                        <div className="d-flex justify-content-end pe-3">
                            <p style={{ margin: "0px"}}>
                                Showing {indexOfFirst + 1} to{" "}
                                {indexOfLast > data.length ? data.length : indexOfLast} of {data.length} entries
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}