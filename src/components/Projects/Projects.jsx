import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="section projects-section mx-4 md:mx-10 lg:mx-14 mb-20" id="projects">
            {/* <div className="section projects-section max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto mb-20" id="projects"> */}
            <Fade>
                <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px] text-cyan-400 font-bold mb-10"> Projects </h2>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Zoom>
                    <div className="skill-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-2">Library Management System (Full Stack)</h4>
                        <p className="mb-2"><strong>Live-link:</strong> <a href="https://library-management-f105d.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">library-management-f105d.web.app</a></p>
                        <p className="mb-2"><strong>Client-side:</strong> <a href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-Rakesh01999" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Features:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Book Management (CRUD)</li>
                            <li>Detailed Book Information</li>
                            <li>Token Authentication</li>
                        </ul>
                        <p className="mb-2"><strong>Technology:</strong></p>
                        <p>Front-end: React.js, HTML, CSS, JavaScript, Axios, Tailwind CSS, Firebase</p>
                        <p>Back-end: Node.js, Express.js, MongoDB, JWT</p>
                        <div className="text-center flex justify-center space-x-4 mt-4">
                            <a href="https://library-management-f105d.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaExternalLinkAlt className="text-2xl" />
                            </a>
                            <a href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-Rakesh01999" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </Zoom>

                <Zoom>
                    <div className="skill-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-2">Tourism Spot Management (Full Stack)</h4>
                        <p className="mb-2"><strong>Live-link:</strong> <a href="https://real-estate-d06a5.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">real-estate-d06a5.web.app</a></p>
                        <p className="mb-2"><strong>Client-side:</strong> <a href="https://github.com/programming-hero-web-course-4/B9A10-client-side-Rakesh01999" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Features:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Add, update place (CRUD)</li>
                            <li>Detailed tourism place Info</li>
                            <li>Applied sort according to cost</li>
                        </ul>
                        <p className="mb-2"><strong>Technology:</strong></p>
                        <p>Front-end: React.js, HTML, CSS, JavaScript, Tailwind CSS, Firebase</p>
                        <p>Back-end: Node.js, Express.js, MongoDB</p>
                        <div className="text-center flex justify-center space-x-4 mt-4">
                            <a href="https://real-estate-d06a5.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaExternalLinkAlt className="text-2xl" />
                            </a>
                            <a href="https://github.com/programming-hero-web-course-4/B9A10-client-side-Rakesh01999" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </Zoom>

                <Zoom>
                    <div className="skill-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-2">Restaurant Management (React)</h4>
                        <p className="mb-2"><strong>Live-link:</strong> <a href="https://react-spa-assignment-7.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">react-spa-assignment-7.netlify.app</a></p>
                        <p className="mb-2"><strong>GitHub:</strong> <a href="https://github.com/programming-hero-web-course1/b9a7-chefs-table-Rakesh01999" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Features:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Food adding</li>
                            <li>Pending order display</li>
                            <li>Calculating the calorie</li>
                        </ul>
                        <p className="mb-2"><strong>Technology:</strong></p>
                        <p>Front-end: React.js, HTML, CSS, JavaScript, Tailwind CSS</p>
                        <div className="text-center flex justify-center space-x-4 mt-4">
                            <a href="https://react-spa-assignment-7.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaExternalLinkAlt className="text-2xl" />
                            </a>
                            <a href="https://github.com/programming-hero-web-course1/b9a7-chefs-table-Rakesh01999" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Projects;
