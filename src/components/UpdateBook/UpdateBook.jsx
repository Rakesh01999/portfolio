import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBook = () => {

    const book = useLoaderData();
    const { bookName, photo, shortDescription, authorName, quantityBook, category, rating, contents } = book;

    const handleUpdateBook = event => {
        event.preventDefault();

        const form = event.target;
        const bookName = form.bookName.value;
        const photo = form.photo.value;
        const shortDescription = form.shortDescription.value;
        const authorName = form.authorName.value;
        // const quantityBook = form.quantityBook.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const contents = form.contents.value;

        // const name = form.name.value;
        // const email = form.email.value;

        const updateBook = { bookName, photo, shortDescription, authorName, quantityBook, category, rating, contents }

        // console.log(updateBook);

        // update data to the server

        fetch(`https://library-server-blue.vercel.app/book/${book._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book Updated Successfully',
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
                <title>Book Buddy | Update Book</title>
            </Helmet>
            <h2 className="text-2xl text-center text-blue-500 font-bold my-3">Update Book</h2>
            <div className="bg-[#F4F3F0] p-4 md:p-8 lg:p-24">
                <h2 className="text-3xl font-extrabold mb-4 text-center">Update Book</h2>
                <form onSubmit={handleUpdateBook} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                    {/* Book_Name */}
                    <div className="form-control col-span-2 lg:col-span-4">
                        <label className="label">
                            <span className="label-text">Book_Name</span>
                        </label>
                        <input type="text" name="bookName" defaultValue={bookName} placeholder="Book_Name" className="input input-bordered w-full" />
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

                    {/* Author_Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author_Name</span>
                        </label>
                        <input type="text" name="authorName" defaultValue={authorName} placeholder="Author_Name" className="input input-bordered w-full" />
                    </div>

                    {/* Quantity of the book */}
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity of the book</span>
                        </label>
                        <input type="number" name="quantityBook" defaultValue={quantityBook} placeholder="Quantity_of_the_book" className="input input-bordered w-full" />
                    </div> */}


                    {/* Category */}
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                    </div> */}

                    {/* Category */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" defaultValue={category} className="select select-bordered w-full">
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Fantasy">Fantasy</option>
                        </select>
                    </div>


                    {/* Rating */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" min="1" max="5" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                    </div>

                    {/* contents */}
                    <div className="form-control col-span-2 lg:col-span-4">
                        <label className="label">
                            <span className="label-text">Contents</span>
                        </label>
                        <input type="text" name="contents" defaultValue={contents} placeholder="Contents" className="input input-bordered w-full" />
                    </div>

                    {/* totalVisitorsPerYear */}
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="totalVisitorsPerYear" placeholder="totalVisitorsPerYear" className="input input-bordered w-full" />
                    </div> */}

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
                        <input type="submit" value="Update Book" className="btn bg-blue-400 text-white" />
                    </div>
                </form>
            </div>


        </div>
    );
};

export default UpdateBook;