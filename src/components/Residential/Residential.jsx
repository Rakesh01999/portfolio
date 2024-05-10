import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPricetags } from "react-icons/io5";
import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import { BiSolidArea } from "react-icons/bi";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { FaMap } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";

const Residential = ({ spot }) => {
    // const { id, estate_title, image, area, location, price, status } = residential;

    const { spotName, photo, shortDescription, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, name, email } = spot;

    return (
        <div className=" my-10 mx-auto">
            {/* <div className="max-w-full bg-opacity-10 rounded-3xl shadow-xl flex flex-col items-center mb-10"> */}

            <Zoom>
                <div className="max-w-full bg-lime-200 rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                    <figure className="md:px-10 mt-10">
                        <img src={photo} alt="house" className="  rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2>
                        <div className="flex gap-2 items-center text-xl text-green-800 md:text-2xl">
                            {/* <IoPricetags className="text-green-200" /> */}
                            <FaMap className="" />
                            <p>{countryName}</p>
                        </div>
                        <div className="border-b-2 my-4"></div>
                        <div className="flex flex-col gap-4 hover:text-blue-700">
                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                <FaLocationDot />
                                <p>{location}</p>
                            </div>
                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                {/* <BiSolidArea /> */}
                                {/* <p>{seasonality}</p> */}
                            </div>
                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                <FaRegCalendarDays  />
                                <p><span className="font-bold">Travel Time :</span> {travelTime}</p>
                            </div>
                            <div className="flex items-center gap-2 text-lg md:text-xl">
                                {/* <GrStatusCriticalSmall /> */}
                                <IoPricetags />
                                <p><span className="font-bold">Average Cost :</span> {averageCost}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/viewDetails/${spot._id}`}>
                        <div className="text-center mb-2">
                            <button className="btn btn-outline btn-info md:w-[200px] rounded-full md:text-lg text-white mb-4">
                                View Details
                            </button>
                        </div>
                    </Link>
                </div>
            </Zoom>
        </div>
    );
};

export default Residential;
