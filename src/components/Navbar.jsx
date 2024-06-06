import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

import { Link } from 'react-scroll';
// react icons
import { FaXmark, FaBars } from "react-icons/fa6";





const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    //navitems array
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Service", path: "service"},
        {link: "About", path: "about"},
        {link: "Product", path: "product"},
        {link: "Testimonial", path: "testimonial"},
        {link: "Blogs", path: "blogs"},
    ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed  top-0 left-0 right-0'>
        <nav className={`py-4 px-4 lg:px-14 ${isSticky ? "sticky top-0 left-0 right-0 border-b shadow bg-white duration-300" : ""}`}>
            <div className='flex items-center justify-between gap-8'>
                <a className='flex items-center space-x-3' href="">
                    <img className='w-full' src={logo} alt="" />
                </a>
            
                {/* nav items for large device */}
                <ul className='hidden md:flex items-center space-x-12'>
                    {
                        
                        navItems.map(
                            ({ link, path }, index) => (
                                <Link className='text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer' to={path} spy={true} offset={-100}
                                smooth={true} duration={500}>{link}</Link>
                            )
                        )
                    }
                </ul>
                {/* btn for large device */}
                <div className='hidden lg:flex items-center gap-3'>
                    <a className='text-brandPrimary hover:text-gray900' href="/">Login</a>
                    <button className='bg-brandPrimary text-white py-2 px-4 rounded transition-all duration-300 hover:bg-neutralDGrey'>Sign up</button>
                </div>

                {/* menu button for only mobile devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} >
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6' />)
                        }
                    </button>

                </div>
            </div>
            {/* nav items for mobile */}
            <div className={ `space-y-4 mt-16  py-7 px-4 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}` }>

                {
                    navItems.map(
                        ({link, path}) => (
                            <Link className='block text-white hover:text-brandPrimary first:font-medium' to={path} spy={true} offset={-100}
                            smooth={true} duration={500} key={path}>{link}</Link>
                        )

                    )
                }

            </div>

        </nav>
    </header>
  )
}

export default Navbar
