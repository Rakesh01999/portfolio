import React, { useRef } from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Roll, Rotate } from 'react-awesome-reveal';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ilxfcck', 'template_cn975wt', form.current, 'WTyxAi03GNl3_3AdS')
            .then(
                (result) => {
                    console.log('result', result);
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
            <h2 className="hover:text-cyan-400 text-xl text-center md:text-[40px] text-blue-500 font-bold mb-10">Contact</h2>
            <div className="flex justify-center items-center space-x-2 md:space-x-6 mb-20">

                <Roll>
                    <a href="mailto:rbiswas01999@gmail.com" target="_blank" rel="noopener noreferrer" className="
      btn btn-info bg-blue-600 md:text-xl mr-3
      hover:bg-cyan-400 text-white hover:text-black
      shadow-lg shadow-black rounded-full
      animate-pulse hover:shadow-cyan-400
    ">
                        <FaEnvelope className='text-xl md:text-2xl lg:text-3xl' />
                    </a>
                </Roll>

                <Roll>
                    <a href="https://www.facebook.com/rakeshbiswas.biswas.9843/" target="_blank" rel="noopener noreferrer"
                        className="
      btn btn-info bg-blue-600 md:text-xl mr-3
      hover:bg-cyan-400 text-white hover:text-black
      shadow-lg shadow-black rounded-full
      animate-pulse hover:shadow-cyan-400
    ">
                        <FaFacebook className='text-xl md:text-2xl lg:text-3xl' />
                    </a>
                </Roll>

                <Roll>
                    <a className="
btn btn-info bg-blue-600 md:text-xl mr-3
      hover:bg-cyan-400 text-white hover:text-black
      shadow-lg shadow-black rounded-full
      animate-pulse hover:shadow-cyan-400
    "
                        href="https://www.linkedin.com/in/rakeshbiswas0199/" target="_blank" rel="noopener noreferrer"
                    >
                        <FaLinkedin className='text-xl md:text-2xl lg:text-3xl' />
                    </a>
                </Roll>

                <Roll>
                    <a className="
btn btn-info bg-blue-600 md:text-xl mr-3
      hover:bg-cyan-400 text-white hover:text-black
      shadow-lg shadow-black rounded-full
      animate-pulse hover:shadow-cyan-400
    " href="https://github.com/Rakesh01999" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='text-xl md:text-2xl lg:text-3xl' />
                    </a>
                </Roll>
            </div>
            <div className="flex justify-center mb-20">
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 hover:shadow-cyan-400">
                    <h2 className="hover:text-cyan-400 text-xl text-center md:text-[30px] text-blue-500 font-bold mb-10">Send me message</h2>

                    <div className="card-body">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-[15px] md:text-[22px]">Name</span>
                                </label>
                                <input type="text" name="from_name" placeholder="Name" required className="input input-bordered border-blue-400" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-[15px] md:text-[22px]">Email</span>
                                </label>
                                <input type="email" name="from_email" placeholder="Email" required className="input input-bordered border-blue-400" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-[15px] md:text-[22px]">Message</span>
                                </label>
                                <textarea name="message" placeholder="Your message" required className="textarea textarea-bordered border-blue-400" />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="hover:bg-cyan-400 hover:text-black btn bg-blue-500 font-bold text-[15px] md:text-[20px] text-white">
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
