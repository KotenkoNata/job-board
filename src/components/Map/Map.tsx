import React from "react";
import GoogleMapReact, {BootstrapURLKeys} from 'google-map-react';
import LocationPin from "./LocationPin";
import {Job} from "../../models";

interface Props {
    detailedJob: Job
}

const {
    REACT_APP_API_MAP_KEY: mapKey,
} = process.env;

const Map = ({detailedJob}: Props) => {
    let keys: BootstrapURLKeys = {
        key: `${mapKey}`
    };
    return (
        <>
            <GoogleMapReact
                bootstrapURLKeys={keys}
                defaultCenter={{lat: detailedJob.location.lat, lng: detailedJob.location.long}}
                defaultZoom={17}>
                <LocationPin/>
            </GoogleMapReact>
        </>
    )
}

export default Map;