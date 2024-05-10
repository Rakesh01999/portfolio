import React from 'react';
import { FaRegFaceGrinWide } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';

const Feedback = () => {
    return (
        <div>
            <div className='my-10'>
                {/* <p className='text-center font-bold'>Articles</p> */}

                <div data-aos="zoom-in" className='flex flex-col items-center gap-6'>
                    <h1 className='text-2xl md:text-5xl font-bold font-serif italic hover:text-lime-500 text-purple-600 text-center  w-[200px]'>Reviews</h1>
                    <p className=' md:text-2xl font-semibold text-center'>
                        {/* What Our Clients Say!!! */}
                        <Typewriter
                            loop
                            cursor
                            cursorStyle=''
                            typeSpeed={90}
                            deleteSpeed={90}
                            delaySpeed={1000}
                            // words={['Hello', 'World', 'React']}
                            // words={[' your Desired country cards', ' to find best tourists places']}
                            words={[' What Our Clients & Users Say !!!']}
                        />
                    </p>
                </div>

                {/* <div className='md:w-[1800px] grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto my-10'> */}
                {/* <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-opacity-10 rounded-3xl flex flex-col items-center mb-10'> */}
                <div className='max-w-[370px] md:max-w-[500px] lg:max-w-[1540px]  md:mx-auto px-4 md:px-8 py-8 md:py-12 bg-opacity-10 rounded-3xl flex flex-col items-center gap-6 mb-10'>

                    <div data-aos="fade-up" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-semibold mb-2 flex items-center gap-3"> <FaRegFaceGrinWide /> Emily Johnson</h2>
                        <p className="text-xl ">
                            " Worldwide tours offered by this website are simply outstanding! I embarked on a journey of a lifetime and created unforgettable memories. Can't wait for my next adventure! "
                        </p>
                    </div>
                    <div data-aos="fade-down" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-semibold mb-2 flex items-center gap-3"><FaRegFaceGrinWide /> David Smith</h2>
                        <p className="text-xl ">
                           " The hotel booking feature exceeded my expectations! I found the perfect accommodation that suited my needs and preferences. Highly recommend "
                        </p>
                    </div>
                    <div data-aos="fade-right" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-semibold mb-2 flex items-center gap-3"> <FaRegFaceGrinWide />
                            Shahina Begum
                        </h2>
                        <p className="text-xl ">
                           " Absolutely loved the seamless experience of booking my tickets through this website. The variety of options and user-friendly interface made it a breeze!"
                        </p>
                    </div>
                    <div data-aos="fade-left" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-semibold mb-2 flex items-center gap-3"> <FaRegFaceGrinWide />
                            Asif Hossain
                        </h2>
                        <p className="text-xl ">
                           " Event management services were top-notch! From start to finish, everything was meticulously planned and executed. I couldn't be happier with how my event turned out!"
                        </p>
                    </div>
                    <div data-aos="fade-up" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-semibold mb-2 flex items-center gap-3"> <FaRegFaceGrinWide />
                            James Wilson
                        </h2>
                        <p className="text-xl ">
                           " The travel guides provided invaluable insights and tips for my trip. Their expertise truly enhanced my travel experience and made my journey more enjoyable."
                        </p>
                    </div>
                    <div data-aos="fade-down" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-semibold mb-2 flex items-center gap-3"> <FaRegFaceGrinWide />
                            Ethan Garcia
                        </h2>
                        <p className="text-xl ">
                           " The team behind the scenes ensured that every detail of my event was taken care of, making it a huge success. Thank you  "
                        </p>
                    </div>
                    <div data-aos="fade-right" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-semibold mb-2 flex items-center gap-3"> <FaRegFaceGrinWide />
                            Olivia Anderson
                        </h2>
                        <p className="text-xl ">
                           " I've been using this tourism website for all my travel needs, and it never disappoints! The customer service is exceptional, and I always feel well taken care of."
                        </p>
                    </div>
                    <div data-aos="fade-left" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-semibold mb-2 flex items-center gap-3"> <FaRegFaceGrinWide />
                            Sarah Miller
                        </h2>
                        <p className="text-xl ">
                          " organization of tourizzo website is so user friendly !! "
                        </p>
                    </div>
                    <div data-aos="fade-up" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-semibold mb-2 flex items-center gap-3"> <FaRegFaceGrinWide />
                            Daniel Martinez
                        </h2>
                        <p className="text-xl ">
                            "I had an amazing experience using the tourism management website! It was easy to navigate and helped me find the perfect destination for my vacation."
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Feedback;