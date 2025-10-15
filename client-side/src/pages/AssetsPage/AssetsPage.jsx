import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom";
import TableAsset from "../../components/AssetsComponent/TableAsset";
import dataAsset from "../../data/dataAsset.json"

export default function AssetsPage() {
    const [dataAssets, setDataAssets] = useState()
    const { setNavbarData } = useOutletContext();

    useEffect(() => {
        setNavbarData("Assets");
    }, [setNavbarData]);

    useEffect(() => {
        setDataAssets(dataAsset)
    }, [])


    return(
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row g-6">        
                    <TableAsset dataAssets={dataAssets}/>
                </div>
            </div>
        </>
    )
}