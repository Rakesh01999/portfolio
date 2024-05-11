import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';
import { Zoom } from 'react-toastify';
import BookCard from '../BookCard/BookCard';

const AllBook = () => {

    const books = useLoaderData();
    const [displayBooks, setDisplayBooks] = useState(books);

    const handleBookFilter = filter => {
        let filteredBooks = [...books];
        if (filter === 'availableBooks') {
            // filteredBooks.sort((a, b) => b.averageCost - a.averageCost);
            filteredBooks = filteredBooks.filter(book => book.quantityBook > 0);
        }
        else {
            // Default: 'all' or invalid filter
            filteredBooks = [...books];
        }
        setDisplayBooks(filteredBooks);
    }

    return (
        <div>
            <Helmet>
                <title>Book Buddy | All Books</title>
            </Helmet>
            <h2 className="text-2xl text-center text-blue-500 font-bold my-3">All Books</h2>

            {/* <Zoom>
                <h2 className="text-2xl text-center text-lime-600 font-bold my-3">All Books</h2>
            </Zoom> */}

            {/* dropdown */}
            <div className='text-center'>
                <details className="dropdown">
                    <summary className="m-1 btn bg-blue-500  md:h-[52px] text-white md:text-[18px] my-4">Show available books <RiArrowDropDownLine className="text-2xl md:text-4xl" />  </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleBookFilter('availableBooks')}>Show available books Only</a></li>
                    </ul>
                </details>
            </div>


            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>
                <div className="mx-auto grid grid-cols-1 gap-4">
                    {
                        displayBooks.map((book) => (
                            <BookCard key={book._id} book={book}></BookCard>
                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default AllBook;