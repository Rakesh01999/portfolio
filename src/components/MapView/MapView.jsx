import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const MapView = () => {
    return (
        <div>
            <Helmet>
                <title>Map | site map</title>
            </Helmet>
            
            <div className='text-3xl text-center text-violet-600 font-bold my-5'>
                <h1 class="animate__animated animate__fadeInDown">Map View</h1>
            </div>
            <div className='text-2xl text-center text-green-500 font-bold my-5'>
                <h1 class="animate__animated animate__fadeInRight">See residential property location in Map </h1>
            </div>

            {/* ------------- Map ---------- */}
            {/* <div className='w-[500px] md:h-[800px]  md:w-[1540px] mx-auto bg-violet-600 rounded-3xl mt-5 mb-10 p-10 md:p-10 '> */}
            <div className='max-w-[370px] max-h-[370px] md:max-h-[600px] md:max-w-[500px] lg:max-w-[1540px] mx-auto md:mx-auto px-4 md:px-8 py-8 md:py-12 bg-violet-400 rounded-3xl flex flex-col items-center gap-6 mb-10'>
                
                <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '700px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[51.5005, -0.09]}>
                        <Popup>
                            Mayfair ,<br /> 45 Park Lane, Mayfair, London W1K 1PN.
                        </Popup>
                    </Marker>
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            Kensington <br /> 18 Kensington Court Gardens, Kensington, London W8
                        </Popup>
                    </Marker>

                    <Marker position={[51.505, -0.008]}>
                        <Popup>
                            Notting Hill . <br /> 38 Elgin Crescent, Notting Hill, London W11 2JY.
                        </Popup>
                    </Marker>
                    <Marker position={[51.5000011, -0.05]}>
                        <Popup>
                            Chelsea. <br /> 10 Royal Avenue, Chelsea, London SW3 4QF.
                        </Popup>
                    </Marker>
                    <Marker position={[51.505, -0.06]}>
                        <Popup>
                            Hampstead , <br /> 20 Frognal Way, Hampstead, London NW3 6XH.
                        </Popup>
                    </Marker>
                    <Marker position={[51.505, -0.068]}>
                        <Popup>
                            Richmond . <br /> 5 Richmond Hill, Richmond, London TW10 6RN.
                        </Popup>
                    </Marker>
                    <Marker position={[51.505, -0.083]}>
                        <Popup>
                            Wandsworth . <br /> 18 Swaffield Road, Wandsworth, London SW18 3AQ.
                        </Popup>
                    </Marker>
                    <Marker position={[51.505, -0.055]}>
                        <Popup>
                            Camden . <br /> 10 Albert Terrace, Camden Town, London NW1 7SN.
                        </Popup>
                    </Marker>
                    <Marker position={[51.505, -0.099]}>
                        <Popup>
                            Islington . <br /> 8 Canonbury Lane, Islington, London N1 2AS.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};
 
export default MapView;