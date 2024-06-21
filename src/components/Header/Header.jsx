import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import './Header.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Tooltip } from 'react-tooltip'
// import ReactTooltip from 'react-tooltip'
// import logo from '../../assets/book1.png'
import logo from '../../assets/book1.png'
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-scroll";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // console.log('user logged out successfully');
                toast.success('User logged out Successfully.')
            })
            .catch(error => console.error(error))
    }

    // --------- theme --------
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])


    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {/* <li><NavLink to="/mapview">Map View</NavLink></li> */}
        {/* <li><NavLink to="/articles">Articles</NavLink></li> */}
        {/* <li><NavLink to="/userProfile">User Profile</NavLink></li> */}
        {/* <li><NavLink to="/updateProfile">Update Profile</NavLink></li> */}
        {/* <li><NavLink to="/register">Register </NavLink></li> */}
        {/* <li><NavLink to="/addSpot">Add Tourists Spot </NavLink></li> */}
        {/* <li><NavLink to="/allSpot">All Tourists Spot </NavLink></li> */}

        {/* <li><NavLink to="/addBook">Add Book </NavLink></li>
        <li><NavLink to="/allBook">All Books </NavLink></li>
        <li><NavLink to="/myList">Borrowed Books </NavLink></li>
        <li><NavLink to="/bookReview">Book Review </NavLink></li> */}
        <li><Link to="aboutMe" smooth = {true} duration={500}>About Me </Link></li>
        <li><Link to="contact" smooth = {true} duration={500}>Contact </Link></li>
        <li><Link to="skill" smooth = {true} duration={500}>Skills </Link></li>
        <li><Link to="projects" smooth = {true} duration={500}>Projects </Link></li>
        <li><Link to="education" smooth = {true} duration={500}>Education </Link></li>
        
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
        // <div className="navbar bg-base-100 w-[px] md:w-full h-28">
        <div className="navbar fixed z-10 bg-opacity-25 bg-black text-white w-[px] md:w-full h-28">
            {/* // <div className="navbar fixed bg-transparent bg-blue-600  opacity-80 w-[px] md:w-full h-28"> */}
            {/* <div className="navbar fixed z-10 bg-opacity-25 max-w-screen-xl bg-black text-white"> */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> */}
                    <ul tabIndex={0} className="menu menu-sm bg-opacity-25 bg-black dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {links}
                    </ul>
                </div>


                <Link to="/" className="flex items-center">
                    {/* <img className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] border-2 border-violet-600 rounded-full mr-2" src={logo} alt="" /> */}
                    <img className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] mr-2" src={logo} alt="" />
                    {/* <span className="text-[15px] md:text-[40px] font-bold text-lime-600">Book Buddy</span> */}
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>



            {/* <div className="md:navbar-end flex justify-end"> */}
            <div className="md:navbar-end">


                {
                    user ? <>
                        {/* <span>{user.email}</span> */}
                        {/* <span>{user.displayName}</span> */}
                        <div>
                            <p className="text-blue-500 font-bold">{user.displayName}</p>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                {/* <button className="btn">Hover me</button> */}
                                <img className="w-[40px] h-[40px]  md:w-[60px] md:h-[60px] border-2 border-blue-600  rounded-full mr-1" src={user.photoURL} alt="" />

                            </div>

                        </div>
                        {/* <a onClick={handleLogOut} className="btn bg-[#59C6D2] text-white md:w-[116px] h-[57px] text-[20px]">Log out</a> */}
                        <a onClick={handleLogOut} className="btn btn-info btn-sm text-white  md:w-[116px] md:h-[57px] md:text-[20px]">Log out</a>
                    </>
                        :
                        <div className="flex md:flex-row gap-2">

                            <Link to="/login">
                                <div className="flex items-center md:gap-2">
                                    {/* <CgProfile className="text-[50px]" /> */}
                                    {/* <span className="btn bg-[#59C6D2] text-white md:w-[116px] md:h-[57px] md:text-[20px]">Log in</span> */}
                                    <span className="btn btn-info btn-sm text-white md:w-[116px] md:h-[57px] md:text-[20px]">Log in</span>
                                </div>
                            </Link>
                            <Link to="/register">
                                <div className="flex items-center md:gap-2">
                                    <span className="btn btn-sm bg-green-300 text-blue-700  md:w-[116px] md:h-[57px] md:text-[20px]">Register</span>
                                </div>
                            </Link>
                        </div>
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;