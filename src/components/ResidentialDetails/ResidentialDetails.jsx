import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';

const ResidentialDetails = () => {
    const residentials = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const residential = residentials.find((residential) => residential.id === idInt);
 
    return (
        <div>
            <Helmet>
                <title>Estate | Details</title>
            </Helmet>
            <div className="text-center text-xl text-violet-600 md:text-[40px] font-bold my-7">
                <h2>Residential Details</h2>
            </div>

            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-violet-300 rounded-3xl flex flex-col items-center mb-10'>

                <div className="px-4">
                    <img className="md:w-full md:h-full rounded-2xl mt-4 mx-4" src={residential.image} alt="" />
                </div>
                <div className="w-full p-6 text-xl md:text-[25px] mt-28 ">
                    <h2 className="text-2xl md:text-[40px] font-bold">{residential.estate_title}</h2>
                    <p className="text-[25px] mt-4"><span className='font-bold'>Id:</span>  {residential.id}</p>
                    <div className="border-b-2 my-3"></div>
                    <p className="my-6"><span className='font-bold'>Status: </span>{residential.status}</p>
                    <div className="border-b-2 my-3"></div>
                    <p> <span className="font-bold">Category: </span> {residential.segment_name}</p>
                    <p className='my-5'> <span className="font-bold">Details :</span> {residential.description}</p>
                    <div className="flex flex-col  gap-7 my-4">
                        <p className="font-bold">Facilities:</p>
                        {residential.facilities.map((facility, index) => (
                            <p key={index} className="bg-[#E6E6FA] md:w-[300px] rounded-2xl text-violet-600 text-center"># {facility}</p>
                        ))}
                    </div>
                    <div className="border-b-2 my-3"></div>
                    <div className=" flex gap-4">
                        <div className='font-bold'>
                            <p> Price:</p>
                            <p className='my-3'> Area:</p>
                            <p>Location:</p>
                        </div>
                        <div>
                            <p className="text-[] ">{residential.price}</p>
                            <p className="text-[] my-3">{residential.area}</p>
                            <p className="text-[] ">{residential.location}</p>
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

export default ResidentialDetails;
