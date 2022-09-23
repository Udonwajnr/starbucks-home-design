import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Footer.css'
import {FaSpotify} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {SiYoutube} from 'react-icons/si'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsChevronDown} from 'react-icons/bs'


const Footer = () => {
    const [active ,setActive] = useState(false)
    const [about,setAbout] = useState(false)
    const [career,setCareer] = useState(false)
    const [social,setSocial] = useState(false)
    const [business,setBusiness] = useState(false)

    // functions for accordion
    const toggleAbout =()=>{
        setAbout(!about)
    }
    const toggleCareer =()=>{
        setCareer(!career)
    }
    const toggleSocial =()=>{
        setSocial(!social)
    }
    const toggleBusiness =()=>{
        setBusiness(!business)
    }

    // order and pickup
    const toggleActive=()=>{
        setActive(!active)
    }


  return (
    <footer className='px-10 py-10 md:px-3 md:py-5  shadow-md fut'>

        <div className='flex md:flex-col md:gap-y-6'>
            <div className='w-2/12 md:w-full'>
                <div className='flex justify-between items-center md:cursor-pointer'onClick={toggleAbout}>
                    <h2 className='text-xl' >About Us</h2>
                    <BsChevronDown className={about?'hidden md:block font-bold rotate-180':'hidden md:block font-bold'} size={25} />

                </div>
                 <ul className='flex flex-col mt-5 tracking-wider gap-y-5 text-[#00003A] font-semibold md:hidden'>
                            <Link to={'/'} className='hover:text-[#1e3932] transition duration-100 hover:duration-100'>Our Company</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Our Coffee</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Stories and News</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Starbucks Archive</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Investor Relations</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Customer Service</Link>
                        </ul>
                {
                    about &&
                    <div className={about?'relative max-h-60  overflow-hidden':'relative max-h-0 bg-black overflow-hidden'}>
                        <ul className='flex flex-col mt-5 tracking-wider gap-y-5 text-[#00003A] font-semibold'>
                            <Link to={'/'} className='hover:text-[#1e3932] transition duration-100 hover:duration-100'>Our Company</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Our Coffee</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Stories and News</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Starbucks Archive</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Investor Relations</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Customer Service</Link>
                        </ul>
                    </div>
                }
            </div>
{/* career */}
            <div className='w-2/12 md:w-full'>
                <div className='flex justify-between items-center md:cursor-pointer'onClick={toggleCareer}>
                    <h2 className='text-xl' >Careers</h2>
                    <BsChevronDown className={career?'hidden md:block font-bold rotate-180':'hidden md:block font-bold'} size={25} />
                </div>
                  <ul className='flex  flex-col mt-5 tracking-wider gap-y-5 font-semibold md:hidden'>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Culture and Values</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Inclusion,Diversity, and Equity</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">College Achievement Plan</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Alumni Community</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">U.S. Careers</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">International Careers</Link>
                    </ul>

                {
                career &&
                    <div className={career?'relative max-h-60  overflow-hidden':'relative max-h-0 bg-black overflow-hidden'}>
                        <ul className='flex  flex-col mt-5 tracking-wider gap-y-5 font-semibold'>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Culture and Values</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Inclusion,Diversity, and Equity</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">College Achievement Plan</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Alumni Community</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">U.S. Careers</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">International Careers</Link>
                        </ul>
                    </div>
                }
            </div>

            {/* social */}

            <div className='w-2/12 md:w-full'>
                <div className='flex justify-between items-center md:cursor-pointer' onClick={toggleSocial}>
                    <h2 className='text-xl'>Social Impact</h2>
                    <BsChevronDown className={social?'hidden md:block font-bold rotate-180':'hidden md:block font-bold'} size={25} />
                </div>
                 <ul className='flex flex-col mt-5 tracking-wider gap-y-5 font-semibold md:hidden'>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">People</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Planet</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Environmental and Social impact Reporting</Link>
                    </ul>

            {   social &&
                <div className={social?'relative max-h-60  overflow-hidden':'relative max-h-0 bg-black overflow-hidden'}>
                    <ul className='flex flex-col mt-5 tracking-wider gap-y-5 font-semibold'>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">People</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Planet</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Environmental and Social impact Reporting</Link>
                    </ul>
                </div>
            }
            </div>

{/* business */}
            <div className='w-2/12 md:w-full'>
                <div className='flex justify-between items-center md:cursor-pointer' onClick={toggleBusiness}>
                    <h2 className='text-xl'>For Business Partners</h2>
                    <BsChevronDown className={business?'hidden md:block font-bold rotate-180':'hidden md:block font-bold'} size={25} />
                </div>
                 <ul className='flex flex-col mt-5 tracking-wider gap-y-5 font-semibold md:hidden'>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Landlord Support Center</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Suppliers</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Corporate Gift Card Sales</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Office and Foodservice Coffee</Link>
                 </ul>
                {business &&
                    <div className={business?'relative max-h-60  overflow-hidden':'relative max-h-0 bg-black overflow-hidden'}>
                        <ul className='flex flex-col mt-5 tracking-wider gap-y-5 font-semibold'>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Landlord Support Center</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Suppliers</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Corporate Gift Card Sales</Link>
                            <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Office and Foodservice Coffee</Link>
                        </ul>
                    </div>
                }
            </div>

{/* active */}
            <div className='w-2/12 md:w-full'>
                <div className='flex justify-between items-center md:cursor-pointer' onClick={toggleActive}>
                    <h2 className='text-xl'>Order and Pickup</h2>
                    <BsChevronDown className={active?'hidden md:block font-bold rotate-180':'hidden md:block font-bold'} size={25} />
                </div>
                 <ul className='flex flex-col mt-5 tracking-wider gap-y-5 font-semibold md:hidden '>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Order on the App</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Order on the Web</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Delivery</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Order and Pickup Option</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Explore and Find Coffee for Home</Link>
                    </ul>
                {
                active &&
                <div className={active?'relative max-h-60  overflow-hidden':'relative max-h-0 bg-black overflow-hidden'}>
                    <ul className='flex flex-col mt-5 tracking-wider gap-y-5 font-semibold '>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Order on the App</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Order on the Web</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Delivery</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Order and Pickup Option</Link>
                        <Link to={'/'} className="hover:text-[#1e3932] transition duration-100 hover:duration-100'">Explore and Find Coffee for Home</Link>
                    </ul>

                </div>
                }
            </div>
        </div>

        <hr  className='mt-8'/>

      <div className='flex gap-x-3 md:gap-x-1 mt-3 w-full'>
        <div className=' p-2 rounded-full icon cursor-pointer'>
            <FaSpotify size={30}/>
        </div>
        <div className=' p-2 rounded-full icon cursor-pointer'>
            <BsFacebook size={30}/>
        </div>
        <div className=' p-2 rounded-full icon cursor-pointer'>
            <BsPinterest size={30}/>
        </div>
        <div className=' p-2 rounded-full icon cursor-pointer'>
            <AiOutlineInstagram size={30}/>
        </div>
        <div className=' p-2 rounded-full icon cursor-pointer'>
            <SiYoutube size={30}/>
        </div>
        <div className=' p-2 rounded-full icon cursor-pointer'>
            <AiOutlineTwitter size={30}/>
        </div>
      </div>

      <div className='flex gap-x-6 md:gap-y-4 mt-5 md:flex-col'>
        <Link className='hover:underline'>Privacy Policy</Link>
        <span className='md:hidden'>|</span>
        <Link className='hover:underline'>Terms of Use</Link>
        <span className='md:hidden'>|</span>
        <Link className='hover:underline'>CA Supply Chain Act</Link>
        <span className='md:hidden'>|</span>
        <Link className='hover:underline'>Cookie Preferences</Link>
      </div>

        <div className='mt-5 copy-right'>
            <small className='font-semibold'>© 2022 Starbucks Coffee Company. All rights reserved.</small>
        </div>

    </footer>
  )
}

export default Footer