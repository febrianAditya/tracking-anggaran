

export default function CardShadow({iconClass, headingFour, colorCard, totalValue, compareValue, symbol, valueGrowth}) {

    function manipulateDetailCompare() {
        if (compareValue === "month") {
            return "Bulan"
        }
        if (compareValue === "day") {
            return "Hari"
        }
    }



    return(
        <div class="col-lg-3 col-sm-6">
            <div class={`card card-border-shadow-${colorCard} h-100`}>
                <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                    <div class="avatar me-4">
                    <span class={`avatar-initial rounded bg-label-${colorCard}`}
                        ><i class={`icon-base ti ${iconClass} icon-28px`}></i></span>
                    </div>
                    <h4 class="mb-0">{totalValue}</h4>
                </div>
                <p class="mb-1">{headingFour}</p>
                <p class="mb-0">
                    <span class="text-heading fw-medium me-2">{`${symbol}${valueGrowth}%`}</span>
                    <small class="text-body-secondary">{manipulateDetailCompare()} sebelumnya</small>
                </p>
                </div>
            </div>
        </div>
    )
}