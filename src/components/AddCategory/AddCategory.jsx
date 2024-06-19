import React from 'react';
import Swal from 'sweetalert2';


const AddCategory = () => {

    const handleAddCategory = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const categoryName = form.categoryName.value;
        
        const category = {  photo, categoryName }

        // console.log(category);

        // send data to the server

        fetch('https://library-server-blue.vercel.app/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Category Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    location.reload();
                }
            })
    }


    return (
        <div>
            <h2 className="text-2xl text-center text-lime-600 font-bold my-3">Add Category</h2>
            <div className="bg-[#F4F3F0] p-4 md:p-8 lg:p-24">
                <h2 className="text-3xl font-extrabold mb-4">Add Category</h2>
                
                <form onSubmit={handleAddCategory} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                    {/* Photo URL */}
                    <div className="form-control col-span-2 lg:col-span-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>

                    {/* Category Name */}
                    <div className="form-control col-span-2 lg:col-span-4">
                        <label className="label">
                            <span className="label-text">Category_Name</span>
                        </label>
                        <input type="text" name="categoryName" placeholder="Category_Name" className="input input-bordered w-full" />
                    </div>

                    {/* short description */}
                    {/* <div className="form-control col-span-2 lg:col-span-4">
                        <label className="label">
                            <span className="label-text">Short_Description</span>
                        </label>
                        <input type="text" name="shortDescription" placeholder="Short_Description" className="input input-bordered w-full" />
                    </div> */}

                 

                    {/* Submit Button */}
                    <div className="form-control col-span-full">
                        <input type="submit" value="Add Category" className="btn bg-lime-400" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddCategory;