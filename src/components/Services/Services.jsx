import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { BiSolidCalendarEvent } from 'react-icons/bi';
import { FaHotel, FaPhone } from 'react-icons/fa6';
import { FcBusinessman } from "react-icons/fc";
import { IoMan } from 'react-icons/io5';
import { MdOutlineRateReview } from 'react-icons/md';
import { RiPhoneFindFill } from 'react-icons/ri';
import { SiNginxproxymanager } from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { Typewriter } from 'react-simple-typewriter';


const Services = () => {
    return (
        <div>

            <Fade>
                <h2 className="hover:text-cyan-300 text-lg text-center md:text-[40px] text-blue-500 font-bold mb-6"> Services </h2>
                <h2 className="text-xl text-center md:text-[30px] text-cyan-400 font-bold mb-10">
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='__'
                        typeSpeed={90}
                        deleteSpeed={90}
                        delaySpeed={1000}
                        // words={['Hello', 'World', 'React']}
                        // words={[' your Desired country cards', ' to find best tourists places']}
                        words={[' Book  Buddy Services']}
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
                                <div className="max-w-full md:h-[700px] bg-cyan-100 rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                                    <figure className="md:px-10 mt-10">
                                        {/* <img src="" alt="house" className="  rounded-xl" /> */}
                                        <RiPhoneFindFill className='text-4xl md:text-6xl lg:text-9xl text-blue-600' />
                                    </figure>
                                    <div className="card-body">
                                        {/* <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2> */}
                                        <div className="flex gap-2 items-center text-xl text-blue-600 md:text-2xl">
                                            {/* <IoPricetags className="text-green-200" /> */}
                                            {/* <FaFlag className="text-center" /> */}
                                            <p className='text-center font-bold'>Book Catagory and Findings</p>
                                        </div>
                                        <div className="border-b-2 my-4"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                                {/* <MdDescription className='text-[80px]' /> */}
                                                <p>
                                                    Allow users to find books other resources in the online library’s collection.
                                                    Also Provide detailed information about each item, including availability status.
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
                        {/* ------------- card 2 -------------- */}
                        <div className="hover:shadow-2xl hover:rounded-3xl text-center mb-2">
                            {/* <button className="btn btn-outline btn-info md:w-[200px] rounded-full md:text-lg text-white mb-4"> */}
                            <div className="hover:shadow-2xl hover:rounded-3xl">
                                <div className="max-w-full md:h-[700px] bg-cyan-100 rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                                    <figure className="md:px-10 mt-10">
                                        {/* <img src="" alt="house" className="  rounded-xl" /> */}
                                        <TfiHeadphoneAlt className='text-4xl md:text-6xl lg:text-9xl text-blue-600' />
                                    </figure>
                                    <div className="card-body">
                                        {/* <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2> */}
                                        <div className="flex gap-2 items-center text-xl text-blue-600 md:text-2xl">
                                            {/* <IoPricetags className="text-green-200" /> */}
                                            {/* <FaFlag className="text-center" /> */}
                                            <p className='text-center font-bold'>Guides</p>
                                        </div>
                                        <div className="border-b-2 my-4"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                                {/* <MdDescription className='text-[80px]' /> */}
                                                <p>
                                                    Meet our Librarian for any serious issue. Feel free to ask any questions . Also you are requested to give us your feedback .
                                                </p>
                                            </div>
                                            <div className='flex items-center mx-auto mt-4'>
                                                <p className='flex text-xl gap-6 items-center'>
                                                    <FaPhone className='text-3xl text-blue-500' />
                                                    880 1879182341
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
                        {/* ------------- card 3 -------------- */}
                        <div className="hover:shadow-2xl hover:rounded-3xl text-center mb-2">
                            {/* <button className="btn btn-outline btn-info md:w-[200px] rounded-full md:text-lg text-white mb-4"> */}
                            <div className="hover:shadow-2xl hover:rounded-3xl">
                                <div className="max-w-full md:h-[700px] bg-cyan-100 rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                                    <figure className="md:px-10 mt-10">
                                        {/* <img src="" alt="house" className="  rounded-xl" /> */}
                                        <BiSolidCalendarEvent className='text-4xl md:text-6xl lg:text-9xl text-blue-600' />
                                    </figure>
                                    <div className="card-body">
                                        {/* <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2> */}
                                        <div className="flex gap-2 items-center text-xl text-blue-600 md:text-2xl">
                                            {/* <IoPricetags className="text-green-200" /> */}
                                            {/* <FaFlag className="text-center" /> */}
                                            <p className='text-center font-bold'>Event Management</p>
                                        </div>
                                        <div className="border-b-2 my-4"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                                {/* <MdDescription className='text-[80px]' /> */}
                                                <p>
                                                    Promote library events, workshops, and programs.
                                                    Maintain an events calendar for users to stay informed.
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
                                <div className="max-w-full md:h-[700px] bg-cyan-100 rounded-3xl shadow-2xl flex flex-col items-center mb-10">
                                    <figure className="md:px-10 mt-10">
                                        {/* <img src="" alt="house" className="  rounded-xl" /> */}
                                        <MdOutlineRateReview className='text-4xl md:text-6xl lg:text-9xl text-blue-600' />
                                    </figure>
                                    <div className="card-body">
                                        {/* <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2> */}
                                        <div className="flex gap-2 items-center text-xl text-blue-600 md:text-2xl">
                                            {/* <IoPricetags className="text-green-200" /> */}
                                            {/* <FaFlag className="text-center" /> */}
                                            <p className='text-center font-bold'>Book Recommendations and Reviews</p>
                                        </div>
                                        <div className="border-b-2 my-4"></div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-2 items-center text-lg md:text-xl">
                                                {/* <MdDescription className='text-[80px]' /> */}
                                                <p>
                                                    Enable users to borrow books online by checking availability, reserving books that are currently checked out, and scheduling pick-up or delivery of reserved items.
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