import React from 'react';
import { FaRegFaceGrinWide } from 'react-icons/fa6';
import { GiFeather } from 'react-icons/gi';
import { TfiWrite } from 'react-icons/tfi';
import { Typewriter } from 'react-simple-typewriter';

const Feedback = () => {
    return (
        <div>
            <div className='my-10'>
                {/* <p className='text-center font-bold'>Articles</p> */}

                <div data-aos="zoom-in" className='flex flex-col items-center gap-6'>
                    <h1 className='text-2xl md:text-5xl font-bold font-serif italic hover:text-cyan-500 text-blue-600 text-center  w-[200px]'>Author Spotlight</h1>
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
                            words={[' Notable authors or upcoming author events !!!']}
                        />
                    </p>
                </div>

                {/* <div className='md:w-[1800px] grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto my-10'> */}
                {/* <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-opacity-10 rounded-3xl flex flex-col items-center mb-10'> */}
                <div className='max-w-[370px] md:max-w-[500px] lg:max-w-[1540px]  md:mx-auto px-4 md:px-8 py-8 md:py-12 bg-opacity-10 rounded-3xl flex flex-col items-center gap-6 mb-10'>

                    <div data-aos="fade-up" className="bg-sky-200 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-bold font-serif italic mb-2 flex items-center gap-3"> <GiFeather className='text-3xl' /> J.K. Rowling </h2>

                        <p className="text-xl ">
                            <span className='font-semibold'>Notable Works:</span>  Harry Potter series, Cormoran Strike series
                        </p>
                        <p className="text-xl ">
                            <span className='font-semibold'>Upcoming Event:</span> Virtual book reading and Q&A session on her latest novel "The Christmas Pig"
                        </p>

                    </div>
                    <div data-aos="fade-down" className="bg-sky-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-bold font-serif italic mb-2 flex items-center gap-3"><GiFeather className='text-3xl' /> Stephen King </h2>
                        <p className="text-xl ">
                            <span className='font-semibold'>Notable Works:</span>   "The Shining," "It," "The Dark Tower" series
                        </p>
                        <p className="text-xl ">
                            <span className='font-semibold'>Upcoming Event:</span> Book signing tour for his latest thriller "Billy Summers"
                        </p>
                    </div>
                    <div data-aos="fade-right" className="bg-sky-200 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-bold font-serif italic mb-2 flex items-center gap-3"> <GiFeather className='text-3xl' />
                        Chimamanda Ngozi Adichie
                        </h2>
                        <p className="text-xl ">
                            <span className='font-semibold'>Notable Works:</span>   "Half of a Yellow Sun," "Americanah," "We Should All Be Feminists"
                        </p>
                        <p className="text-xl ">
                            <span className='font-semibold'>Upcoming Event:</span> Virtual author talk discussing her latest novel "Notes on Grief"
                        </p>
                    </div>
                    <div data-aos="fade-left" className="bg-sky-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-bold font-serif italic mb-2 flex items-center gap-3"> <GiFeather className='text-3xl' />
                        Margaret Atwood
                        </h2>
                        <p className="text-xl ">
                            <span className='font-semibold'>Notable Works:</span>   "The Handmaid's Tale," "The Testaments," "Alias Grace"
                        </p>
                        <p className="text-xl ">
                            <span className='font-semibold'>Upcoming Event:</span>  Panel discussion on climate fiction and activism in conjunction with the release of her new eco-dystopian novel "Burning Questions"
                        </p>
                    </div>
                    <div data-aos="fade-up" className="bg-sky-200 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-bold font-serif italic mb-2 flex items-center gap-3"> <GiFeather className='text-3xl' />
                        Haruki Murakami
                        </h2>
                        <p className="text-xl ">
                            <span className='font-semibold'>Notable Works:</span>   "Norwegian Wood," "Kafka on the Shore," "1Q84"
                        </p>
                        <p className="text-xl ">
                            <span className='font-semibold'>Upcoming Event:</span>  Exclusive interview and book signing for the English translation of his latest novel "First Person Singular"
                        </p>
                    </div>
                    <div data-aos="fade-down" className="bg-sky-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-bold font-serif italic mb-2 flex items-center gap-3"> <GiFeather className='text-3xl' />
                        Toni Morrison
                        </h2>
                        <p className="text-xl ">
                            <span className='font-semibold'>Notable Works:</span>  "Beloved," "Song of Solomon," "The Bluest Eye"
                        </p>
                        <p className="text-xl ">
                            <span className='font-semibold'>Upcoming Event:</span> Virtual tribute event commemorating her legacy and discussing the impact of her novels on literature and society
                        </p>
                    </div>
                    <div data-aos="fade-right" className="bg-sky-200 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-bold font-serif italic mb-2 flex items-center gap-3"> <GiFeather className='text-3xl' />
                        Neil Gaiman
                        </h2>
                        <p className="text-xl ">
                            <span className='font-semibold'>Notable Works:</span>  "American Gods," "Sandman" series, "Coraline"
                        </p>
                        <p className="text-xl ">
                            <span className='font-semibold'>Upcoming Event:</span>  Live reading and discussion of his latest graphic novel "The Sandman: Act II"
                        </p>
                    </div>
                    <div data-aos="fade-left" className="bg-sky-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-bold font-serif italic mb-2 flex items-center gap-3"> <GiFeather className='text-3xl' />
                        Celeste Ng
                        </h2>
                        <p className="text-xl ">
                            <span className='font-semibold'>Notable Works:</span>  "Little Fires Everywhere," "Everything I Never Told You"
                        </p>
                        <p className="text-xl ">
                            <span className='font-semibold'>Upcoming Event:</span> Author appearance and book signing for her upcoming novel "The Shape of Thunder"
                        </p>
                    </div>
                    <div data-aos="fade-up" className="bg-sky-200 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-xl font-bold font-serif italic mb-2 flex items-center gap-3"> <GiFeather className='text-3xl' /> 
                        Ta-Nehisi Coates
                        </h2>
                        <p className="text-xl ">
                            <span className='font-semibold'>Notable Works:</span>   "Between the World and Me," "The Water Dancer," "Black Panther" comics
                        </p>
                        <p className="text-xl ">
                        <span className='font-semibold'>Upcoming Event:</span>  Panel discussion on social justice and activism in literature, featuring insights from his latest book "We Were Eight Years in Power"
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Feedback;