import React from 'react'
import HomeNavbar from '../Components/HomeNavbar'
import '../assets/css/Home.css'
import Footer from '../Components/Footer'

const Home = ({toggleMobileMenu}) => {
  return (
    <>
        <HomeNavbar toggleMobileMenu={toggleMobileMenu}/>
        <main className='px-10 md:px-0 md:py-5 py-10 flex flex-col gap-y-7  ' onScroll={false}>
            <div className='flex md:flex-col'>
                <img src="img/first.jpg" alt="" className='w-6/12 md:w-full' />
                    <div className='w-6/12 md:w-full bg-[#d4e9e2] flex justify-center items-center flex-col'>
                        <article className=' w-8/12  md:w-full md:px-3 md:py-5 flex justify-center items-center flex-col'>
                                <h2 className='text-2xl font-bold text-center'>Fall at your fingertips</h2>
                                <p className='text-center mt-8 font-semibold text-lg  md:tracking-normal'>Ordering your fall favorite is a snap with the app. Join Starbucks<span className='text-xs'>®</span>  Rewards and tap into fall. </p>
                                <button className='font-bold border-[#1e3932] border rounded-2xl px-4 py-1 mt-8 transition duration-200 hover:duration-200'>
                                    Join now
                                </button>
                        </article>
                    </div>
            </div>

            <div className='flex  md:flex-col-reverse'>
                    <div className='w-6/12 md:w-full bg-[#006241] text-[#f1f8f6] flex justify-center items-center flex-col'>
                        <article className=' w-8/12 md:w-full md:px-3 md:py-5 flex justify-center items-center flex-col'>
                                <h2 className='text-2xl font-bold'>PSL for your BFF</h2>
                                <p className='text-center mt-8 font-semibold text-lg'>Treat your bestie to a Pumpkin Spice Latte and more with a thoughtful gift card.</p>
                                <button className='font-bold border-[#f1f8f6] border rounded-2xl px-4 py-1 mt-8 transition duration-200 hover:duration-200'>
                                    Buy now
                                </button>
                        </article>
                    </div>
                <img src="img/second.jpg" alt="" className='w-6/12 md:w-full' />
            </div>

            <div className='flex md:flex-col'>
                <img src="img/third.jpg" alt="" className='w-6/12 md:w-full' />
                    <div className='w-6/12 md:w-full bg-[#006241] text-[#f1f8f6] flex justify-center items-center flex-col'>
                        <article className=' w-11/12 md:w-full md:py-5 flex justify-center items-center flex-col'>
                                <h2 className='text-5xl md:text-2xl font-bold  text-center tracking-wider '>Welcome home, pumpkin</h2>
                                <p className='text-center mt-8 font-semibold tracking-widest text-2xl md:text-xl'>Fall favorites return with the blissful Pumpkin Spice Latte and smooth Pumpkin Cream Cold Brew. </p>
                                <button className='font-bold border-[#f1f8f6] border rounded-2xl px-4 py-1 mt-8 transition duration-200 hover:duration-200'>
                                    Learn more
                                </button>
                        </article>
                    </div>
            </div>
       
            <div className='flex  md:flex-col-reverse'>
                    <div className='w-6/12 md:w-full bg-[#006241] text-[#f1f8f6] flex justify-center items-center flex-col'>
                        <article className=' w-11/12 md:px-3 md:py-5 md:w-full flex justify-center items-center flex-col'>
                                <h2 className='text-5xl md:text-2xl font-bold  text-center tracking-wider '>Layers of baked apple yum</h2>
                                <p className='text-center mt-8 font-semibold tracking-widest text-2xl md:text-xl'>Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso. </p>
                                <button className='font-bold border-[#f1f8f6] border rounded-2xl px-4 py-1 mt-8 transition duration-200 hover:duration-200'>
                                    Learn more
                                </button>
                        </article>
                    </div>
                <img src="img/fourth.jpg" alt="" className='w-6/12 md:w-full' />
            </div>

            <div className='flex md:flex-col'>
                <img src="img/fifth.jpg" alt="" className='w-6/12 md:w-full' />
                    <div className='w-6/12 md:w-full  md:px-3 md:py-5 bg-[#006241] text-[#f1f8f6] flex justify-center items-center flex-col'>
                        <article className=' w-11/12 md:w-full flex justify-center items-center flex-col'>
                                <h2 className='text-5xl md:text-2xl font-bold  text-center tracking-wider '>Falling for chai</h2>
                                <p className='text-center mt-8 font-semibold tracking-widest text-2xl md:text-xl'>Cozy up to Chai Tea Latte’s warm spices balanced with creamy milk. </p>
                                <button className='font-bold border-[#f1f8f6] border rounded-2xl px-4 py-1 mt-8 transition duration-200 hover:duration-200'>
                                    Order now
                                </button>
                        </article>
                    </div>
            </div>

              <div className='flex md:flex-col-reverse bg-black'>
                    <div className='w-6/12  md:w-full md:px-3 md:py-5 bg-[#006241] text-[#f1f8f6] flex justify-center items-center flex-col'>
                        <article className=' w-11/12 md:w-full flex justify-center items-center flex-col'>
                                <h2 className='text-5xl md:text-2xl font-bold  text-center tracking-wider '>Picks of the patch</h2>
                                <p className='text-center mt-8 font-semibold tracking-widest text-2xl md:text-xl'>Choose a comforting classic: Pumpkin Cream Cheese Muffin, Pumpkin & Pepita Loaf or Pumpkin Scone. </p>
                                <button className='font-bold border-[#f1f8f6] border rounded-2xl px-4 py-1 mt-8 transition duration-200 hover:duration-200'>
                                    Learn more
                                </button>
                        </article>
                    </div>
                <img src="img/sixth.jpg" alt="" className='w-6/12 md:w-full' />
            </div>

            {/* <div className='flex md:flex-col '>
                <img src="img/seventh.jpg" alt="" className='w-6/12 md:w-full' />
                    <div className='w-6/12 bg-[#d4e9e2] text-[#1e3932] flex justify-center items-center flex-col'>
                        <article className=' w-11/12 md:w-full md:px-3 md:py-5 flex justify-center items-center flex-col'>
                                <h2 className='text-2xl font-bold  text-center tracking-wider '>Fall faves at your fingertips</h2>
                                <p className='text-center mt-8 font-semibold tracking-widest'>Order Starbucks® delivery with Uber Eats today.* </p>
                                <button className='font-bold border-[#1e3932] border rounded-2xl px-4 py-1 mt-8 transition duration-200 hover:duration-200'>
                                    Order now
                                </button>
                        </article>
                    </div>
            </div> */}
       
            {/* <div className='flex justify-center'>
                <article className='w-6/12'>
                    <p className='text-center'>
                        *Menu limited. Restricted delivery area. Available in participating locations only. Fees subject to change. Prices for Starbucks® items purchased through Uber Eats may be higher than posted in stores or as marked. See the Uber Eats app for details.
                    </p>
                </article>
            </div> */}
        </main>
        <Footer/>
    </>
  )
}

export default Home