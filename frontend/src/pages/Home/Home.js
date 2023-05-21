import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'

function Home(){
    return (
        <div class="bg-fuchsia-100">
            <Header/> 

            <div class="flex flex-col items-center min-h-screen mt-9">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-8 text-center mt-10">Find out your Next favourite Movie/Show</h1>
                <Link to='/top10movies'> 
                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> 
                        Go to top 10 Movies!
                    </button>
                </Link> 
            </div>
        </div>
    );
}

export default Home;