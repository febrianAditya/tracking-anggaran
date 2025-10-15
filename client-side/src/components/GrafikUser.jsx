import Chart from "react-apexcharts";

const EarningReportsBarChart = (arrayData, highlightData) => {
    const basicColor = "#ccc"; // ganti sesuai config.colors_label.primary
    const highlightColor = "#7367f0"; // ganti sesuai config.colors.primary
    const headingColor = "#000";
    const labelColor = "#666";
    const borderColor = "#ddd";
    const fontFamily = "Helvetica, Arial, sans-serif";

    const colorArr = arrayData.map((_, i) =>
        i === highlightData ? highlightColor : basicColor
    );

    return {
        chart: {
            height: 231,
            parentHeightOffset: 0,
            type: "bar",
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
            columnWidth: "60%",
            borderRadiusApplication: "round",
            borderRadius: 4,
            distributed: true,
            dataLabels: { position: "top" }
            }
        },
        grid: {
            show: false,
            padding: { top: 0, bottom: 0, left: -10, right: -10 }
        },
        colors: colorArr,
        dataLabels: {
            enabled: true,
            formatter: (val) => val,
            offsetY: -30,
            style: {
                fontSize: "15px",
                colors: [headingColor],
                fontWeight: "500",
                fontFamily: fontFamily
            }
        },
        series: [{ data: arrayData }],
        legend: { show: false },
        tooltip: { enabled: false },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            axisBorder: { show: true, color: borderColor },
            axisTicks: { show: false },
            labels: {
                style: { colors: labelColor, fontSize: "13px", fontFamily }
            }
        },
        yaxis: {
            labels: {
                offsetX: -15,
                offsetY: -5,
                formatter: (val) => parseInt(val / 1),
                style: { fontSize: "12px", colors: labelColor, fontFamily }
            },
            min: 0,
            max: 150,
            tickAmount: 3
        },
        responsive: [
            {
                breakpoint: 1441,
                options: {
                    plotOptions: { bar: { columnWidth: "41%" } }
                }
            },
            {
                breakpoint: 590,
                options: {
                    plotOptions: { bar: { columnWidth: "61%", borderRadius: 5 } },
                    yaxis: { labels: { show: false } },
                    grid: { padding: { right: 0, left: -20 } },
                    dataLabels: {
                    style: { fontSize: "12px", fontWeight: "400" }
                    }
                }
            }
        ]
    };
};

const GrafikUser = ({ data, highlight }) => {
  const chartOptions = EarningReportsBarChart(data, highlight);

  return (
    <>
        <div class="col-8 col-xl-8 order-1">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="card-title m-0">
                        <h5 class="mb-1">Grafik Pertumbuhan Klien</h5>
                        <p class="card-subtitle">Satu Tahun Terakhir</p>
                    </div>
                    <div class="dropdown">
                        <button
                            class="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-2 me-n1"
                            type="button"
                            id="earningReportsTabsId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <i class="icon-base ti tabler-dots-vertical icon-md text-body-secondary"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="earningReportsTabsId">
                            <a class="dropdown-item" href="javascript:void(0);">View More</a>
                            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="tab-content p-0 ms-0 ms-sm-2">
                        <div class="tab-pane fade show active" id="navs-orders-id" role="tabpanel">
                            <div>
                                <Chart
                                    options={chartOptions}
                                    series={chartOptions.series}
                                    type="bar"
                                    height={260}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default GrafikUser;