import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Footer from '../../components/Header/Footer';
function Home(){
    return (
        <div class="flex flex-col min-h-screen bg-fuchsia-100">
            <Header/> 
            <section class="bg-white dark:bg-gray-900 flex-grow">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Netflix TOP 10 Chart</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">Find out your Next favourite Movie or TV Show</p>
                        <Link to='/top10movies' class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-800">
                            Go to top 10 Movies!
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                        <Link to='/top10tvshows' class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-800">
                            Go to top 10 TV Shows!
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                        </Link> 
                    </div>
                    <div class="hidden lg:mt-1 lg:col-span-5 lg:flex">
                        <img class="w-300 h-auto" src="https://www.freepnglogos.com/uploads/netflix-logo-29.png" alt="netflix logo circle png" />
                    </div>                
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;
