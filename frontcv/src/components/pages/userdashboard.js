import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'

export default function UserDashboard() {
    return (
       <> 
              <Navbar />
    <div className="text-center">
       <h1 className="main-title home-page-title">welcome to Recruiter X</h1>
    <Link to="/LoginHome">
    <button class=" rounded py-4 px-12 bg-teal-500 text-2xl">Go In </button>
    </Link>
    </div>
    </>
    )
}

