import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from 'react';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});


function FlyToMarker({ selectedOdp }) {
    const map = useMap();

    useEffect(() => {
        if (selectedOdp) {
            map.flyTo([selectedOdp.lat, selectedOdp.lng], 17, { duration: 1.0 });
        }
    }, [selectedOdp, map]);

    return null;
}


export default function MapsLeaflet({selectedOdp, detailOdp}) {
    const [odpSelected, setOdpSelected] = useState()
    const [dataDetailOdp, setDataDetailOdp] = useState()

    useEffect(() => {        
        setOdpSelected(selectedOdp)
        setDataDetailOdp(detailOdp)
    }, [selectedOdp, detailOdp])

    return(
        <>
            <MapContainer
                center={[-6.34588, 107.35089]} // titik awal peta (Bandung)
                zoom={15}
                style={{ height: "100%", width: "100%" }}
            >
                {/* Layer dasar peta */}
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* /Layer dasar peta */}

                {/* Pin marker berdasarkan dataODP */}
                {dataDetailOdp?.map((data) => (
                    <Marker key={data.id} position={[data.lat, data.long]}>
                        <Popup>
                            <b>{`${data.daerah}-${data.idOdp}`}</b> <br />
                            Kapasitas: {`${data.terpenuhi}/${data.kuota}`} <br />
                            Alamat: {data.alamat}
                        </Popup>
                    </Marker>
                ))}
                {/* /Pin marker berdasarkan dataODP */}

                <FlyToMarker selectedOdp={odpSelected} />

            </MapContainer>
        </>
    )
}