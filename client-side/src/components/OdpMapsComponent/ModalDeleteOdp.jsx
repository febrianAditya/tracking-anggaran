
export default function ModalDeleteOdp() {


    return(
        <>
            <div className="modal fade" id="deleteOdp" tabindex="-1" aria-hidden="true">
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

                        <h5 className="m-0">Menghapus Odp {"ini"} ?</h5>
                        <p className="">
                            Apakah anda yakin ingin menghapus data.
                        </p>
                      
                        <div className="text-end">
                            <button
                            type="button"
                            className="btn btn-label-secondary me-3"
                            data-bs-toggle="modal"
                            data-bs-target="#twoFactorAuth">
                            <span className="align-middle">Cancel</span>
                            </button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                            <span className="align-middle">Delete</span><i className="icon-base ti tabler-check ms-2"></i>
                            </button>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}