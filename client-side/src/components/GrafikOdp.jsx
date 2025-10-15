
export default function GrafikOdp() {
    const data = [
        {
            id: 1,
            daerahName: "Kabandungan",
            totalClient: 22,
            capacityClient: 60
        },
        {
            id: 2,
            daerahName: "Calista",
            totalClient: 50,
            capacityClient: 60
        },
        {
            id: 3,
            daerahName: "Cibalado",
            totalClient: 40,
            capacityClient: 60
        },
        {
            id: 4,
            daerahName: "Kahuripan",
            totalClient: 12,
            capacityClient: 60
        },
        {
            id: 5,
            daerahName: "Karawitan",
            totalClient: 16,
            capacityClient: 60
        },
        {
            id: 6,
            daerahName: "Kamuning",
            totalClient: 18,
            capacityClient: 60
        },
        {
            id: 7,
            daerahName: "Keleyengan",
            totalClient: 9,
            capacityClient: 60
        },
    ]

    const colors = ["bg-primary", "bg-success", "bg-danger", "bg-warning", "bg-info"];

    function calculatePercentage(totalClient, capacityClient) {
        if (capacityClient === 0) return 0; // biar ga error bagi 0
        return (totalClient / capacityClient) * 100;
    }

    return(
        <>
            <div className="col-xxl-4 col-md-6 mb-6">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div className="card-title mb-0">
                            <h5 className="mb-1">Sebaran ODP</h5>
                            <p className="card-subtitle">ODP /klien</p>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-text-secondary btn-icon rounded-pill text-body-secondary border-0 me-n1"
                                type="button"
                                id="activeProjects"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i className="icon-base ti tabler-dots-vertical icon-22px text-body-secondary"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="activeProjects">
                                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                                <a className="dropdown-item" href="javascript:void(0);">Download</a>
                                <a className="dropdown-item" href="javascript:void(0);">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div 
                            style={{
                                maxHeight: "260px",   // batas tinggi sebelum scroll
                                minHeight: "260px",   // tinggi minimum biar tetap proporsional walau data sedikit
                                overflowY: "auto"     // bikin scroll kalau melebihi maxHeight
                            }}
                        >
                            <ul className="p-0 m-0 ">
                                {
                                    data.map(el => (
                                         <li className="mb-4 d-flex" key={el.id}>
                                            <div className="d-flex w-50 align-items-center justify-content-between">
                                                <div>
                                                    <h6 className="mb-0">{el.daerahName}</h6>
                                                    <small className="text-body">{`${el.totalClient}/${el.capacityClient}`}</small>
                                                </div>
                                                <i class="icon-base ti tabler-arrow-narrow-right icon-28px text-body-secondary me-3"></i>
                                            </div>
                                            <div className="d-flex flex-grow-1 align-items-center">
                                                <div className="progress w-100 me-4" style={{height: "12px"}}>
                                                    <div
                                                    className={`progress-bar ${colors[el.id % colors.length]}`}
                                                    role="progressbar"
                                                    style={{ width: `${calculatePercentage(el.totalClient, el.capacityClient).toFixed(2)}%` }}
                                                    aria-valuenow={calculatePercentage(el.totalClient, el.capacityClient)}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                                </div>
                                                <span className="text-body-secondary">{`${calculatePercentage(el.totalClient, el.capacityClient).toFixed(2)}%`}</span>
                                            </div>
                                        </li>
                                    ))
                                }  
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}