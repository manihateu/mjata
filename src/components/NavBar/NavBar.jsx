import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const NavBar = (props) => {
    const [value, setvalue] = useState('hidden')
    const navigate = useNavigate();
  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <a style={{cursor: 'pointer'}} className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" onClick={()=>{navigate("/shop")}}>Lounge Bar <span className="text-lime-400">Мята</span> </span>
      </a>
      <div className=" md:block md:w-auto" id="navbar-dropdown">
        <ul className="flex flex-col p-4 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-900 sm:dark:bg-gray-900">
          <li className="flex items-center">
            <div className="relative flex flex-row">
                <button className="text-white mr-4 hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center" onClick={()=>{navigate('/basket')}}>
                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </button>
                <button onClick={()=>{navigate('/profile')}}><img className="my-auto object-cover p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={props.userPhoto} alt="Bordered avatar"/></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar