import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import './Header.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);


    // --------- theme --------
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
        // console.log(theme);
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    // console.log(theme);

    const links = <>

        <li><Link className="md:text-lg hover:text-black hover:font-bold hover:bg-cyan-400 text-white font-bold" to="aboutMe" smooth={true} duration={500} offset={-112}>About Me</Link></li>
        <li><Link className="md:text-lg hover:text-black hover:font-bold hover:bg-cyan-400 text-white font-bold" to="skills" smooth={true} duration={500} offset={-120}>Skills</Link></li>
        <li><Link className="md:text-lg hover:text-black hover:font-bold hover:bg-cyan-400 text-white font-bold" to="projects" smooth={true} duration={500} offset={-130}>Projects</Link></li>
        <li><Link className="md:text-lg hover:text-black hover:font-bold hover:bg-cyan-400 text-white font-bold" to="education" smooth={true} duration={500} offset={-130}>Education</Link></li>
        <li><Link className="md:text-lg hover:text-black hover:font-bold hover:bg-cyan-400 text-white font-bold" to="contact" smooth={true} duration={500} offset={-130}>Contact</Link></li>


        {/* theme controller ---------- */}
        <div className="flex items-center">
            <label className="flex cursor-pointer gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>

                <input type="checkbox" onClick={handleToggle}
                    checked={theme == "light" ? false : true}
                    value="synthwave" className="toggle theme-controller" />

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
        </div>
    </>

    return (

        //  --- updated ---
        // <div className="navbar fixed z-10 bg-opacity-35 bg-black text-white w-[px] md:w-full h-28">

        // <div className="navbar fixed z-10 bg-cyan-400 text-black w-[px] md:w-full h-28">
        <div className="navbar fixed z-10 bg-blue-500 text-black w-[px] md:w-full h-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        // className="menu menu-sm dropdown-content bg-black rounded-box  z-[1] mt-3 w-52 p-2 shadow ">
                        className="menu menu-sm dropdown-content bg-blue-600 rounded-box  z-[1] mt-3 w-52 p-2 shadow ">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:flex">
                    {links}
                </ul>
            </div>

            {/* <div className="navbar-end">
                <a className="btn btn-accent hover:bg-blue-700 hover:text-white hover:shadow-cyan-400 md:text-xl mr-3" href="https://drive.google.com/file/d/1_GfY8GSMbZKoy6O8cxrocabRP2_18zrw/view?usp=sharing">
                    Resume
                    <FaDownload />
                </a>
            </div> */}

            <div className="navbar-end">
                <a
                    className="
      btn btn-info bg-blue-500 border-white md:text-xl mr-3
      hover:bg-cyan-400 text-white hover:text-black 
      shadow-lg shadow-black hover:shadow-cyan-300 hover:font-bold
      animate-pulse
    "
                    href="https://drive.google.com/file/d/1zao0m8IOgjcMo0fENxpWzZ0UIySmZ_3M/view?usp=sharing"
                >
                    Resume
                    <FaDownload />
                </a>
            </div>
        </div>

    );
};

export default Header;