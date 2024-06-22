import React from 'react';
import { Element } from 'react-scroll';

const AboutMe = () => {
    return (
        <div>
            {/* About Me Section */}
            <Element name="aboutMe">
                {/* <p>Hello</p> */}
                <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-10  rounded-3xl mb-10'>
                <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px] text-cyan-400 font-bold mb-10"> About Me</h2>
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

export default AboutMe;