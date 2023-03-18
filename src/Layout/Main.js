import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../Shared/Aside';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <div>
            <div className="w-full bg-white">

                <Header></Header>

                <div className='grid grid-cols-12  bg-gray-900 text-gray-50 relative'>
                    <div className='col-span-1 top-0'>
                        <Aside></Aside>
                    </div>

                    <div className='col-span-11'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;