import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CountrySpot from '../CountrySpot/CountrySpot';
import { Helmet } from 'react-helmet-async';

const CountrySpots = () => {

    // ------ country -------
    const country = useLoaderData();
    const { countryName } = country;
    console.log(countryName);

    // ------- spots ---------
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('https://tourist-spot-server-rho.vercel.app/spot')
            .then(res => res.json())
            .then(data => setSpots(data));
    }, [])
    // console.log(spots);
    const selectedSpots = spots.filter((spot) => spot.countryName === countryName);
    console.log(selectedSpots);


    return (
        <div>
            <Helmet>
                <title>Tourizzo | Spots of the Country</title>
            </Helmet>
            <h2 className="text-4xl my-3 font-bold text-center text-lime-500">Spots of the Country: {countryName} </h2>

            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"> */}
                <div className="mx-auto grid grid-cols-1 gap-4">
                    {selectedSpots.map((spot) => (
                        <CountrySpot key={spot._id} spot={spot}></CountrySpot>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CountrySpots;