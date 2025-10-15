import { useEffect } from "react"
import { useOutletContext } from "react-router-dom";

export default function MessagePage() {

    const { setNavbarData } = useOutletContext();

    useEffect(() => {
        setNavbarData("Pesan Broadcast");
    }, [setNavbarData]);

    return(
        <>
            
        </>
    )
}