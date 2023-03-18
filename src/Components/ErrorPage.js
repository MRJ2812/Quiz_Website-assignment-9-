import React from 'react';
import errorImage from '../Assets/000-404.png'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-screen h-screen' src={errorImage} alt="" />
        </div>
    );
};

export default ErrorPage;