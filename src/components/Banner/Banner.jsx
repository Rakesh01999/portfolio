import React from 'react';
import { Link } from 'react-router-dom';
import banner5 from '../../../public/images/bnp5.png'

import { FaAnglesRight } from "react-icons/fa6";
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowRightLong } from "react-icons/fa6";
import photo from '../../assets/rk.jpg'
import { Element } from 'react-scroll';
import bannerImage from '../../assets/banner.png'

const Banner = () => {

    return (
        <div>

            {/* --------- for spacing----- */}
            <div className='mb-44'>
                <div className='text-[] md:text-3xl md:font-bold text-center text-blue-600 mb-4 flex flex-row items-center justify-center gap-2'>
                    <div>
                        {/* <FaAnglesRight /> */}
                    </div>
                </div>
            </div>

            {/* <div className='hero max-w-[490px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10 bg-no-repeat' style={{ backgroundImage: 'url(https://i.postimg.cc/5077FVWM/rafael-m-CTNHIGI2-Wc-U-unsplash.jpg)' }}> */}
            <div className='hero max-w-[490px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10 bg-no-repeat' style={{ backgroundImage: `url(${bannerImage})` }}>

                <div className='hero-overlay bg-opacity-70 rounded-3xl flex flex-col md:flex-row items-center lg:p-32 md:px-8 px-4 py-8 md:py-2'>
                    <div className='rounded-3xl w-full md:w-[70%]'>

                        {/* <div className='text-xl md:text-3xl lg:text-3xl font-bold'> */}
                        <div className=''>
                            <h1 class="animate__animated animate__fadeInLeft">
                                <span className='text-[40px] md:text-4xl lg:text-6xl font-bold text-white'>
                                    Hi ! I am <span className='text-blue-300 hover:text-cyan-300'>Rakesh Biswas</span>
                                </span>
                            </h1>
                            <p className='text-[20px] md:text-2xl lg:text-4xl  text-white'>
                                Full-Stack Developer | Competitive Programmer | Undergraduate Student
                            </p>
                        </div>
                        <div className='text-[20px] md:text-xl lg:text-2xl text-white font-bold'>

                            {/* <h1 class="animate__animated animate__fadeInLeft">

                                <Typewriter
                                    loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={90}
                                    deleteSpeed={90}
                                    delaySpeed={1000}
                                    // words={['Hello', 'World', 'React']}
                                    // words={[' Tourizzo makes your travel ', ' more convenient', '  and more enjoyable']}
                                    words={[' Learning Is A Lifetime  Journey', ' ', ' ']}
                                />
                            </h1> */}

                        </div>
                    </div>

                    <div className=' md:rounded-full my-4 mr-6 md:w-[30%] md:ml-[50px] lg:ml-32'>
                        <h1 class="animate__animated animate__zoomIn">
                            <div className='w-44 h-48 lg:w-56 lg:h-60 border border-cyan-400 rounded-full'>
                                <img className='w-60 h-48 lg:w-full lg:h-full rounded-full' src={photo} alt="Profile Photo" />
                            </div>
                        </h1>
                    </div>

                    {/* <div className='md:rounded-full my-4 mr-6 md:w-[30%] md:ml-[50px] lg:ml-32'>
                        <h1 className="animate__animated animate__zoomIn">
                            <div
                                className='w-44 h-48 lg:w-56 lg:h-60 border border-cyan-400'
                                style={{ clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)' }}>
                                <img
                                    className='w-60 h-48 lg:w-full lg:h-full'
                                    src={photo}
                                    alt="Profile Photo"
                                    style={{ clipPath: 'inherit' }}
                                />
                            </div>
                        </h1>
                    </div> */}

                </div>


            </div>


            {/* Slider Section */}
            {/* <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-10  rounded-3xl mb-10'>
                <div className='d:text-3xl md:font-bold text-center text-blue-600 mb-4 flex flex-row items-center justify-center gap-2'>
                    <h3 className='text-center'></h3>
                    <div>
                        Slider
                    </div>
                </div>
                <Slider />
            </div> */}





        </div>
    );
};

export default Banner;
