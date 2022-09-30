import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import '../../App.css'
import Footer from './footer'

export default function SignInPage() {
    return (
        <>
        <Navbar />
        <div class="text-center m-5-auto ">
        <Link to="/">
            <h1 class="font-bold text-center text-3xl">Login Here </h1>
            
            </Link>
            <form class="bg-white shadow-xl rounded-lg border-2">
    
        <div class="mb-6" >
            <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 " >Username</label>
            <input type="text" id="first_name" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl" placeholder="mugesh-rao " required=""/>
        </div>
        <div class="mb-6" >
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
            <input type="email" id="email" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl " placeholder="mugeshraoego@gmail.com" required=""/>
         </div> 
       
   
    
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
        <input type="password" id="password" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl" placeholder="•••••••••" required="" />
    </div> 
    
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 ">I agree with the terms and conditions </label>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
            
            
        </div>
        <Footer/>
        </>
    )
}
