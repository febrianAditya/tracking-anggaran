

export default function CardTransaction() {

    return(
        <>
            <div class="col-lg-6">
                <div class="card h-100">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="card-title m-0">Pembayaran Terakhir</h5>
                        <div class="dropdown">
                            <button
                                class="btn btn-text-secondary btn-icon rounded-pill text-body-secondary border-0 me-n1"
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
                    
                    <div class="table-responsive">
                        <table class="table table-borderless border-top">
                            <thead class="border-bottom">
                                <tr>
                                    <th>Klien</th>
                                    <th>Tanggal</th>
                                    <th>Nominal</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="pt-5">
                                        <p class="mb-0 text-heading">Anto Istana Garage</p>
                                    </td>
                                    <td class="pt-5">
                                        <div class="d-flex flex-column">
                                            <p class="mb-0 text-heading">Transfer</p>
                                            <small class="text-body text-nowrap">17 Mar 2025</small>
                                        </div>
                                    </td>
                                    <td class="pt-5">
                                        <p class="mb-0 text-heading">Rp 130.000</p>
                                    </td>
                                    <td class="pt-5"><span class="badge bg-label-success">Verified</span></td>
                                </tr>
                                <tr>
                                    <td class="pt-5">
                                        <p class="mb-0 text-heading">Acep Ciamis</p>
                                    </td>
                                    <td class="pt-5">
                                        <div class="d-flex flex-column">
                                            <p class="mb-0 text-heading">Manual</p>
                                            <small class="text-body text-nowrap">11 Mar 2025</small>
                                        </div>
                                    </td>
                                    <td class="pt-5">
                                        <p class="mb-0 text-heading">Rp 130.000</p>
                                    </td>
                                    <td class="pt-5"><span class="badge bg-label-success">Verified</span></td>
                                </tr>
                                <tr>
                                    <td class="pt-5">
                                        <p class="mb-0 text-heading">Febri Dummy</p>
                                    </td>
                                    <td class="pt-5">
                                        <div class="d-flex flex-column">
                                            <p class="mb-0 text-heading">Transfer</p>
                                            <small class="text-body text-nowrap">10 Mar 2025</small>
                                        </div>
                                    </td>
                                    <td class="pt-5">
                                        <p class="mb-0 text-heading">Rp 130.000</p>
                                    </td>
                                    <td class="pt-5"><span class="badge bg-label-success">Verified</span></td>
                                </tr>
                                <tr>
                                    <td class="pt-5">
                                        <p class="mb-0 text-heading">Zack</p>
                                    </td>
                                    <td class="pt-5">
                                        <div class="d-flex flex-column">
                                            <p class="mb-0 text-heading">QRIS</p>
                                            <small class="text-body text-nowrap">08 Mar 2025</small>
                                        </div>
                                    </td>
                                    <td class="pt-5">
                                        <p class="mb-0 text-heading">Rp 130.000</p>
                                    </td>
                                    <td class="pt-5"><span class="badge bg-label-success">Verified</span></td>
                                </tr>
                                <tr>
                                    <td class="pt-5">
                                        <p class="mb-0 text-heading">Kokom Komariah</p>
                                    </td>
                                    <td class="pt-5">
                                        <div class="d-flex flex-column">
                                            <p class="mb-0 text-heading">Manual</p>
                                            <small class="text-body text-nowrap">03 Mar 2025</small>
                                        </div>
                                    </td>
                                    <td class="pt-5">
                                        <p class="mb-0 text-heading">Rp 130.000</p>
                                    </td>
                                    <td class="pt-5"><span class="badge bg-label-success">Verified</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}