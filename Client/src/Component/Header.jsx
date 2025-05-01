import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className='w-5/6 flex justify-between mx-auto  mt-8 item-center '>

      <div  className='w-full border-2 rounded-full border-orange-400 flex justify-between items-center '>
      <img src={logo} className='w-64 h-20 rounded-full  ' />
      <h2 className='text-lg italic text-black font-bold mr-9'> Good food , to your door</h2>
      </div>
    

     <div className=' flex w-full justify-evenly font-sans items-center'>
     <NavLink
  to="/Home"
  className={({ isActive }) =>
    isActive
      ? 'bg-orange-500 text-white rounded-full px-2'
      : 'text-black'
  }
>
  <h1 className="text-3xl font-bold p-2">Home</h1>
</NavLink>

       <NavLink to="/resturant"> 
       <h1 className="text-3xl font-bold text-black p-2">Resturants</h1>
       </NavLink>

       <NavLink to="/order"> 
       <h1 className="text-3xl font-bold text-black p-2">Track orders</h1>
       </NavLink>
     </div>


    </div>
  )
}

export default Header