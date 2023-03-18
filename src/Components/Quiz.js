import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQs from './QuizQs';

const Quiz = () => {
    const quizData = useLoaderData();
    const { name } = quizData.data;


    // Total right and wrong answer.
    const [totalRight, setTotalRight] = useState(0);
    const [totalWrong, setTotalWrong] = useState(0);

    const Right = () => {
        setTotalRight(totalRight + 1);
    }
    const Wrong = () => {
        setTotalWrong(totalWrong + 1);
    }


    return (
        <div>
            <h1 className='text-4xl mt-3 mb-6'>Quiz of {name}</h1>
            <div className='flex justify-around'>
                <div className='bg-green-500 p-3 mb-3 rounded-sm'>
                    <h1>Total Right: {totalRight}</h1>
                </div>
                <div className='bg-red-500 p-3 mb-3 rounded-sm'>
                    <h1>Total Wrong: {totalWrong}</h1>
                </div>
            </div>
            <div>
                {
                    quizData.data.questions.map((data, idx) => <QuizQs data={data} idx={idx} key={idx} Right={Right} Wrong={Wrong}></QuizQs>)
                }
            </div>

        </div>
    );
};

export default Quiz;