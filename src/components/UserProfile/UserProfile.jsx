import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";

// ---------ctpt ----------------
import React, { useState, useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext'; 
// import { useHistory } from 'react-router-dom';


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.displayName);

    return (
        <div>
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <div className="text-center ">
                    <div className="text-xl md:text-5xl font-bold text-violet-600 my-3">
                        <h1 class="animate__animated animate__fadeInDown">User Profile</h1>
                    </div>
                </div>
            {/* ------- user profile ---------- */}
            <div>
                {/* <h3 className='text-2xl md:text-3xl text-center font-bold text-violet-600'>Last Updated Profile</h3> */}

                {/* <div className='w-[370px] h-[400px] md:h-[554px] md:w-[1540px] rounded-3xl mx-auto bg-[#1313130D] p-10 md:p-20 flex flex-col items-center my-10'> */}
                <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-violet-100 rounded-3xl flex flex-col items-center mb-10'>
                    <div className="">
                        <div className="flex md:flex-row gap-5">
                            <div className="space-y-10">
                                <p className="md:text-2xl font-bold">Name: </p>
                                <p className="md:text-2xl font-bold">Email: </p>
                                <p className="md:text-2xl font-bold">Photo : </p>
                            </div>
                            <div className="space-y-10 ">
                                <p className="md:text-2xl">{user.displayName}</p>
                                {/* <p className="text-2xl">{currentUser.displayName}</p> */}
                                <p className="md:text-2xl">{user.email}</p>
                                {/* <p className="text-2xl">{currentUser.email}</p> */}
                                <img className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] border-4 border-violet-600 rounded-2xl my-5 " src={user.photoURL} alt="" />
                                {/* <img className="md:w-[300px] md:h-[300px] rounded-2xl my-5 " src={currentUser.photoURL} alt="" /> */}
                            </div>
                            <div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>



        </div>
    );
};

export default UserProfile ;
