import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Category from '../Category/Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://library-server-blue.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>

            <Fade>
                <h2 className="hover:text-lime-600 text-xl text-center md:text-[40px] text-cyan-400 font-bold mb-10"> Categories  </h2>
                <div className='hover:text-lime-400 max-w-[370px] md:max-w-[540px]  lg:max-w-[1540px] mx-auto px-4 py-2 rounded-3xl flex flex-col md:flex-row items-center justify-center mb-10'>
                    <h1 className='text-xl text-center md:text-[25px]  font-bold mb-10'>
                        {/* to find the best Tourist Place */}
                        Choose
                        <span>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle='__'
                                typeSpeed={90}
                                deleteSpeed={90}
                                delaySpeed={1000}
                                // words={['Hello', 'World', 'React']}
                                // words={[' your cards', ' Desired', ' cards']}
                                words={[' your favourite book category card', ' . . . ']}
                            />
                        </span>
                    </h1>
                </div>
            </Fade>



            <div className='max-w-[370px] md:max-w-[540px]  lg:max-w-[1540px] mx-auto px-4 py-2 rounded-3xl flex flex-col md:flex-row items-center justify-center'>
                <Link to="/addCategory">
                    {/* <button className='btn btn-outline'>Add Category</button> */}
                </Link>
            </div>

            <div>

                {/* <div className='w-[500px]  md:w-[1540px] mx-auto md:mx-auto flex flex-col md:flex-row '> */}
                <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12  rounded-3xl flex flex-col md:flex-row items-center mb-10'>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            categories.map(category => <Category key={category._id} category={category}></Category>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categories;