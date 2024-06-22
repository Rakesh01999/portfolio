import React from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaDiscord } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="section" id="contact">
            <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px] text-cyan-400 font-bold mb-10"> Contact  </h2>
            <div className="flex justify-center items-center space-x-6 mb-20">
                <a href="mailto:rbiswas01999@gmail.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600">
                    <FaEnvelope />
                </a>
                <a href="https://www.facebook.com/rakeshbiswas.biswas.9843/" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600">
                    <FaFacebook />
                </a>
                <a href="https://github.com/Rakesh01999" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-800">
                    <FaGithub />
                </a>
                {/* <a href="https://discordapp.com/users/yourid" target="_blank" rel="noopener noreferrer" className="text-3xl text-purple-600">
                    <FaDiscord />
                </a> */}
            </div>
        </div>
    );
};

export default Contact;
