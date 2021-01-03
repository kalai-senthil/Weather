import React from "react"
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet"
import "./Map.css"
export default function Map(props) {
        return (
            <MapContainer className="map" center={[props.lat,props.long]} zoom={3} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.lat,props.long]}>
                    <Popup>
                        {props.name}
                        <br/>
                        <p>{props.lat+","+props.long}</p>
                    </Popup>
                </Marker>
            </MapContainer>
        )
}

