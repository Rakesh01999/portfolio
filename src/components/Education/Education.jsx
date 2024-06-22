import React from 'react';
import { FaSchool, FaUniversity } from 'react-icons/fa';

const Education = () => {
    return (
        <div className="section education-section mx-auto md:mx-10 lg:mx-14  mb-20" id="education">
            <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px] text-cyan-400 font-bold mb-10"> Education </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="education-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                    <FaUniversity ></FaUniversity>
                    <h4 className="text-xl font-bold mb-2">Jashore University of Science and Technology</h4>
                    <p className="mb-2"><strong>Degree:</strong> Bachelor of Science in Computer Science and Engineering</p>
                    <p className="mb-2"><strong>Duration:</strong> January 2022 - Present</p>
                    <p className="mb-2"><strong>Location:</strong> Jashore, Bangladesh</p>
                </div>

                <div className="education-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                    <FaSchool className='' />
                    <h4 className="text-xl font-bold mb-2">Government Brajalal College, Khulna</h4>
                    <p className="mb-2"><strong>Group:</strong> Science</p>
                    <p className="mb-2"><strong>Degree:</strong> Higher Secondary</p>
                    <p className="mb-2"><strong>Duration:</strong> 2017 - 2019</p>
                    <p className="mb-2"><strong>Location:</strong> Khulna, Bangladesh</p>
                </div>

            </div>
        </div>
    );
};

export default Education;
