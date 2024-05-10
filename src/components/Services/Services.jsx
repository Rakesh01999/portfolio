import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaHotel, FaPhone } from 'react-icons/fa6';
import { FcBusinessman } from "react-icons/fc";
import { SiNginxproxymanager } from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';
import { Typewriter } from 'react-simple-typewriter';


const Services = () => {
    return (
        <div>

            <Fade>
                <h2 className="hover:text-lime-500 text-lg text-center md:text-[40px] text-blue-500 font-bold mb-6"> Services </h2>
                <h2 className="text-xl text-center md:text-[30px] text-lime-700 font-bold mb-10">
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='__'
                        typeSpeed={90}
                        deleteSpeed={90}
                        delaySpeed={1000}
                        // words={['Hello', 'World', 'React']}
                        // words={[' your Desired country cards', ' to find best tourists places']}
                        words={[' Tours & ', ' Travel Services']}
                    />
                </h2>
            </Fade>

            <div className='max-w-[300px] md:max-w-[500px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <Zoom>
                        {/* ------------- card 1 -------------- */}
                        <div className="hover:shadow-2xl hover:rounded-3xl text-center mb-2">
                            {/* <button className="btn btn-outline btn-info md:w-[200px] rounded-full md:text-lg text-white mb-4"> */}
                            <div className="hover:shadow-2xl hover:rounded-3xl">
                                <div className="max-w-full md:h-[700px] bg-blue-100 rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                                    <figure className="md:px-10 mt-10">
                                        {/* <img src="" alt="house" className="  rounded-xl" /> */}
                                        <FcBusinessman className='text-9xl' />
                                    </figure>
                                    <div className="card-body">
                                        {/* <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2> */}
                                        <div className="flex gap-2 items-center text-xl text-green-700 md:text-2xl">
                                            {/* <IoPricetags className="text-green-200" /> */}
                                            {/* <FaFlag className="text-center" /> */}
                                            <p className='text-center font-bold'>Travel Guides</p>
                                        </div>
                                        <div className="border-b-2 my-4"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                                {/* <MdDescription className='text-[80px]' /> */}
                                                <p>
                                                    Our Travel Guides for expert insights on global destinations. From iconic landmarks to hidden gems, plan your next adventure with our curated recommendations and insider tips.
                                                </p>
                                            </div>
                                            <div className='flex items-center mx-auto mt-4'>
                                                <p className='flex text-xl gap-6 items-center'>
                                                    <FaPhone className='text-3xl text-lime-600' />
                                                    880 1979180341
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Link to={`/viewDetails/${spot._id}`}> */}

                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom>
                        {/* ------------- card 2 -------------- */}
                        <div className="hover:shadow-2xl hover:rounded-3xl text-center mb-2">
                            {/* <button className="btn btn-outline btn-info md:w-[200px] rounded-full md:text-lg text-white mb-4"> */}
                            <div className="hover:shadow-2xl hover:rounded-3xl">
                                <div className="max-w-full md:h-[700px] bg-blue-100 rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                                    <figure className="md:px-10 mt-10">
                                        {/* <img src="" alt="house" className="  rounded-xl" /> */}
                                        <FaHotel className='text-9xl text-lime-600' />
                                    </figure>
                                    <div className="card-body">
                                        {/* <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2> */}
                                        <div className="flex gap-2 items-center text-xl text-green-700 md:text-2xl">
                                            {/* <IoPricetags className="text-green-200" /> */}
                                            {/* <FaFlag className="text-center" /> */}
                                            <p className='text-center font-bold'>Hotel Booking</p>
                                        </div>
                                        <div className="border-b-2 my-4"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                                {/* <MdDescription className='text-[80px]' /> */}
                                                <p>
                                                    Find your perfect accommodation with ease using our hotel booking platform. Discover a variety of options tailored to your preferences.
                                                </p>
                                            </div>
                                            <div className='flex items-start'>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Link to={`/viewDetails/${spot._id}`}> */}

                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom>
                        {/* ------------- card 3 -------------- */}
                        <div className="hover:shadow-2xl hover:rounded-3xl text-center mb-2">
                            {/* <button className="btn btn-outline btn-info md:w-[200px] rounded-full md:text-lg text-white mb-4"> */}
                            <div className="hover:shadow-2xl hover:rounded-3xl">
                                <div className="max-w-full md:h-[700px] bg-blue-100 rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                                    <figure className="md:px-10 mt-10">
                                        {/* <img src="" alt="house" className="  rounded-xl" /> */}
                                        <SiNginxproxymanager className='text-9xl text-lime-600' />
                                    </figure>
                                    <div className="card-body">
                                        {/* <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2> */}
                                        <div className="flex gap-2 items-center text-xl text-green-700 md:text-2xl">
                                            {/* <IoPricetags className="text-green-200" /> */}
                                            {/* <FaFlag className="text-center" /> */}
                                            <p className='text-center font-bold'>Event Management</p>
                                        </div>
                                        <div className="border-b-2 my-4"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                                {/* <MdDescription className='text-[80px]' /> */}
                                                <p>
                                                    Let us handle the details of your next event with our professional event management services. We ensure seamless planning and execution for a memorable event.
                                                </p>
                                            </div>
                                            <div className='flex items-start'>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Link to={`/viewDetails/${spot._id}`}> */}

                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom>
                        {/* ------------- card 4 -------------- */}
                        <div className="hover:shadow-2xl hover:rounded-3xl text-center mb-2">
                            {/* <button className="btn btn-outline btn-info md:w-[200px] rounded-full md:text-lg text-white mb-4"> */}
                            <div className="hover:shadow-2xl hover:rounded-3xl">
                                <div className="max-w-full md:h-[700px] bg-blue-100 rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                                    <figure className="md:px-10 mt-10">
                                        {/* <img src="" alt="house" className="  rounded-xl" /> */}
                                        <TbWorld className='text-9xl text-lime-600' />
                                    </figure>
                                    <div className="card-body">
                                        {/* <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2> */}
                                        <div className="flex gap-2 items-center text-xl text-green-700 md:text-2xl">
                                            {/* <IoPricetags className="text-green-200" /> */}
                                            {/* <FaFlag className="text-center" /> */}
                                            <p className='text-center font-bold'>Worldwide Tours</p>
                                        </div>
                                        <div className="border-b-2 my-4"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                                {/* <MdDescription className='text-[80px]' /> */}
                                                <p>
                                                    Embark on unforgettable journeys around the globe with our curated worldwide tours. Immerse yourself in diverse cultures and enriching experiences .
                                                </p>
                                            </div>
                                            <div className='flex items-start'>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Link to={`/viewDetails/${spot._id}`}> */}

                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
        </div>
    );
};

export default Services;