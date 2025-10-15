import { useEffect } from "react"
import { useOutletContext } from "react-router-dom";

export default function InvoicePage() {
    const { setNavbarData } = useOutletContext();

    useEffect(() => {
        setNavbarData("Invoice Page");
    }, [setNavbarData]);

    return(
        <>
            
        </>
    )
}