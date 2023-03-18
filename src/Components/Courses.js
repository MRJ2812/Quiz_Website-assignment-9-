import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ data }) => {
    const { id, logo, name, total } = data;



    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ width: 350 }}>
            <a href="#">
                <img className="p-8 rounded-t-lg " src={logo} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>

                <div className="flex items-center mt-2.5 mb-5">
                    <p className='text-white font-bold'>Level: Easy</p>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{total} Qn</span>
                    {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start quiz</a> */}
                    <Link to={`quiz/${id}`} className="relative border-2 border-blue-700 bg-blue-700 rounded-lg inline-flex items-center justify-center  px-5 py-2.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out   shadow-md group">
                        <span className="absolute rounded-lg inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center bg-blue-700 w-full h-full text-white font-medium rounded-lg transition-all duration-300 transform group-hover:translate-x-full ease">Start quiz</span>
                        <span className="relative invisible">Start quiz</span>
                    </Link>


                </div>



            </div>
        </div>
    );
};

export default Courses;