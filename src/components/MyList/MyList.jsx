import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import SpotCard from '../SpotCard/SpotCard';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyList = () => {
    const { user } = useContext(AuthContext);
    const trSpots = useLoaderData();

    // Filter spots based on user email
    const userSpots = trSpots.filter((spot) => spot.email === user.email);
    const [spots, setSpots] = useState(userSpots);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://tourist-spot-server-rho.vercel.app/spot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = spots.filter(spot => spot._id !== _id);
                            setSpots(remaining);
                        }
                        // location.reload();
                        // window.location.reload();
                    })
            }
        });

    }

    return (
        <div>
            <Helmet>
                <title>Tourizzo | My List</title>
            </Helmet>
            <h2 className="text-xl md:text-3xl text-center text-lime-600 font-bold my-3">My List</h2>
            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>
                <div className="mx-auto grid grid-cols-1 gap-4">
                    <div className="overflow-x-auto">
                        <table className="table bg-lime-100">
                            {/* head */}
                            <thead>
                                <tr className="font-bold md:text-xl bg-lime-300">
                                    <th>Photo</th>
                                    <th>Spot Name</th>
                                    <th>Country Name</th>
                                    <th>Average Cost</th>
                                    <th><div className='px-12'>Action</div></th>
                                </tr>
                            </thead>
                            <tbody className="md:text-xl">
                                {/* row 1 */}

                                {spots.map((spot) => (
                                    <tr className='hover'
                                        key={spot._id}
                                        spot={spot}>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={spot.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-semibold">{spot.spotName}</div>
                                                    {/* <div className="text-sm opacity-50">{location}</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="">{spot.countryName}</span>
                                        </td>
                                        <td>{spot.averageCost}</td>
                                        <td>
                                            <div className="flex gap-4">
                                                <Link to={`/updateSpot/${spot._id}`}>
                                                    <button className="btn btn-outline  btn-accent">Update</button>
                                                </Link>
                                                <button onClick={() => handleDelete(spot._id)} className="btn btn-outline btn-warning">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyList;
