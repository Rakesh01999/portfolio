import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BookTable = ({ displayBooks }) => {
    return (
        <div>
            <Helmet>
                <title>Book Buddy | Table View</title>
            </Helmet>
            {/* <h2 className="text-xl md:text-3xl text-center text-blue-600 font-bold my-3">Borrowed Books</h2> */}
            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>
                <div className="mx-auto grid grid-cols-1 gap-4">
                    <div className="overflow-x-auto">
                        <table className="table bg-blue-300">
                            {/* head */}
                            <thead>
                                <tr className="font-bold text-white md:text-xl bg-blue-500">
                                    <th>Photo</th>
                                    <th>Book Name</th>
                                    <th>Category</th>
                                    <th>Author Name</th>
                                    <th>Book Quantity</th>
                                    <th>Rating</th>
                                    <th><div>Action</div></th>
                                </tr>
                            </thead>
                            <tbody className="md:text-xl">
                                {/* row 1 */}

                                {displayBooks.map((displayBook) => (
                                    <tr className='hover'
                                        key={displayBook._id}
                                        displayBook={displayBook}
                                    >
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={displayBook.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-semibold">{displayBook.bookName}</div>
                                                    {/* <div className="text-sm opacity-50">{location}</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="">{displayBook.category}</span>
                                        </td>
                                        <td>{displayBook.authorName}</td>
                                        <td>{displayBook.quantityBook}</td>
                                        <td>{displayBook.rating}</td>
                                        <td>
                                            {/* <div className="flex gap-4">
                                                <Link to={`/updateSpot/${borrowedBook._id}`}>
                                                    <button className="btn btn-outline  btn-accent">Update</button>
                                                    </Link>
                                                    <button onClick={() => handleDelete(borrowedBook._id)} className="btn btn-outline btn-warning">Delete</button>
                                                </div> */}

                                            {/* <button onClick={() => handleIncrement(borrowedBook.bookId, borrowedBook._id)} className="btn btn-success">Return</button> */}

                                            {/* Update */}
                                            <Link to={`/updateBook/${displayBook._id}`}>
                                                <button className="btn btn-outline bg-cyan-400">Update</button>
                                            </Link>
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

export default BookTable;