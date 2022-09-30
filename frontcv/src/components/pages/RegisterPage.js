import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import '../../App.css'
import Footer from './footer'

export default function SignUpPage() {

    return (
        
        <>
        <Navbar />
        <div className="text-center m-5-auto">
            <h2 class="text-2xl font-bold">Register here</h2>
           
<form class="bg-white shadow-xl rounded-lg border-2">
    <div class="grid gap-6 mb-6 md:grid-cols-2 ">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 " >First name</label>
            <input type="text" id="first_name" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl" placeholder="Mugehs " required=""/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
            <input type="text" id="last_name" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl" placeholder="Rao" required=""/>
        </div>
        <div >
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
            <input type="email" id="email" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl " placeholder="mugeshraoego@gmail.com" required=""/>
         </div> 
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
            <input type="tel" id="phone" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl" placeholder="+91 9999999999" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="" />
        </div>
       
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 ">Student Id</label>
            <input type="number" id="visitors" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl "  placeholder="21JITCS210" required=""/>
        </div>
        <div>
            <label for="college" class="block mb-2 text-sm font-medium text-gray-900 ">College Name</label>
            <input type="text" id="visitors" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl " placeholder="Jeppiar College" required=""/>
        </div>
    </div>
    
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
        <input type="password" id="password" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl" placeholder="•••••••••" required="" />
    </div> 
    <div class="mb-6">
        <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
        <input type="password" id="confirm_password" class="block w-full p-2.5 border-2 border-solid rounded-xl shadow-xl " placeholder="•••••••••" required="" />
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 ">I agree with the terms and conditions </label>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>

        <Footer/>
        </>
        
    )

}
