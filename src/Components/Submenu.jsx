import React from 'react'
import {BsChevronLeft} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Submenu = ({submenu,toggleSubmenu}) => {
  return (
    <>
        <div className={submenu?'absolute z-50 top-0 w-10/12 h-full ':'absolute z-40 top-0 w-10/12 h-full'}>
              <div className='  bg-white  h-full ml-auto' >
                <div className=' grid grid-cols-4 items-center  font-bold text-lg' onClick={toggleSubmenu}>
                    <div className=''>
                        <BsChevronLeft />
                    </div>
                    <span className='w-10/12 text-center '>
                        Menu
                    </span>
                </div>
             
             <div className='flex mt-5 '>
                <ul className='flex flex-col font-semibold gap-y-8  w-full'>
                        <NavLink to={'/'} className="flex items-center tracking-wide hover:text-[#008248] transition duration-200 hover:duration-200">
                            All Products
                        </NavLink>

                        <NavLink to={'/'} className="flex items-center tracking-wide hover:text-[#008248] transition duration-200 hover:duration-200">
                           Featured
                        </NavLink>
                        <NavLink to={'/'} className="flex items-center tracking-wide hover:text-[#008248] transition duration-200 hover:duration-200">
                           Previous Orders
                        </NavLink>
                       
                        <NavLink to={'/'} className="flex items-center tracking-wide hover:text-[#008248] transition duration-200 hover:duration-200">
                           Favorite Products
                        </NavLink>
                </ul>
            </div>            
        </div>
        </div>
    </>
  )
}

export default Submenu