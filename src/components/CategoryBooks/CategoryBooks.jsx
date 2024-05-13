import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import CategoryBook from '../CategoryBook/CategoryBook';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const CategoryBooks = () => {

    const { user } = useContext(AuthContext);

    // ------ Category -------
    const category = useLoaderData();
    const { categoryName } = category;
    // console.log(categoryName);

    // ------- Books ---------
    const url = `https://library-server-blue.vercel.app/book?email=${user?.email}`;

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBooks(res.data);
            })
        // fetch(url , {credentials: 'include'})
        // .then(res => res.json())
        // .then(data => setDisplayBooks(data))
    }, [url])


    const selectedBooks = books.filter((book) => book.category === categoryName);
    // console.log(books);
    // console.log(selectedBooks);


    return (
        <div>
            <Helmet>
                <title>Book Buddy | Books of the Category</title>
            </Helmet>
            <h2 className="text-4xl my-3 font-bold text-center text-blue-500">Books of the Category: {categoryName} </h2>

            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"> */}
                <div className="mx-auto grid grid-cols-1 gap-4">
                    {selectedBooks.map((book) => (
                        <CategoryBook key={book._id} book={book}></CategoryBook>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CategoryBooks;