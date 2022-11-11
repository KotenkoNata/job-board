import React from "react";
import GoogleMapReact, {BootstrapURLKeys} from 'google-map-react';
import LocationPin from "./LocationPin";
import {Job} from "../../models";

interface Props {
    detailedJob: Job
}

const {
    REACT_APP_API_MAP_KEY: mapKey,
    REACT_APP_API_MAP_ID: mapId,
} = process.env;

const Map = ({detailedJob}: Props) => {
    let keys: BootstrapURLKeys = {
        key: `${mapKey}`
    };
    return (
        <div className="relative h-[430px] rounded-lg overflow-hidden">
            <div className="absolute top-0 left-0 z-10 bg-[#2A3047] w-[100%] px-16 py-8 text-[#E7EAF0]">
                <h3>Department name.</h3>
                <p className="mb-2">{detailedJob.name}</p>
                <div className="flex jod-detailed-text items-baseline">
                    <img className="mr-4" src={`${process.env.PUBLIC_URL}/images/Location.svg`} alt="Location icon"></img>
                    <p className="text-[#E7EAF0] mb-2">{detailedJob.address}</p>
                </div>
                <a href={"tel:" + detailedJob.phone} className="text-[#E7EAF0] jod-detailed-text mb-2" inputMode={"tel"}>{detailedJob.phone},<br/></a>
                <a href={"mailto:"+ detailedJob.email} className="text-[#E7EAF0] jod-detailed-text" inputMode={"email"}>{detailedJob.email}</a>
            </div>
            <GoogleMapReact
                bootstrapURLKeys={keys}
                defaultCenter={{lat: detailedJob.location.lat, lng: detailedJob.location.long}}
                options={{
                    mapId: `${mapId}`
                }}
                defaultZoom={17}>
                <LocationPin/>
            </GoogleMapReact>
        </div>
    )
}

export default Map;