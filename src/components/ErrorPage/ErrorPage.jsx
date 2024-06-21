import React from 'react';
import { Link } from 'react-router-dom';
import pageNot from '../../assets/404.gif'

const ErrorPage = () => {
    return (
        // <div className='flex flex-col items-center my-60'>
        <div className='flex flex-col items-center mt-20 mb-60'>
            <p className='text-2xl md:text-6xl font-bold mb-3'> Oops !!! </p>
            <img src={pageNot} alt="gif" />
            <p className='text-2xl md:text-6xl font-bold mb-4'> Not found</p>
            
            <Link className='md:text-4xl' to="/">Go back to <span className='text-3xl md:text-5xl bg-slate-400 italic font-extrabold'> Home </span> </Link>
        </div>
    );
};

export default ErrorPage ;