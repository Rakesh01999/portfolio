import React from 'react';
import { FaGithub, FaEnvelope, FaFacebook } from 'react-icons/fa';
import logo from '../../assets/book1.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-700 text-neutral-content">
                <div className="container mx-auto flex flex-col items-center">
                    <nav className="flex flex-col items-center gap-4">
                        <a className="text-xl md:text-2xl text-cyan-300 text-center">Get in Touch</a>
                        <div className="flex flex-col items-center gap-4">
                            <a href="https://github.com/Rakesh01999" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center">
                                <FaGithub className="mr-2" /> GitHub
                            </a>
                            <a href="mailto:rbiswas01999@gmail.com" className="link link-hover flex items-center">
                                <FaEnvelope className="mr-2" /> Gmail
                            </a>
                            <a href="https://www.facebook.com/rakeshbiswas.biswas.9843/" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center">
                                <FaFacebook className="mr-2" /> Facebook
                            </a>
                        </div>
                    </nav>
                    <nav className="text-cyan-300 mt-6 text-center">
                        <p>Copyright © 2024 <span className='text-cyan-300'>Rakesh Biswas</span> - All rights reserved</p>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;