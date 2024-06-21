import React from 'react';
import { Link } from 'react-router-dom';
import banner5 from '../../../public/images/bnp5.png'

import Slider from '../Slider/Slider';
import { FaAnglesRight } from "react-icons/fa6";
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowRightLong } from "react-icons/fa6";
import photo from '../../assets/rk.png'
import { Element } from 'react-scroll';

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

            {/* <div className='hero max-w-[370px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10 bg-no-repeat' style={{ backgroundImage: 'url(https://i.postimg.cc/5077FVWM/rafael-m-CTNHIGI2-Wc-U-unsplash.jpg)' }}> */}
            <div className='hero max-w-[490px]  md:max-w-[540px] lg:max-w-[1540px] mx-auto  rounded-3xl mb-10 bg-no-repeat' style={{ backgroundImage: 'url(https://i.postimg.cc/5077FVWM/rafael-m-CTNHIGI2-Wc-U-unsplash.jpg)' }}>

                <div className='hero-overlay bg-opacity-70 rounded-3xl flex flex-col md:flex-row items-center lg:p-32 md:px-8 px-4 py-8 md:py-2'>
                    <div className='rounded-3xl w-full md:w-[70%]'>

                        {/* <div className='text-xl md:text-3xl lg:text-3xl font-bold'> */}
                        <div className=''>
                            <h1 class="animate__animated animate__fadeInLeft">
                                <span className='text-[40px] md:text-4xl lg:text-6xl font-bold text-white'>
                                    Hi ! I am Rakesh Biswas
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

                    <div className=' md:rounded-full mt-4 md:w-[30%] md:ml-[50px] lg:ml-32'>
                        <h1 class="animate__animated animate__zoomIn">
                            {/* <Link to="/allBook">
                                <button className='btn btn-outline btn-accent md:btn-lg '>
                                    <div className='flex gap-2 items-center'>
                                        <p>Explore</p> <FaArrowRightLong />
                                    </div>
                                </button>
                            </Link> */}
                            <div className='w-44 h-48 lg:w-52 border border-cyan-400 rounded-full'>
                                <img className='w-60 h-48 rounded-full' src={photo} alt="Profile Photo" />
                            </div>
                        </h1>
                    </div>
                </div>


            </div>


            {/* Slider Section */}
            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-10  rounded-3xl mb-10'>
                <div className='d:text-3xl md:font-bold text-center text-blue-600 mb-4 flex flex-row items-center justify-center gap-2'>
                    <h3 className='text-center'></h3>
                    <div>
                        {/* <FaAnglesRight /> */}
                        Slider
                    </div>
                </div>
                <Slider />
            </div>


            {/* About Me Section */}
            <Element name="aboutMe">
                {/* <p>Hello</p> */}
                <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-10  rounded-3xl mb-10'>
                    <h3 className='text-center mb-5 font-bold text-xl'>
                        About Me
                    </h3>
                    <div className='text-center'>
                        <p>
                            Passionate about coding, problem-solving, and creating innovative web solutions.
                        </p>
                        <p>
                            I value teamwork, collaboration, and continuous learning. Excited to work on impactful projects, learn from experts, and contribute to technological advancements. Let's collaborate and bring ideas to life through technology!
                        </p>
                    </div>
                </div>
            </Element>



        </div>
    );
};

export default Banner;
