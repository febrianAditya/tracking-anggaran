import { useState } from "react"

export default function ModalEditOdp() {

    const [nameUser, setNameUser] = useState("")
    const [addressUser, setAddresUser] = useState("")
    const [daerahUser, setDaerahUser] = useState("")
    const [whatsappUser, setWhatsappUser] = useState("")
    const [emailUser, setEmailUser] = useState("")
    const [userDateJoin, setUserDateJoin] = useState("")
    const [routerUser, setRouterUser] = useState("")
    const [paketUser, setPaketUser] = useState("")

    const handleSubmit = () => {

    }

    return(
        <>
            <div className="modal fade" id="editOdp" tabIndex="-1" aria-hidden="true">
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
                                <h4 className="mb-3">Edit ODP</h4>
                            </div>

                            <form id="editUserForm" className="row g-6" onSubmit={e => handleSubmit(e)}>

                                <div className="col-12 col-md-12">
                                    <label className="form-label" htmlFor="modalEditUserFirstName">Alamat :</label>
                                    <textarea 
                                        className="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        rows="2"
                                        value={addressUser}
                                        onChange={e => setAddresUser(e.target.value)}
                                    />
                                </div>

                                <div className="col-12 col-md-12">
                                    <label htmlFor="daerahSelect" className="form-label">Daerah :</label>
                                    <select 
                                        id="daerahSelect" 
                                        className="form-select w-100"
                                        value={daerahUser} // dikontrol oleh state
                                        onChange={e => setDaerahUser(e.target.value)}
                                    >
                                        <optgroup label="Kahuripan">
                                            <option value={"kahuripan-1"}>kahuripan - 1</option>
                                            <option value={"kahuripan-2"}>kahuripan - 2</option>
                                            <option value={"kahuripan-3"}>kahuripan - 3</option>
                                        </optgroup>
                                        <optgroup label="Calista">
                                            <option value={"calista-1"}>Calista - 1</option>
                                            <option value={"calista-2"}>Calista - 2</option>
                                            <option value={"calista-3"}>Calista - 3</option>
                                        </optgroup>
                                    </select>
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUserPhone">Terisi :</label>
                                    <div className="input-group">
                                        {/* <span className="input-group-text">(+62)</span> */}
                                        <input
                                            type="text"
                                            id="modalEditUserPhone"
                                            name="modalEditUserPhone"
                                            className="form-control phone-number-mask"
                                            placeholder=""
                                            value={whatsappUser} 
                                            onChange={e => setWhatsappUser(e.target.value)}
                                        />
                                    </div>
                                </div>                                
                        
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUserEmail">Kuota :</label>
                                    <input
                                        type="text"
                                        id="modalEditUserEmail"
                                        name="modalEditUserEmail"
                                        className="form-control"
                                        placeholder=""
                                        value={emailUser}
                                        onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUserPhone">Latitude :</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            id="modalEditUserPhone"
                                            name="modalEditUserPhone"
                                            className="form-control phone-number-mask"
                                            placeholder=""
                                            value={whatsappUser} 
                                            onChange={e => setWhatsappUser(e.target.value)}
                                        />
                                    </div>
                                </div>                                
                        
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUserEmail">Longitude :</label>
                                    <input
                                        type="text"
                                        id="modalEditUserEmail"
                                        name="modalEditUserEmail"
                                        className="form-control"
                                        placeholder=""
                                        value={emailUser}
                                        onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUserEmail">Instalasi :</label>
                                    <input 
                                        className="form-control" 
                                        type="date" 
                                        value={userDateJoin}
                                        onChange={e => setUserDateJoin(e.target.value)}
                                        id="html5-date-input" 
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUserEmail">Pengecekan :</label>
                                    <input 
                                        className="form-control" 
                                        type="date" 
                                        value={userDateJoin}
                                        onChange={e => setUserDateJoin(e.target.value)}
                                        id="html5-date-input" 
                                    />
                                </div>

                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary me-3">Edit</button>
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

