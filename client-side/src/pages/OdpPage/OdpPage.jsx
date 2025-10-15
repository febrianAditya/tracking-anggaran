import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom";
import MapsOdp from "../../components/MapsOdp";
import MapsOdpAccordion from "../../components/OdpMapsComponent/MapsOdpAccordion";
import "../../css/node-waves.css"
import "../../css/iconify-icons.css"
import "../../css/demo.css"
import "../../css/perfect-scrollbar.css"
import "../../css/cards-advance.css"
import "../../css/core.css"
import "../../css/apex-charts.css"
import "../../css/app-chat.css"
import "../../css/max-length.css"

export default function OdpPage() {
    const { setNavbarData } = useOutletContext();

    const [dataOdp, setDataOdp] = useState(
        [
            {
                id: 1,
                alamat: "Jalan Gede Sebelah",
                daerah: "Kartika",
                kecamatan: "Klari",
                idOdp: 1,
                kuota: 40,
                terpenuhi: 12,
                instalasiTanggal: "2025-02-28",
                pengecekanTerakhir: "2025-02-28",
                imageOdp: "https://picsum.photos/200",
                lat: "-6.34588",
                long: "107.35089"
            },
            {
                id: 2,
                alamat: "Jalan Gede Sebelah",
                daerah: "Kartika",
                kecamatan: "Klari",
                idOdp: 2,
                kuota: 40,
                terpenuhi: 12,
                instalasiTanggal: "2025-02-28",
                pengecekanTerakhir: "2025-02-28",
                imageOdp: "https://picsum.photos/200",
                lat: "-6.35020",
                long: "107.35880"
            },
            {
                id: 3,
                alamat: "Jalan Gede Sebelah",
                daerah: "Kartika",
                kecamatan: "Klari",
                idOdp: 3,
                kuota: 40,
                terpenuhi: 12,
                instalasiTanggal: "2025-02-28",
                pengecekanTerakhir: "2025-02-28",
                imageOdp: "https://picsum.photos/200",
                lat: "-6.34961",
                long: "107.35500"
            },
        ]
    )

    useEffect(() => {
        setNavbarData("ODP List");
    }, [setNavbarData]);

    return(
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="app-chat card overflow-hidden">
                    <div className="row g-0">
                        <MapsOdpAccordion dataOdp={dataOdp}/>
                    </div>
                </div>
            </div>
        </>
    )
}