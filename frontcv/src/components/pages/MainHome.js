import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import logo from '../../assets/images/log.png';
import HrDashboard from './HrDashboard';

import '../../App.css'


export default function MainHome() {
    return (
        <>
        <Link to="/home">
        <Navbar />
        </Link> 
        <div >
     <img src={logo} class="  mx-auto  px-auto block justify-center "  alt='some value' />
     </div>
        <div class="justify-center  " >
            <h1 class="text-center font-bold text-4xl py-7">Recruiter- X </h1>
            <p class="text-center font-semibold text-3xl">Get Hired By Companies</p>
            <div class="text-center  py-9 my-12">
                <Link to="/login">
                    <button class="bg-teal-300  font-bold drop-shadow-2xl text-white py-2 px-8 mx-8 border-red-500 rounded">Log in</button>
                </Link>
                <Link to="/register">
                <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">Sign Up</button>

                </Link>
            </div>
        </div>    
        <div class=" py-12" >
    <div class="flex justify-around  ">
            <div class="text-center ">
               
               <Link to="/login">
               <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">HR Login </button>

               </Link>
            </div>
            <div class="text-center">
               
               <Link to="/HrDashboard">
               <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">HR</button>

               </Link>
            </div>
            <div class="text-center">
               
               <Link to="/register">
               <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">JS Login</button>

               </Link>
            </div>
            <div class="text-center">
               
               <Link to="/userdashboard">
               <button class="bg-black drop-shadow-2xl  text-white font-semibold py-2 px-8 rounded">Job Seeker</button>

               </Link>
            </div>
            
         </div>
         
     </div>    
   
        
        <Footer  />
       </>
    )
}



