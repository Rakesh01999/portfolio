import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAuth, updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Providers/AuthProvider';

const UpdateProfile = () => {
    const { currentUser } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const auth = getAuth();


    const { user } = useContext(AuthContext);
    // console.log(auth.currentUser);
    console.log(user) ;

    useEffect(() => {
        if (auth.currentUser) {
            setDisplayName(auth.currentUser.displayName || '');
            setPhotoURL(auth.currentUser.photoURL || '');
        }
    }, [currentUser]);

    const handleSaveChanges = async () => {
        if (!displayName || !photoURL) {
            alert('Name and Photo URL are required.');
            return;
        }
        try {
            await updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: photoURL
            });
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
        location.reload()
    }



    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>



            {/* ----------Update Profile--------- */}
            <div className="text-center ">
                    <div className="text-xl md:text-5xl font-bold text-violet-600 my-3">
                        <h1 class="animate__animated animate__fadeInDown">Update Profile</h1>
                    </div>
                </div>
            <h3 className='text-xl md:text-3xl text-center font-semibold mt-8'>You can only change your <span className='text-violet-500 font-bold'>Name</span> and <span className='text-violet-500 font-bold'>Photo</span> here</h3>
            {/* <div className='w-[400px] h-[500px] md:h-[554px] md:w-[1540px] rounded-3xl mx-auto bg-[#1313130D] p-10 md:p-20 flex flex-col items-center my-10'> */}
            {/* <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-opacity-10 rounded-3xl flex flex-col items-center mb-10'> */}
            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-violet-100 rounded-3xl flex flex-col items-center mb-10'>
                {/* <div className="hero min-h-screen bg-base-200"> */}
                <div>
                    <div className="hero-content flex-col">
                        <div className="card flex-shrink-0 w-full md:w-[700px] max-w-md shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold md:text-xl">Name</span>
                                        </label>
                                        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required className="input input-bordered" />
                                        {/* <input type="text" value={user.displayName} onChange={(e) => setDisplayName(e.target.value)} required className="input input-bordered" /> */}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold md:text-xl">Email</span>
                                        </label>
                                        <input type="text" value={user.email}  required className="input input-bordered" />
                                        {/* <input type="text" value={user.displayName} onChange={(e) => setDisplayName(e.target.value)} required className="input input-bordered" /> */}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold md:text-xl">Photo URL</span>
                                        </label>
                                        <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} required className="input input-bordered" />
                                        {/* <input type="text" value={user.photoURL} onChange={(e) => setPhotoURL(e.target.value)} required className="input input-bordered" /> */}
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="button" onClick={handleSaveChanges} className="btn btn-primary text-white text-xl">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UpdateProfile;















