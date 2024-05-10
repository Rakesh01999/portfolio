import { useEffect, useState } from "react";
import Residential from "../Residential/Residential";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router-dom";
import { Fade} from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Residentials = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('https://tourist-spot-server-rho.vercel.app/spot')
            .then(res => res.json())
            .then(data => setSpots(data));
    }, [])

    // Define the number of spots you want to display
    const numberOfSpotsToShow = 6;

    // Slice the spots array to get only the desired number of spots
    const displayedSpots = spots.slice(0, numberOfSpotsToShow);

    // console.log(displayedSpots);

    return (
        <div>
            <div>
                <Fade>
                    <div className=" text-center mt-3">
                        <h2 className="hover:text-blue-500 text-xl md:text-[40px] text-lime-500 font-bold">Tourists Spots </h2>
                    </div>
                </Fade>

                <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {
                            displayedSpots.map(spot => <Residential key={spot._id} spot={spot}></Residential>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Residentials;
