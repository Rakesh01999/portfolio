import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateSpot = () => {

    const spot = useLoaderData();
    const { spotName, photo, shortDescription, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, name, email } = spot;

    const handleUpdateSpot = event => {
        event.preventDefault();

        const form = event.target;

        const spotName = form.spotName.value;
        const photo = form.photo.value;
        const shortDescription = form.shortDescription.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        // const name = form.name.value;
        // const email = form.email.value;

        const updateSpot = { spotName, photo, shortDescription, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, name, email }

        console.log(updateSpot);

        // update data to the server

        fetch(`https://tourist-spot-server-rho.vercel.app/spot/${spot._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourists Spot Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    // location.reload() ;
                }
            })
    }

    
    return (
        <div>
            <Helmet>
                <title>Tourizzo | Update Tourist Spot</title>
            </Helmet>
            <h2 className="text-2xl text-center text-lime-600 font-bold my-3">Update Tourists Spot</h2>

            {/* Update form */}
            <div className="bg-[#F4F3F0] p-4 md:p-8 lg:p-24">
                <h2 className="text-3xl text-center font-extrabold mb-4">Update Form</h2>
                <form onSubmit={handleUpdateSpot} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                    {/* Tourists Spot Name */}
                    <div className="form-control col-span-2 lg:col-span-4">
                        <label className="label">
                            <span className="label-text">Tourists_Spot_Name</span>
                        </label>
                        <input type="text" name="spotName" defaultValue={spotName} placeholder="Tourists_Spot_Name" className="input input-bordered w-full" />
                    </div>
                    {/* Photo URL */}
                    <div className="form-control col-span-2 lg:col-span-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>
                    {/* short description */}
                    <div className="form-control col-span-2 lg:col-span-4">
                        <label className="label">
                            <span className="label-text">Short_Description</span>
                        </label>
                        <input type="text" name="shortDescription" defaultValue={shortDescription} placeholder="Short_Description" className="input input-bordered w-full" />
                    </div>

                    {/* Country Name */}
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Country_Name</span>
                        </label>
                        <input type="text" name="countryName" defaultValue={countryName} placeholder="Country_Name" className="input input-bordered w-full" />
                    </div>
                    {/* Location */}
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" />
                    </div>

                    {/* average_cost */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average_Cost</span>
                        </label>
                        <input type="text" name="averageCost" defaultValue={averageCost} placeholder="Average_Cost" className="input input-bordered w-full" />
                    </div>
                    {/* seasonality */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality" className="input input-bordered w-full" />
                    </div>
                    {/* travel_time */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel_Time</span>
                        </label>
                        <input type="text" name="travelTime" defaultValue={travelTime} placeholder="Travel_Time" className="input input-bordered w-full" />
                    </div>
                    {/* totalVisitorsPerYear */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} placeholder="totalVisitorsPerYear" className="input input-bordered w-full" />
                    </div>

                    {/* User Name */}
                    {/* <div className="form-control ">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="name" placeholder="User Name" className="input input-bordered w-full" />
                    </div> */}
                    {/* User Email */}
                    {/* <div className="form-control ">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="text" name="email" placeholder="User Email" className="input input-bordered w-full" />
                    </div> */}

                    {/* Submit Button */}
                    <div className="form-control col-span-full">
                        <input type="submit" value="Update Spot" className="btn bg-lime-400" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateSpot;