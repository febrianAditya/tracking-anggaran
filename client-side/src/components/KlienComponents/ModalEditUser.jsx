import { useEffect, useState } from "react"


export default function ModalEditUser({detailUser}) {
    const [nameUser, setNameUser] = useState("")
    const [addressUser, setAddresUser] = useState("")
    const [daerahUser, setDaerahUser] = useState("")
    const [whatsappUser, setWhatsappUser] = useState("")
    const [emailUser, setEmailUser] = useState("")
    const [userDateJoin, setUserDateJoin] = useState("")
    const [routerUser, setRouterUser] = useState("")
    const [paketUser, setPaketUser] = useState("")

    useEffect(() => {
        if (detailUser) {
            setNameUser(detailUser.klien || "");
            setAddresUser(detailUser.alamat || "");
            setDaerahUser(detailUser.daerah || "");
            setWhatsappUser(detailUser.waNumber || "");
            setEmailUser(detailUser.email || "");
            setUserDateJoin(detailUser.joinStart || "");
            setRouterUser(detailUser.noRouter || "");
            setPaketUser(detailUser.paket || "");
        }
    }, [detailUser])

    function cekValue(e) {
        // console.log(e.target.value);
        console.log(paketUser, "==> APA INI");
        
        
    }

    

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <>
            <div className="modal fade" id="editUser" tabIndex="-1" aria-hidden="true">
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
                                <h4 className="mb-3">Edit Klien</h4>
                            </div>

                            <form id="editUserForm" className="row g-6" onSubmit={e => handleSubmit(e)}>

                                <div className="col-12 col-md-12">
                                    <label className="form-label" htmlFor="modalEditUserFirstName">Nama :</label>
                                    <input
                                        type="text"
                                        id="modalEditUserFirstName"
                                        name="modalEditUserFirstName"
                                        className="form-control"
                                        placeholder="John Doe"
                                        onChange={e => setNameUser(e.target.value)}
                                        value={nameUser}
                                    />
                                </div>

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
                                    <label className="form-label" htmlFor="modalEditUserPhone">No Whatsapp :</label>
                                    <div className="input-group">
                                        <span className="input-group-text">(+62)</span>
                                        <input
                                            type="text"
                                            id="modalEditUserPhone"
                                            name="modalEditUserPhone"
                                            className="form-control phone-number-mask"
                                            placeholder="81320094008"
                                            value={whatsappUser} 
                                            onChange={e => setWhatsappUser(e.target.value)}
                                        />
                                    </div>
                                </div>                                
                        
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUserEmail">Email :</label>
                                    <input
                                        type="text"
                                        id="modalEditUserEmail"
                                        name="modalEditUserEmail"
                                        className="form-control"
                                        placeholder="jhon@domain.com"
                                        value={emailUser}
                                        onChange={e => setEmailUser(e.target.value)}    
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUserEmail">Tanggal Gabung :</label>
                                    <input 
                                        className="form-control" 
                                        type="date" 
                                        value={userDateJoin}
                                        onChange={e => cekValue(e)}
                                        // onChange={e => setUserDateJoin(e.target.value)}
                                        id="html5-date-input" 
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUserEmail">No Router :</label>
                                    <input
                                        type="text"
                                        id="modalEditUserPhone"
                                        name="modalEditUserPhone"
                                        className="form-control phone-number-mask"
                                        placeholder="R-00001123"
                                        value={routerUser}
                                        onChange={e => setRouterUser(e.target.value)} 
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label" htmlFor="modalEditUserEmail">Paket :</label>
                                    <div className="row">
                                        
                                        <div className="col-md mb-md-0 mb-5">
                                            <div className="form-check custom-option custom-option-basic">
                                                <label className="form-check-label custom-option-content" htmlFor="customRadioTemp1">
                                                <input
                                                    name="customRadioTemp"
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="customRadioTemp1"
                                                    value="sosial"
                                                    checked={paketUser === "sosial"}
                                                    onChange={(e) => setPaketUser(e.target.value)}
                                                 />
                                                <span className="custom-option-header">
                                                    <span className="h6 mb-0">Sosial</span>
                                                    <small className="text-body-secondary">Free</small>
                                                </span>
                                                <span className="custom-option-body">
                                                    <small>Paket sosial untuk fasum dan tempat ibadah.</small>
                                                </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="form-check custom-option custom-option-basic">
                                                <label className="form-check-label custom-option-content" htmlFor="customRadioTemp2">
                                                <input
                                                    name="customRadioTemp"
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="customRadioTemp2" 
                                                    value="premium"
                                                    checked={paketUser === "premium"}
                                                    onChange={(e) => setPaketUser(e.target.value)} 
                                                />
                                                <span className="custom-option-header">
                                                    <span className="h6 mb-0">Premium</span>
                                                    <small className="text-body-secondary">Rp 130.000</small>
                                                </span>
                                                <span className="custom-option-body">
                                                    <small>Kecepatan 30 Mbps dengan fasilitas Unlimited.</small>
                                                </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
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