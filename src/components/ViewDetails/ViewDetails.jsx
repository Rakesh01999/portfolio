import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {

    const spot = useLoaderData();
    const { spotName, photo, shortDescription, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, name, email } = spot;
    
    return (
        <div>
            <Helmet>
                <title>Tourizzo | Spot Details</title>
            </Helmet>
            <h2 className="text-4xl my-3 font-bold text-center text-lime-500">Details </h2>

            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-lime-100 rounded-3xl flex flex-col items-center mb-10'>

                <div className="px-4">
                    <img className="md:w-full md:h-full rounded-2xl mt-7 mx-auto" src={photo} alt="" />
                </div>
                <div className="w-full p-6 text-xl md:text-[25px] mt-28 ">
                    <h2 className="text-2xl md:text-[40px] font-bold">{spotName}</h2>
                    <p className="text-[25px] mt-4"><span className='font-bold'>Country:</span>  {countryName}</p>
                    <div className="border-b-2 my-3"></div>
                    <p className="my-6"><span className='font-bold'>Locatoin: </span>{location}</p>
                    <div className="border-b-2 my-3"></div>
                    <p> <span className="font-bold">Total Visitors Per Year : </span> {totalVisitorsPerYear} people</p>
                    <p className='my-5'> <span className="font-bold">Details :</span> {shortDescription}</p>
                    {/* <div className="flex flex-col  gap-7 my-4">
                        <p className="font-bold">Facilities:</p>
                        {residential.facilities.map((facility, index) => (
                            <p key={index} className="bg-[#E6E6FA] md:w-[300px] rounded-2xl text-violet-600 text-center"># {facility}</p>
                        ))}
                    </div> */}
                    <div className="border-b-2 my-3"></div>
                    <div className=" flex gap-4">
                        <div className='font-bold'>
                            <p> AverageCost:</p>
                            <p className='my-3'> TravelTime:</p>
                            <p>Seasonality:</p>
                        </div>
                        <div>
                            <p className="text-[] ">{averageCost}</p>
                            <p className="text-[] my-3">{travelTime}</p>
                            <p className="text-[] ">{seasonality}</p>
                        </div>
                    </div>
                    <div className="border-b-2 border-green-500 my-3"></div>
                    <div>
                        <h2 className="text-center font-bold"> Added By User</h2>
                    </div>
                    <div className=" flex gap-4">
                        <div className='font-bold'>
                            <p> Name :</p>
                            <p className='my-3'> Email :</p>
                        </div>
                        <div>
                            <p className="text-[] ">{name}</p>
                            <p className="text-[] my-3">{email}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                        {/* <button  className="btn w-[128px] h-[57px] text-[18px]">Read</button>
        <button  className="btn bg-[#50B1C9] text-white w-[128px] h-[57px] text-[18px]">Wishlist</button> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;