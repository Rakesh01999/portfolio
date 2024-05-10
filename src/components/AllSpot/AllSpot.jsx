

import { Link, useLoaderData } from "react-router-dom";
import SpotCard from "../SpotCard/SpotCard";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCarSide, FaMap } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const AllSpot = () => {

    const spots = useLoaderData();
    const [displaySpots, setDisplaySpots] = useState(spots);

    const handleSpotFilter = filter => {
        let filteredSpots = [...spots];
        if (filter === 'averageCost') {
            filteredSpots.sort((a, b) => b.averageCost - a.averageCost);
        }
        else {
            // Default: 'all' or invalid filter
            filteredSpots = [...spots];
        }
        setDisplaySpots(filteredSpots);
    }

    return (
        <div>
            <Helmet>
                <title>Tourizzo | All Tourists Spot</title>
            </Helmet>
            <Zoom>
                <h2 className="text-2xl text-center text-lime-600 font-bold my-3">All Tourists Spot</h2>
                {/* <h2 className="text-2xl text-center text-lime-600 font-bold my-3">All  Spot: {spots.length}</h2> */}

            </Zoom>

            {/* dropdown */}
            <div className='text-center'>
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] md:w-[145px] md:h-[52px] text-white md:text-[18px] my-4">Sort By <RiArrowDropDownLine className="text-2xl md:text-4xl" />  </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {/* <li><a onClick={handleBookFilter('all')}>all</a></li>
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publishing Year</a></li> */}

                        <li><a onClick={() => handleSpotFilter('averageCost')}>Average Cost</a></li>

                    </ul>
                </details>
            </div>


            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"> */}
                <div className="mx-auto grid grid-cols-1 gap-4">
                    {
                        displaySpots.map((spot) => (
                            <SpotCard key={spot._id} spot={spot}></SpotCard>
                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default AllSpot;
