import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/MobileMenu.css'
import {BsChevronRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import Submenu from './Submenu'


const MobileMenu = () => {
    const [subMenu,setSubmenu] = useState(false)

    const toggleSubmenu = ()=>{
        setSubmenu(!subMenu)
    }
  return (
    <div className='hidden md:flex'>
        <div className='opa w-full h-full right-0 fixed z-30 top-20'>
            <div className='w-10/12 px-7 py-3  bg-white  h-full ml-auto' >
                <div className='flex '>
                    <ul className='flex flex-col font-semibold gap-y-8  w-full'>
                            <button onClick={toggleSubmenu}  className='h-auto justify-between w-full flex items-center tracking-wide  hover:text-[#008248] transition duration-200 hover:duration-200'>
                                Menu
                                <BsChevronRight className='font-bold'/>
                            </button>
                        
                            <NavLink to={'/'} className="flex items-center tracking-wide hover:text-[#008248] transition duration-200 hover:duration-200">
                                Rewards
                            </NavLink>

                            <NavLink to={'/'} className="flex items-center tracking-wide hover:text-[#008248] transition duration-200 hover:duration-200">
                                Gift Cards
                            </NavLink>
                    </ul>
                </div>
                <hr className='mt-7' />
                
                <div>
                    <ul className='flex text-sm font-bold items-center gap-x-4 mt-5'>
                        <li>
                            <Link to={'/signin'} className='block border-[#000000] border px-5 py-2 rounded-3xl hover:bg-[#f1f8f6] transition duration-200 hover:duration-200'>Sign in</Link>
                        </li>

                        <li>
                            <Link to={'/signup'} className="block bg-[#000000] text-[#f1f8f6] px-5 py-2 rounded-3xl">Join now</Link>
                        </li>
                    </ul>
                </div>

                <div className='mt-4'>
                <Link to={'/store'} className='font-semibold text-sm hover:text-[#008248] flex items-center transition duration-200 hover:duration-200'>
                                <MdLocationOn size={25}/>
                                Find a store
                    </Link>
                </div>
                {
                    subMenu &&<Submenu subMenu={subMenu} toggleSubmenu={toggleSubmenu}/>

                }

                
            </div>
        </div>
    </div>
  )
}

export default MobileMenu