import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { FaFlag } from 'react-icons/fa6';
import { MdCategory, MdDescription } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { photo, categoryName } = category;

    return (
        <div>
            <Zoom>
                <div className="hover:shadow-2xl hover:rounded-3xl hover:bg-cyan-200 text-center mb-2">
                    {/* <button className="btn btn-outline btn-info md:w-[200px] rounded-full md:text-lg text-white mb-4"> */}

                    {/* View Details */}
                    <div className="max-w-full md:h-[400px] lg:h-[400px]  rounded-3xl shadow-2xl flex flex-col items-center mb-5">
                        <figure className=" md:px-10 mt-10">
                            <img src={photo} alt="house" className="max-h-52 rounded-xl" />
                        </figure>
                        <div className="card-body hover:text-blue-700">
                            {/* <h2 className="card-title text-xl lg:text-2xl text-blue-500 mx-auto font-bold my-4">{spotName}</h2> */}
                            <div className="flex gap-2 items-center text-xl text-blue-500 md:text-2xl">
                                {/* <IoPricetags className="text-green-200" /> */}
                                <MdCategory className="text-center" />
                                <p className='text-center'>Category: {categoryName}</p>
                            </div>
                            <div className="border-b-2 "></div>
                            
                        </div>
                        {/* <Link to={`/viewDetails/${spot._id}`}> */}

                        <Link to={`/categoryBooks/${category._id}`}>
                            <button className="hover:bg-green-400 btn btn-sm lg:h-11 lg:btn-wide btn-info mb-6  text-white md:text-xl">
                                Select
                            </button>
                        </Link>
                    </div>

                </div>


            </Zoom>
        </div >
    );
};

export default Category;