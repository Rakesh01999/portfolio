import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaCarSide, FaMap, FaSortAmountDown } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { MdCategory, MdContentPasteSearch } from 'react-icons/md';
import { SiLibreofficewriter } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';


const BookCard = ({ book }) => {

    const { bookName, photo, shortDescription, authorName, quantityBook, category, rating, contents } = book;

    return (
        <div>

            <div className='bg-blue-300 shadow-xl w-full lg:max-w-[1540px] px-4 md:px-8 py-8 md:py-12 rounded-3xl flex flex-col md:flex-row items-center mb-10 gap-6 md:text-xl mx-auto'>

                <div className='w-[150px] h-[200px]'>
                    <img src={photo} className='max-h-44' alt="Book" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[24px] font-bold">{bookName}</h2>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex items-center gap-4'>

                            <p> {shortDescription}</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        {/* <CiLocationOn className='text-[30px]' /> */}
                        <SiLibreofficewriter className='text-[26px]' />
                        <p><span className='font-bold'>Author Name :</span>  {authorName}</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className='flex gap-4'>
                            <p className='text-[16px] font-bold'> </p>
                            {/* <p className='bg-[#23BE0A0D] text-[#23BE0A] text-[16px]'>{book.tags[0]}</p>
            <p className='bg-[#23BE0A0D] text-[#23BE0A] text-[16px]'>{book.tags[1]}</p> */}
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaSortAmountDown className='text-[24px] ' />
                            <p className='text-[16px] font-semibold'> <span className='font-bold'>  Book Quantity: </span> {quantityBook}</p>
                        </div>

                    </div>

                    <div className='flex items-center gap-4'>
                        <MdCategory />
                        <p> <span className='font-bold'>Category:</span>  {category} </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <MdContentPasteSearch />
                        <p> <span className='font-bold'>Contents:</span>  {contents}</p>
                    </div>
                    <div className='flex flex-col md:flex-col lg:flex-row gap-4'>
                        <p className='bg-[#FFAC3326] rounded-2xl text-blue-700 text-[16px] md:text-[20px] w-[174px] p-3 font-bold'>
                            Rating: {rating}
                        </p>
                        <p className='bg-[#FFAC3326] rounded-2xl text-blue-700 text-[16px] md:text-[20px] w-[174px] p-3 font-bold'>
                            {/* Rating: {rating} */}
                            <Rating
                                start={0}
                                stop={5}
                                step={1}
                                fractions={1}
                                initialRating={rating}
                                // readonly={false}
                                readonly={true}
                                quiet={false}
                                direction="ltr"
                                emptySymbol={<span className="empty-star">☆</span>}
                                fullSymbol={<span className="full-star">★</span>}
                                placeholderSymbol={<span className="placeholder-star">☆</span>}
                            />

                        </p>

                        <Link to={`/viewDetails/${book._id}`}>
                            {/* <button className='btn w-[150px] h-[] bg-blue-700 text-white text-[18px]'>View Details</button> */}
                        </Link>

                        {/* Update */}
                        <Link to={`/updateBook/${book._id}`}>
                            <button className="btn btn-outline bg-cyan-400">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;