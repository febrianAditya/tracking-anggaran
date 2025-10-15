import { useEffect, useState } from "react"
import TableUsers from "../../components/KlienComponents/TableUser"
import { useOutletContext } from "react-router-dom";
import dataKlien from "../../data/dataKlien.json"

export default function UserPage() {
    const { setNavbarData } = useOutletContext();

    const [data, setData] = useState([]);


    useEffect(() => {
        setNavbarData("Data Klien");
    }, [setNavbarData]);

    useEffect(() => {
        setData(dataKlien)
    }, [dataKlien])

    return(
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row g-6">
                    <TableUsers dataValue={data}/>
                </div>
            </div>
        </>
    )
}