import { useEffect, useState } from "react"
import Pagination from "../Pagintaion"
import ModalAddAsset from "./ModalAddAsset"
import ModalEditAsset from "./ModalEditAsset"
import ModalReadAsset from "./ModalReadAsset"

export default function TableAsset({ dataAssets }) {
    const [data, setData] = useState([])
    const [dataAsset, setDataAsset] = useState({})

    useEffect(() => {
        setData(dataAssets)
    }, [dataAssets])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Hitung data untuk halaman aktif
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentData = data?.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(data?.length / itemsPerPage);

    function truncateText(text, maxLength = 10) {
        if (!text) return "";
        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text;
    }

    // function handleAsset(asset) {
    //     console.log(asset, "==> apa sih");  
    // }

    return(
        <>
            <div className="col-xxl-12">
                <div className="card">
                    <div className="card-body" style={{ paddingBottom: "14px"}}>

                        <div className="d-flex justify-content-end mb-4">
                            <div className="d-flex justify-content-end">  

                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addAsset">
                                    <i className="icon-base icon-16px ti tabler-plus me-md-2"></i><span className="d-md-inline-block d-none">Tambah Asset</span>
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
                                    <input type="search" className="form-control" placeholder="Cari No Asset" aria-controls="DataTables_Table_0" style={{ width: "280px"}}/>
                                </label>
                            </div>
                        </div>

                        <div className="table-responsive mb-1" style={{ minHeight: "300px", overflowX: "auto"}}>
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
                                            Nama Asset
                                        </th>
                                        <th>No Asset</th>
                                        <th>Kategori</th>
                                        <th>Merk</th>
                                        <th>Model</th>
                                        <th>Serial Number</th>
                                        <th>Tanggal Pembelian</th>
                                        <th>Harga Pembelian</th>
                                        <th>Status Kondisi</th>
                                        <th>Lokasi</th>
                                        <th>Garansi</th>
                                        <th>Keterangan</th> 
                                        <th>Actions</th> 
                                    </tr>
                                </thead>
                                
                                {/* DARI SINI LANJUTNYA */}

                                <tbody>
                                    {
                                        currentData?.map(asset => (
                                            <tr key={asset.id} style={{ height: "55px" }}>
                                                <td
                                                    style={{
                                                        position: "sticky",
                                                        left: 0,
                                                        background: "#fff",
                                                        zIndex: 1, // lebih rendah dari th biar header tetap di atas
                                                    }}
                                                >
                                                   {truncateText(asset.namaAsset, 18)} 
                                                </td>

                                                <td>{asset.nomorAsset}</td>
                                                <td>{asset.kategori}</td>
                                                <td>{asset.merk}</td>
                                                <td>{asset.model}</td>
                                                <td>{asset.serialNumber}</td>
                                                <td>{asset.tanggalPembelian}</td>
                                                <td>{asset.hargaPembelian}</td>
                                                <td>{asset.statusKondisi}</td>
                                                <td>{asset.lokasi}</td>
                                                <td>{asset.garansiSampai}</td>
                                                <td>{asset.keterangan}</td>
                                                <td>
                                                    <button 
                                                        data-bs-target="#readAsset" 
                                                        className="btn btn-icon" 
                                                        data-bs-placement="top" 
                                                        title="Preview Asset"
                                                        data-bs-toggle="modal"
                                                        onClick={() => setDataAsset(asset)}
                                                    >
                                                        <i className="icon-base ti tabler-eye icon-md"></i>
                                                    </button>
                                                    <button
                                                        data-bs-target="#editAsset" 
                                                        className="btn btn-icon" 
                                                        data-bs-placement="top" 
                                                        title="Edit Klien"
                                                        data-bs-toggle="modal"
                                                        onClick={() => setDataAsset(asset)}
                                                    >
                                                        <i className="icon-base ti tabler-pencil icon-md"></i>
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

                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                        <div className="d-flex justify-content-end pe-3">
                            <p style={{ margin: "0px"}}>
                                Showing {indexOfFirst + 1} to{" "}
                                {indexOfLast > data?.length ? data?.length : indexOfLast} of {data?.length} entries
                            </p>
                        </div>
                    </div>
                </div>

                <ModalAddAsset/>
                <ModalReadAsset dataAsset={dataAsset}/>
                <ModalEditAsset dataAsset={dataAsset}/>
            </div>
        </>
    )
}