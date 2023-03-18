import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuizQs.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import swal from 'sweetalert';

const QuizQs = ({ data, idx, Right, Wrong }) => {
    const { question, correctAnswer, options, id } = data;

    // Toastify for correct and wrong answer.
    function getVal(option) {

        if (correctAnswer === option) {
            Right();
            toast.success('Correct', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            Wrong();
            toast.error('Wrong answer', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }


    // give correct ans with customize sweet alert
    let value = options.indexOf(correctAnswer)
    const correctAns = () => {
        swal(`Correct answer: \n ${value + 1}: ${correctAnswer}`);
    }


    return (

        // Quiz question
        < div className='mb-6 border-2 border-gray-500 mr-3 p-5' >
            <div>
                <h2 className='text-lg font-bold'>Quiz {idx + 1}:  {question.replace(/[</p>]/g, "")}</h2>

                <div className='flex '>
                    <p>Correct ans:</p>
                    <EyeIcon className='h-5 cursor-pointer text-green-500' onClick={correctAns} />
                </div>
            </div>



            {/* Map the answers */}
            <div className='grid grid-cols-2 '>
                {
                    options.map((option, idx) =>

                        <div key={idx} className='ml-36 p-3 text-left  hover:bg-gray-200 hover:text-black' onClick={() => getVal(option)}>
                            <input type="radio" id={idx} name="selectedAns" />
                            <label className='ml-1' htmlFor="html">{idx + 1}. {option}</label><br></br>
                        </div>
                    )
                }
            </div>
            <ToastContainer />
        </div >
    );
};

export default QuizQs;