
export default function ModalAddAsset() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return(
        <>
            <div className="modal fade" id="addAsset" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-md modal-simple modal-edit-user">
                    <div className="modal-content p-0">
                        <div className="modal-body">
                            <button 
                                type="button" 
                                className="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close" 
                                style={{
                                    position: "absolute",
                                    insetBlockStart: "1rem",
                                    insetInlineEnd: "1rem"
                                }}
                            />
                            
                            <div className="text-center">
                                <h4 className="mb-3">Tambah Asset</h4>
                            </div>

                            <form id="editUserForm" className="row g-6" onSubmit={e => handleSubmit(e)}>

                                
                        
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="namaAsset">Nama Asset :</label>
                                    <input
                                        type="text"
                                        id="namaAsset"
                                        name="namaAsset"
                                        className="form-control"
                                        placeholder=""
                                        // value={emailUser}
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="noAsset">No Asset :</label>
                                    <input
                                        type="text"
                                        id="noAsset"
                                        name="noAsset"
                                        className="form-control"
                                        placeholder=""
                                        // value={emailUser}
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="kategoriAsset">Kategori :</label>
                                    <select 
                                        id="kategoriAsset" 
                                        className="form-select w-100"
                                        // value={daerahUser} // dikontrol oleh state
                                        // onChange={e => setDaerahUser(e.target.value)}
                                    >
                                        <option value={"kahuripan-1"}>Router</option>
                                        <option value={"kahuripan-2"}>Mikrotik</option>
                                        <option value={"kahuripan-3"}>LCD</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="merkAsset">Merk :</label>
                                    <input
                                        type="text"
                                        id="merkAsset"
                                        name="merkAsset"
                                        className="form-control"
                                        placeholder=""
                                        // value={emailUser}
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="kondisiAsset">Status Kondisi :</label>
                                    <select 
                                        id="kondisiAsset" 
                                        className="form-select w-100"
                                        // value={daerahUser} // dikontrol oleh state
                                        // onChange={e => setDaerahUser(e.target.value)}
                                    >
                                        <option value={"kahuripan-1"}>Baik</option>
                                        <option value={"kahuripan-2"}>Rusak</option>
                                        <option value={"kahuripan-3"}>Perbaikan</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="serialNumberAsset">Serial Number :</label>
                                    <input
                                        type="text"
                                        id="serialNumberAsset"
                                        name="serialNumberAsset"
                                        className="form-control"
                                        placeholder=""
                                        // value={emailUser}
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="tanggalPembelian">Tanggal Pembelian :</label>
                                    <input 
                                        className="form-control" 
                                        type="date" 
                                        // value={userDateJoin}
                                        // onChange={e => setUserDateJoin(e.target.value)}
                                        id="tanggalPembelian" 
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="garansiAsset">Garansi :</label>
                                    <input 
                                        className="form-control" 
                                        type="date" 
                                        // value={userDateJoin}
                                        // onChange={e => setUserDateJoin(e.target.value)}
                                        id="garansiAsset" 
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="hargaAsset">Harga Pembelian :</label>
                                    <input
                                        type="text"
                                        id="hargaAsset"
                                        name="hargaAsset"
                                        className="form-control"
                                        placeholder=""
                                        // value={emailUser}
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>
                                

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="lokasiAsset">Lokasi :</label>
                                    <input
                                        type="text"
                                        id="lokasiAsset"
                                        name="lokasiAsset"
                                        className="form-control"
                                        placeholder=""
                                        // value={emailUser}
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>
                               

                                <div className="col-12 col-md-12">
                                    <label className="form-label" htmlFor="keteranganAsset">Keterangan :</label>
                                    <textarea 
                                        className="form-control" 
                                        id="keteranganAsset" 
                                        rows="2"
                                        // value={addressUser}
                                        // onChange={e => setAddresUser(e.target.value)}
                                    />
                                </div>
                    

                                

                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary me-3">Submit</button>
                                    <button
                                        type="reset"
                                        className="btn btn-label-secondary"
                                        data-bs-dismiss="modal"
                                        aria-label="Close">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}