import { useEffect } from "react"
import "../../css/node-waves.css"
import "../../css/iconify-icons.css"
import "../../css/demo.css"
import "../../css/perfect-scrollbar.css"
import "../../css/cards-advance.css"
import "../../css/core.css"
import "../../css/apex-charts.css"
import CardShadow from "../../components/CardShadow"
import CardTransaction from "../../components/CardTransaction"
import TableList from "../../components/TableList"
import GrafikUser from "../../components/GrafikUser"
import GrafikOdp from "../../components/GrafikOdp"
import { useOutletContext } from "react-router-dom";
import dataKlienDashboard from "../../data/dataKlienDashboard.json"

const dataPelanggan = {
  data: [
    {
      chart_data: [10, 32, 53, 118, 122, 64, 88, 132, 124],
      active_option: 8
    }
  ]
};


export default function Dashboard() {
    const { setNavbarData } = useOutletContext();

     useEffect(() => {
        setNavbarData("Dashboard");
    }, [setNavbarData]);

    return(
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row g-6">

                    <CardShadow 
                        iconClass="tabler-users-group"
                        headingFour="Total Klien"
                        colorCard="primary"
                        totalValue={42}
                        compareValue="month"
                        symbol={"+"}
                        valueGrowth={18.2}
                        unitValue={"%"}
                    />

                    <CardShadow
                        iconClass="tabler-checkbox"
                        headingFour="Sudah Bayar"
                        colorCard="success"
                        totalValue={40}
                        compareValue="day"
                        symbol={""}
                        valueGrowth={0}
                        unitValue={"%"}
                    />

                    <CardShadow
                        iconClass="tabler-currency-dollar"
                        headingFour="Belum Bayar"
                        colorCard="danger"
                        totalValue={2}
                        compareValue="day"
                        symbol={"+"}
                        valueGrowth={`0`}
                        unitValue={"%"}
                    />

                    <CardShadow
                        iconClass="tabler-currency-dollar"
                        headingFour="Total Pendapatan Bulan Ini"
                        colorCard="warning"
                        totalValue={`Rp 12.800.000`}
                        compareValue="month"
                        symbol={"+"}
                        valueGrowth={`2.340.000`}
                        unitValue={""}
                    />

                    <GrafikOdp/> 

                    <GrafikUser
                        data={dataPelanggan.data[0].chart_data}
                        highlight={dataPelanggan.data[0].active_option}
                    />
                    
                </div>
                <div className="row g-6">
                    <CardTransaction/>
                    <TableList dataValue={dataKlienDashboard}/>
                </div>
            </div>
        </>
    )

}