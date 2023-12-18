import React from 'react'
import { Link } from 'react-scroll' 


const Navbar = () => {
  return (
    <div className='fixed w-full z-10'>
        <div>
            <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div className='flex flex-row items-center cursor-pointer'>
                    <h1 className='text-3xl font-semibold'>Sami.</h1>
                </div>

                <nav className='hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
                    <Link   to='home'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                    >
                        Home
                    </Link>
                    <Link
                            to='about'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                    >
                        About Me
                    </Link>
                    <Link
                            to='services'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                    >
                        Services
                    </Link>
                    <Link
                            to='education'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                    >
                        Education
                    </Link>
                    <Link
                            to='experience'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                    >
                        Experience
                    </Link>
                    <Link
                            to='portfolio'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='cursor-pointer'
                    >
                        Portfolio
                    </Link>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar