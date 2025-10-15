import { useEffect, useState } from "react"


export default function ModalReadAsset({ dataAsset }) {

    const [data, setData] = useState({})

    useEffect(() => {
        setData(dataAsset)
    }, [dataAsset])

    return(
        <>
            <div className="modal fade" id="readAsset" tabIndex="-1" aria-hidden="true">
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
                                <h4 className="mb-3">Asset</h4>
                            </div>

                            <div className="row g-6">
      
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="namaAsset">Nama Asset :</label>
                                    <input
                                        type="text"
                                        id="namaAsset"
                                        name="namaAsset"
                                        className="form-control"
                                        placeholder=""
                                        value={data.namaAsset}
                                        readOnly
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
                                        value={data.nomorAsset}
                                        readOnly
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="kategoriAsset">Kategori :</label>
                                    <input
                                        type="text"
                                        id="kategoriAsset"
                                        name="kategoriAsset"
                                        className="form-control"
                                        placeholder=""
                                        value={data.kategori}
                                        readOnly
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="merkAsset">Merk :</label>
                                    <input
                                        type="text"
                                        id="merkAsset"
                                        name="merkAsset"
                                        className="form-control"
                                        placeholder=""
                                        value={data.merk}
                                        readOnly
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="kondisiAsset">Status Kondisi :</label>
                                    <input
                                        type="text"
                                        id="kondisiAsset"
                                        name="kondisiAsset"
                                        className="form-control"
                                        placeholder=""
                                        value={data.statusKondisi}
                                        readOnly
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="serialNumberAsset">Serial Number :</label>
                                    <input
                                        type="text"
                                        id="serialNumberAsset"
                                        name="serialNumberAsset"
                                        className="form-control"
                                        placeholder=""
                                        value={data.serialNumber}
                                        readOnly
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="tanggalPembelian">Tanggal Pembelian :</label>
                                    <input 
                                        className="form-control" 
                                        type="date" 
                                        readOnly
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
                                        readOnly
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
                                        value={data.hargaPembelian}
                                        readOnly
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
                                        value={data.lokasi}
                                        readOnly
                                        // onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>
                               

                                <div className="col-12 col-md-12">
                                    <label className="form-label" htmlFor="keteranganAsset">Keterangan :</label>
                                    <textarea 
                                        className="form-control" 
                                        id="keteranganAsset" 
                                        rows="2"
                                        value={data.keterangan}
                                        readOnly
                                        // onChange={e => setAddresUser(e.target.value)}
                                    />
                                </div>
                    

                                

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                    Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}