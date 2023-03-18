import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from './Courses';

const Home = () => {
    const quizData = useLoaderData();

    return (

        <div className='grid grid-cols-3 gap-3 mt-6'>
            {
                quizData.data.map((data, idx) => <Courses data={data} key={idx} ></Courses>)
            }
        </div>
    );
};

export default Home;