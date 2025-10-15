

export default function ModalReadUser({detailUser}) {

    return(
        <>
            <div className="modal fade" id="readUser" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="modalScrollableTitle">Detail Klien</h5>
                            <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close" />
                        </div>

                        <div className="modal-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Klien</td>
                                            <td>{detailUser?.klien}</td>
                                        </tr>
                                        <tr>
                                            <td>No Whatsapp</td>
                                            <td>{detailUser?.waNumber}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{detailUser?.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Alamat</td>
                                            <td>{detailUser?.alamat}</td>
                                        </tr>
                                        <tr>
                                            <td>Paket</td>
                                            <td>{detailUser?.paket}</td>
                                        </tr>
                                        <tr>
                                            <td>Daerah</td>
                                            <td>{detailUser?.daerah}</td>
                                        </tr>
                                        <tr>
                                            <td>ODP</td>
                                            <td>{detailUser?.odp}</td>
                                        </tr>
                                        <tr>
                                            <td>No Router</td>
                                            <td>{detailUser?.noRouter}</td>
                                        </tr>
                                        <tr>
                                            <td>Tanggal Gabung</td>
                                            <td>{detailUser?.joinStart}</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td>
                                                <span
                                                    className={`badge ${detailUser?.status ? "bg-label-success" : "bg-label-danger"}`}
                                                >
                                                    {detailUser?.status ? "Aktif" : "Non Aktif"}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                            Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}