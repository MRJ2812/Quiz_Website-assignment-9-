import React from 'react';

const Test = () => {
    return (



        <div class="h-screen">


            <div class="w-full h-full flex flex-col justify-between">

                <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
                    {/* <!-- Informação --> */}
                    <div class="flex flex-shrink-0 items-center space-x-4 text-white">

                        {/* <!-- Texto --> */}
                        <div class="flex flex-col items-end ">
                            {/* <!-- Nome --> */}
                            <div class="text-md font-medium ">Unknow Unknow</div>
                            {/* <!-- Título --> */}
                            <div class="text-sm font-regular">Student</div>
                        </div>

                        {/* <!-- Foto --> */}
                        <div class="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
                    </div>
                </header>

                <main class="max-w-full h-full flex relative overflow-y-hidden">
                    {/* <!-- Container --> */}
                    <div class="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
                        {/* <!-- Container --> */}
                        <div class="w-96 h-60  bg-gray-400">1</div>
                        <div class="w-96 h-60  bg-gray-400">2</div>
                        <div class="w-96 h-60  bg-gray-400">3</div>
                        <div class="w-96 h-60  bg-gray-400">4</div>
                        <div class="w-96 h-60  bg-gray-400">5</div>
                        <div class="w-96 h-60  bg-gray-400">6</div>
                        <div class="w-96 h-60  bg-gray-400">7</div>
                        <div class="w-96 h-60  bg-gray-400">8</div>
                        <div class="w-96 h-60  bg-gray-400">9</div>
                    </div>
                </main>


            </div>

        </div>



    );
};

export default Test;