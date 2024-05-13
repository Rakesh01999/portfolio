import logo from '../../assets/book1.png'

const Footer = () => {
    return (
        <div>
            {/* <div className=' h-[700px] md:h-[554px] md:w-[1540px] mx-auto  p-10 md:p-32 flex flex-col md:flex-row '> */}

            <div>
                {/* <footer className="footer p-10 bg-neutral text-neutral-content"> */}
                <footer className="footer p-10 bg-gray-700 text-neutral-content">

                    <div className="md:container md:mx-auto">
                    </div>
                    <nav>
                        {/* <h2 className="text-xl md:text-3xl text-lime-400">Tourizzo</h2> */}
                        <img className='w-[80px] h-[80px] md:w-[150px] md:h-[150px] mr-2' src={logo} alt="" />
                        {/* <img className='w-16 h-16 md:w-36 md:h-36 mr-2' src={logo} alt="" /> */}
                    </nav>
                    <nav>
                        <h6 className="footer-title text-cyan-300">Book Buddy</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>

                    <nav>
                        <h6 className="footer-title text-cyan-300">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>

                    <nav>
                        <h6 className="footer-title text-cyan-300">Services</h6>
                        {/* <a className="link link-hover">Estate View</a> */}
                        <a className="link link-hover">Library Assistance</a>
                        <a className="link link-hover">Book Review / Rating</a>
                        <a className="link link-hover">Author Highlight</a>
                    </nav>

 
                    {/* <nav className="grid-flow-col md:grid-cols-1 gap-4 md:place-self-center md:justify-self-end"> */}
                    <nav className="grid-col md:flex-col gap-4 md:place-self-center">
                        <a className="footer-title text-cyan-300">Social Media Links</a>
                        <div className="flex">
                            <a className="link link-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </a>
                            <p className="link link-hover">Twitter</p>
                        </div>
                        <div className="flex">
                            <a className="link link-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <p className="link link-hover">Youtube</p>
                        </div>
                        <div className="flex">
                            <a className="link link-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            <p className="link link-hover">Facebook</p>
                        </div>
                    </nav>
                    <nav className="md:place-self-center text-cyan-300">
                        <p>Copyright © 2024 - All right reserved</p>
                    </nav>
                </footer>

            </div>
        </div>
    );
};

export default Footer;