import React, { useRef } from 'react';
import { FaEnvelope, FaFacebook, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ilxfcck', 'template_cn975wt', form.current, 'WTyxAi03GNl3_3AdS')
            .then(
                (result) => {
                    console.log('result',result);
                    console.log('SUCCESS!');
                    Swal.fire({
                        // title: "Custom animation with Animate.css",
                        title: "Email sent successfully !",
                        background: '#f0f8ff', // Custom background color
                        color: '#333', // Custom text color
                        confirmButtonColor: '#00BFFF',
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                      });
                    // alert('Email sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send email. Please try again later.');
                }
            );
    };

    return (
        <div className="section" id="contact">
            <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px] text-cyan-400 font-bold mb-10">Contact</h2>
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
            </div>
            <div className="flex justify-center mb-20">
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 hover:shadow-cyan-400">
                <h2 className="hover:text-blue-600 text-xl text-center md:text-[30px] text-cyan-400 font-bold mb-10">Send me message</h2>
            
                    <div className="card-body">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-[15px] md:text-[22px]">Name</span>
                                </label>
                                <input type="text" name="from_name" placeholder="Name" required className="input input-bordered border-cyan-300" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-[15px] md:text-[22px]">Email</span>
                                </label>
                                <input type="email" name="from_email" placeholder="Email" required className="input input-bordered border-cyan-300" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-[15px] md:text-[22px]">Message</span>
                                </label>
                                <textarea name="message" placeholder="Your message" required className="textarea textarea-bordered border-cyan-300" />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="hover:bg-blue-600 btn bg-cyan-400 font-bold text-[15px] md:text-[20px] text-white">
                                    Send Email
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
