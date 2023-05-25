import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    const current_year = new Date().getFullYear()
    return(      
        <footer class="bg-white shadow dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {current_year} CTP. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to="/" class="mr-4 hover:underline md:mr-6 ">About Team</Link>
                </li>
                <li>
                    <Link to="/" class="mr-4 hover:underline md:mr-6">Data Policy</Link>
                </li>
                <li>
                    <Link to="/" class="hover:underline">Contact</Link>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer;