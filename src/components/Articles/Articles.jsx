import React from 'react';
import { Helmet } from 'react-helmet-async';

const Articles = () => {
    return (
        <div>
            <Helmet>
                <title>Articles</title>
            </Helmet>
            <div className='my-10'>
                {/* <p className='text-center font-bold'>Articles</p> */}

                <div data-aos="zoom-in" className='flex flex-col items-center gap-6'>
                    <h1 className='text-2xl md:text-5xl font-bold font-serif italic text-purple-500 text-center  w-[200px]'>Articles</h1>
                    <p className=' md:text-2xl font-semibold text-center'>Transforming Your World with Sustainable Property Solutions</p>
                </div>

                {/* <div className='md:w-[1800px] grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto my-10'> */}
                {/* <div className='max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto px-4 md:px-8 py-8 md:py-12 bg-opacity-10 rounded-3xl flex flex-col items-center mb-10'> */}
                <div className='max-w-[370px] md:max-w-[500px] lg:max-w-[1540px] md:mx-auto px-4 md:px-8 py-8 md:py-12 bg-opacity-10 rounded-3xl flex flex-col items-center gap-6 mb-10'>
                    
                    <div data-aos="fade-up" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-2 ">Trends in Residential Architecture</h2>
                        <p className="text-sm text-gray-600">Modern Designs and Innovations": Highlight the latest trends in residential architecture, showcasing innovative designs, sustainable features, and smart home technologies that are shaping the future of home construction.</p>
                    </div>
                    <div data-aos="fade-down" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Navigating the Homebuying Process: A Comprehensive Guide</h2>
                        <p className="text-sm text-gray-600">Provide a step-by-step guide for first-time homebuyers, covering everything from budgeting and mortgage pre-approval to house hunting, making an offer, and closing the deal..</p>
                    </div>
                    <div data-aos="fade-right" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Top 10 Emerging Residential Neighborhoods to Invest In
                        </h2>
                        <p className="text-sm text-gray-600">
                            Explore up-and-coming residential neighborhoods that offer great investment opportunities. Discuss factors such as location, amenities, development projects, and potential for appreciation.
                        </p>
                    </div>
                    <div data-aos="fade-left" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            "Luxury Living
                        </h2>
                        <p className="text-sm text-gray-600">
                            Exploring High-End Residential Properties Around the World": Take readers on a virtual tour of luxury residential properties in desirable locations worldwide, featuring stunning homes, lavish amenities, and exclusive communities.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Understanding Property Valuation: Factors That Influence Residential Real Estate Prices
                        </h2>
                        <p className="text-sm text-gray-600">
                            Educate readers on the various factors that influence property valuation, such as location, market conditions, property size, condition, and recent sales comparables.
                        </p>
                    </div>
                    <div data-aos="fade-down" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Sustainable Living: Eco-Friendly Features for Residential Properties
                        </h2>
                        <p className="text-sm text-gray-600">
                            : Showcase eco-friendly features and sustainable practices that homeowners can adopt to reduce their environmental footprint and create healthier living spaces.
                        </p>
                    </div>
                    <div data-aos="fade-right" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Investing in Rental Properties: Strategies for Success
                        </h2>
                        <p className="text-sm text-gray-600">
                            Provide insights into investing in rental properties as a source of passive income, including tips for property selection, tenant screening, property management, and maximizing rental yields.
                        </p>
                    </div>
                    <div data-aos="fade-left" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            The Rise of Co-Living Spaces:
                        </h2>
                        <p className="text-sm text-gray-600">
                            A New Trend in Residential Living": Explore the concept of co-living spaces, where residents share communal areas and amenities while enjoying the privacy of their own living spaces. Discuss the benefits, challenges, and implications of this growing trend.
                        </p>
                    </div>
                    <div data-aos="fade-up" className="bg-violet-100 shadow-md rounded-lg p-6">
                        {/* <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" /> */}
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Real Estate Market Forecast: Predictions for the Residential Sector
                        </h2>
                        <p className="text-sm text-gray-600">
                            Offer predictions and insights into the future of the residential real estate market, based on current trends, economic indicators, and expert analysis.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Articles;