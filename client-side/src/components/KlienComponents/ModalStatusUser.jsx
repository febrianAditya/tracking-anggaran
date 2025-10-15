import { useEffect, useState } from "react"

export default function ModalStatusUser({detailUser}) {
    const [userStatus, setUserStatus] = useState(false)
    const [klienName, setKlienName] = useState("")

    useEffect(() => {
        setUserStatus(detailUser?.status)
        setKlienName(detailUser?.klien)
    }, [detailUser])

    return(
        <>
            <div className="modal fade" id="changeStatusUser" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered modal-simple">
                  <div className="modal-content p-3">
                    <div className="modal-body">
                      
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close" 
                            style={{
                                position: "absolute",
                                insetBlockStart: "0rem",
                                insetInlineEnd: "0rem"
                            }}
                        />

                      <p className="mb-6">
                        Apakah anda yakin ingin merubah statusnya.
                      </p>

                      <div className="d-flex justify-content-between align-items-center mb-9">
                            <h5 className="m-0">Merubah Status {klienName} ?</h5>

                            <label className="switch switch-square switch-lg">
                                <input 
                                    type="checkbox" 
                                    className="switch-input" 
                                    checked={userStatus} // kalau true → switch nyala, kalau false → mati
                                    onChange={(e) => setUserStatus(e.target.checked)} 
                                />
                                <span className="switch-toggle-slider">
                                <span className="switch-on">
                                    <i className="icon-base ti tabler-check"></i>
                                </span>
                                <span className="switch-off">
                                    <i className="icon-base ti tabler-x"></i>
                                </span>
                                </span>
                                <span className="switch-label">{userStatus ? "Active" : "Non Active"}</span>
                            </label>

                      </div>
                      


                      <div className="text-end">
                        <button
                          type="button"
                          className="btn btn-label-secondary me-3"
                          data-bs-toggle="modal"
                          data-bs-target="#twoFactorAuth">
                          <span className="align-middle">Cancel</span>
                        </button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                          <span className="align-middle">Submit</span><i className="icon-base ti tabler-check ms-2"></i>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
        
        </>
    )
}