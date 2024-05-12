import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ViewDetails = () => {

    const [borrowedBooks, setBorrowedBooks] = useState([]);
    // const { bookName, photo, shortDescription, authorName, quantityBook, category, rating, contents } = borrowedBook;
    useEffect(() => {
        fetch('http://localhost:5000/borrowedBook')
            .then(res => res.json())
            .then(data => setBorrowedBooks(data));
    }, [])
    // console.log('borrowedBooks',borrowedBooks);


    const book = useLoaderData();
    const { bookName, photo, shortDescription, authorName, quantityBook, category, rating, contents } = book;
    // const { bookName, book_id, photo, shortDescription, authorName, quantityBook, category, rating, contents } = book;

    const { user } = useContext(AuthContext);


    // ------- borrow date ------ 
    const [borrowDate, setBorrowDate] = useState(new Date().toISOString().substr(0, 10)); // Set initial value to today's date

    const checkBorrow = e => {
        const isAlreadyBorrowed = borrowedBooks.find((borrowedBook) =>
            borrowedBook.bookId === book._id && borrowedBook.email === user.email
        );
        console.log(isAlreadyBorrowed);
        // if already exist or not 
        if (isAlreadyBorrowed) {
            Swal.fire({
                title: 'Error!',
                text: 'You have already borrowed this book. ',
                // text: ' Borrowing a book twice for a single user is not allowed',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            toast.error("You can't borrow ");
            return;
        }
        else{
            // () => document.getElementById('my_modal_5').showModal() ;
            document.getElementById('my_modal_5').showModal() ;
        }
    }

    // -------- add borrow book ------
    const handleAddBorrowedBook = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const borrowDate = form.borrowDate.value;
        const returnDate = form.returnDate.value;
        // const bookName = form.bookName.value;
        // const photo = form.photo.value;
        // const shortDescription = form.shortDescription.value;
        // const authorName = form.authorName.value;
        // const quantityBook = form.quantityBook.value;
        // const category = form.category.value;
        // const rating = form.rating.value;
        // const contents = form.contents.value;




        // update data to the server
        const updateBook = { bookName, photo, shortDescription, authorName, quantityBook, category, rating, contents }
        // const updateBook = { bookName, photo, shortDescription, authorName, category, rating, contents }

        fetch(`http://localhost:5000/book/decrement/${book._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.modifiedCount > 0) {
                //     Swal.fire({
                //         title: 'Success!',
                //         text: 'Book Updated Successfully',
                //         icon: 'success',
                //         confirmButtonText: 'Cool'
                //     })
                // }
            })

        // send data to the server

        const bookId = book._id;
        // console.log(bookId);
        const newBorrowedBook = { bookName, bookId, photo, shortDescription, authorName, category, rating, contents, borrowDate, returnDate, name, email }
        // const newBorrowedBook = { bookName, photo, shortDescription, authorName, category, rating, contents, borrowDate, returnDate, name, email }
        console.log(newBorrowedBook);


        fetch('http://localhost:5000/borrowedBook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBorrowedBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book Borrowed Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
        location.reload();
    }

    return (
        <div>
            <Helmet>
                <title>Book Buddy | Book Details</title>
            </Helmet>
            <h2 className="text-2xl md:text-4xl my-3 font-bold text-center text-blue-600">Details </h2>

            <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-blue-300 rounded-3xl flex flex-col items-center mb-10'>

                <div className="px-4">
                    <img className="md:w-full md:h-full rounded-2xl mt-7 mx-auto" src={photo} alt="" />
                </div>
                <div className="w-full p-6 text-xl md:text-[25px] mt-28 ">
                    <h2 className="text-2xl md:text-[40px] font-bold">{bookName}</h2>
                    <p className="text-[25px] mt-4"><span className='font-bold'>Author Name:</span>  {authorName}</p>
                    <div className="border-b-2 my-3"></div>
                    <p className="my-6"><span className='font-bold'>Quantity of Book: </span>{quantityBook}</p>
                    <div className="border-b-2 my-3"></div>
                    <p> <span className="font-bold">Category : </span> {category}</p>
                    <p className='my-5'> <span className="font-bold">Details :</span> {shortDescription}</p>
                    {/* <div className="flex flex-col  gap-7 my-4">
                        <p className="font-bold">Facilities:</p>
                        {residential.facilities.map((facility, index) => (
                            <p key={index} className="bg-[#E6E6FA] md:w-[300px] rounded-2xl text-violet-600 text-center"># {facility}</p>
                        ))}
                    </div> */}
                    <div className="border-b-2 my-3"></div>
                    <div className=" flex gap-4">
                        <div className='font-bold'>
                            <p> Rating:</p>
                            {/* <p className='my-3'> TravelTime:</p> */}
                            <p>Contents:</p>
                        </div>
                        <div>
                            <p className="text-[] ">{rating}</p>
                            {/* <p className="text-[] my-3">{travelTime}</p> */}
                            <p className="text-[] ">{contents}</p>
                        </div>
                    </div>
                    <div className="border-b-2 border-green-500 my-3"></div>
                    <div>
                        {/* <h2 className="text-center font-bold"> Added By User</h2> */}
                    </div>
                    <div className=" flex gap-4">
                        <div className='font-bold'>
                            {/* <p> Name :</p> */}
                            {/* <p className='my-3'> Email :</p> */}
                        </div>
                        <div>
                            {/* <p className="text-[] ">{name}</p>
                            <p className="text-[] my-3">{email}</p> */}
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">

                        {/* --------------- MODAL ---------------- */}
                        {/* <button className="btn btn-block">block</button> */}
                        {/* Open the modal using document.getElementById('ID').showModal() method */}

                        {
                            (quantityBook > 0) ?
                                (
                                    <div className="form-control col-span-full">
                                        {/* <input type="submit" value="Submit to borrow" className="btn bg-blue-600 text-white" /> */}
                                        {/* <button className="btn w-full bg-blue-600 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button> */}
                                        <button className="btn w-full bg-blue-600 text-white" onClick={checkBorrow}>Borrow</button>
                                    </div>
                                )
                                :
                                (
                                    <div className="form-control col-span-full">
                                        {/* <input type="submit" value="Out of Stock" className="btn bg-gray-400 text-white" disabled /> */}
                                        <button className="btn bg-blue-600 text-white" disabled="disabled">Out of Stock</button>
                                    </div>
                                )
                        }

                        {/* <button className="btn bg-blue-600 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button> */}


                        <dialog id="my_modal_5" className="modal modal-bottom  lg:modal-middle sm:modal-middle">
                            <div className="modal-box">
                                {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                                <h3 className="font-bold text-lg text-blue-500 text-center">To borrow the book please fill up ( <span className="font-serif text-green-600">Return Date</span>  ) in the below form</h3>
                                {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                                {/* ----- form ------ */}
                                <form onSubmit={handleAddBorrowedBook} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                                    {/* Name */}
                                    <div className="form-control col-span-2 lg:col-span-4">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" value={user.displayName} placeholder="Name" className="input input-bordered w-full" />
                                    </div>

                                    {/* Email */}
                                    <div className="form-control col-span-2 lg:col-span-4">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name="email" value={user.email} placeholder="Email" className="input input-bordered w-full" />
                                    </div>

                                    {/* Borrow Date */}
                                    <div className="form-control col-span-2 lg:col-span-4">
                                        <label className="label">
                                            <span className="label-text">Borrow_Date</span>
                                        </label>
                                        <input type="date" name="borrowDate" value={borrowDate} placeholder="Borrow_Date" className="input input-bordered w-full" />
                                    </div>

                                    {/* Return Date */}
                                    <div className="form-control col-span-2 lg:col-span-4">
                                        <label className="label">
                                            <span className="label-text">Return_Date</span>
                                        </label>
                                        <input type="date" name="returnDate" placeholder="Return_Date" required className="input input-bordered w-full" />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="form-control col-span-full">
                                        <input type="submit" value="Submit to borrow" className="btn bg-blue-600 text-white" />
                                    </div>

                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn items-center">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>

            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default ViewDetails;