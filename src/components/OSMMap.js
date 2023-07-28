import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//we uses the react-redux library for state management and the react-leaflet library for displaying a map with markers and popups
import 'leaflet/dist/leaflet.css';

const OSMMap = () => {
    const selectedRegion = useSelector((state) => state.selectedRegion);
    //useSelector it is a hook from react-redux that allows the component to access the Redux store's state

    const getCenterForRegion = (region) => {
        //useSelector: This is a hook from react-redux that allows the component to access the Redux store's state
        switch (region) {
            case 'us':
                return [37.0902, -95.7129]; // United States coordinates
            case 'in':
                return [20.5937, 78.9629]; // India coordinates
            case 'uk':
                return [55.3781, -3.4360]; // United Kingdom coordinates
            default:
                return [20.5937, 78.9629]; // Default coordinates (India)
        }
    };

    // Region info data (You can replace this with real data from the Redux store)
    const regionInfoData = {
        //those are the object stores information about different regions, such as currency symbol, speed unit, distance unit, volume unit, and timezone.
        us: {
            currencySymbol: '$',
            speedUnit: 'mph',
            distanceUnit: 'miles',
            volumeUnit: 'gallons',
            timezone: 'UTC-5 to UTC-10',
        },
        in: {
            currencySymbol: '₹',
            speedUnit: 'kmph',
            distanceUnit: 'kilometers',
            volumeUnit: 'liters',
            timezone: 'UTC+5:30',
        },
        uk: {
            currencySymbol: '£',
            speedUnit: 'mph',
            distanceUnit: 'miles',
            volumeUnit: 'liters',
            timezone: 'UTC+0 to UTC+1',
        },
    };

    const regionInfo = selectedRegion ? regionInfoData[selectedRegion] : null;
    //It is null if no region is selected

    return (
        <div>
            {regionInfo && (
                <div style={{ marginBottom: 20 }}>
                    <h3>Region Info</h3>
                    <p>Currency Symbol: {regionInfo.currencySymbol}</p>
                    <p>Speed Unit: {regionInfo.speedUnit}</p>
                    <p>Distance Unit: {regionInfo.distanceUnit}</p>
                    <p>Volume Unit: {regionInfo.volumeUnit}</p>
                    <p>Timezone(s): {regionInfo.timezone}</p>
                </div>
            )}
            <MapContainer
                //MapContainer is the  component from react-leaflet is used to render the map. 
                //It receives the center prop to set the center of the map based on the selected region
                center={selectedRegion ? getCenterForRegion(selectedRegion) : [20.5937, 78.9629]}
                zoom={selectedRegion ? 5 : 13}
                style={{ height: '400px', width: '100%' }}
            >
                <TileLayer
                    //TileLayer uses the OpenStreetMap (OSM) tile server for rendering the map.
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {selectedRegion && (
                    <Marker position={getCenterForRegion(selectedRegion)}>
                        <Popup>Marker Info</Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
};

export default OSMMap;
