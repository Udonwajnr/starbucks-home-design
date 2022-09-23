import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import { Pivot as Hamburger } from 'hamburger-react'



const HomeNavbar = ({toggleMobileMenu}) => {
  return (
    <header className='px-10 md:px-5 shadow-md z-50 relative'>
        <nav className='flex gap-x-8 h-24 md:h-20 tracking-widest justify-between items-center'>
            <div className='flex items-center'>
                <Link>
                    <img src="img/starbucksLogo.png" className='w-12' alt="" />
                </Link>
            </div>
            
            <div className='flex grow md:hidden'>
                <ul className='flex font-bold gap-x-5 text-sm '>
                        <NavLink to={'/menu'} className='h-auto flex items-center tracking-widest  hover:text-[#008248] transition duration-200 hover:duration-200'>
                            MENU
                        </NavLink>
                      
                        <NavLink to={'/'} className="flex items-center tracking-widest hover:text-[#008248] transition duration-200 hover:duration-200">
                            REWARDS
                        </NavLink>

                        <NavLink to={'/'} className="flex items-center tracking-widest hover:text-[#008248] transition duration-200 hover:duration-200">
                            GIFT CARDS
                        </NavLink>
                </ul>
            </div>

            <div className='flex items-center md:hidden'>
                <ul className='flex text-sm font-bold items-center gap-x-4'>
                    <li className=''>
                        <Link to={'/store'} className='font-bold hover:text-[#008248] flex items-center transition duration-200 hover:duration-200'>
                            <MdLocationOn size={25}/>
                             Find a store
                         </Link>
                    </li>

                    <li>
                        <Link to={'/signin'} className=' border-[#000000] border px-5 py-2 rounded-3xl hover:bg-[#f1f8f6] transition duration-200 hover:duration-200'>Sign in</Link>
                    </li>

                    <li>
                        <Link to={'/signup'} className="bg-[#000000] text-[#f1f8f6] px-5 py-2 rounded-3xl">Join now</Link>
                    </li>
                </ul>
            </div>

            <div className='hidden md:block' onClick={toggleMobileMenu}>
                <Hamburger size={23}/>
            </div>
        </nav>
    </header>
  )
}

export default HomeNavbar