import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6';
import { PiCloverLight } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();

    const navItems = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "About",
            path: "/about",
        },
        {
            id: 3,
            name: "Contact",
            path: "/contact",
        },
        {
            id: 4,
            name: "Example",
            path: "/example",
        },

    ];

    const toggleNavbar = () => {
        setOpen(!open);
    };

    const closeNavbar = () => {
        setOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };


    // Adding eventlisteners 
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            id="navbar"
            className={`w-full h-[8ch] backdrop-blur-sm flex items-center justify-between md:px-16 sm:px-10 px-4 fixed top-0 transition-all ease-in-out duration-300 z-50 border-b border-neutral-200 ${isScrolled ? 'bg-sky-50/30 border-sky-200' : 'bg-transparent'}`}
        >

            {/* Logo section */}
            <div className="flex items-center gap-2 md:pr-16 pr-0">
                <Link to="/" className='text-lg font-semibold text-sky-700 flex items-center gap-x-2'>
                    <PiCloverLight size={24} />
                    <span>UjiCoba</span>
                </Link>
            </div>

            {/* Hamburger menu for mobile/ Toggle menu */}
            <div className="md:hidden">
                <button onClick={toggleNavbar} className="text-neutral-600 focus:outline-none">
                    <FaBars size={24} />
                </button>
            </div>

            {/* Navbar items and buttons */}
            <div className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-sky-50 border-l md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none ease-in-out duration-300 transition-transform flex-1 ${open ? "translate-x-0 " : "translate-x-full"} md:translate-x-0 z-60`}>

                {/* Logo and close icon inside toggle menu card */}
                <div className="w-full md:hidden flex items-center justify-between px-4">
                    {/* Logo */}
                    <Link to="/" className='text-lg font-semibold text-sky-700 flex items-center gap-x-2'>
                        <PiCloverLight size={24} />
                        <span>UjiCoba</span>
                    </Link>

                    {/* Close icon */}
                    <div className="md:hidden flex justify-end py-6">
                        <button onClick={closeNavbar} className="text-red-600 focus:outline-none">
                            <IoMdClose size={24} />
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-b border-neutral-300 md:hidden"></div>

                {/* Navbar Items and button */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-0">
                    {/* Navbar items */}
                    <ul className="flex flex-col md:flex-row items-center md:gap-7 gap-4 md:text-base text-lg text-neutral-700 md:font-normal font-medium">
                        {navItems.map((item) => (
                            <li 
                                key={item.id} 
                                onClick={closeNavbar} 
                                className="hover:text-sky-700 ease-in-out duration-300 cursor-pointer"
                                >
                                <Link 
                                  to={item.path} 
                                    className={`${location.pathname === item.path ? 'text-sky-700' : 'text-neutral-600'}`}
                                >
                                 {item.name}
                                </Link>
                            </li>
                         ))}
                    </ul>
{/*
                    <ul className="flex flex-col md:flex-row items-center md:gap-7 gap-4 md:text-base text-lg text-neutral-700 md:font-normal font-medium">

                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={closeNavbar}
                                className={`hover:text-sky-700 ease-in-out duration-300 ${location.pathname === item.path ? 'text-sky-700' : 'text-neutral-600'} cursor-pointer`}
                            >
                                {item.name}
                            </li>
                        ))}

                    </ul>


                    {/* Navbar buttons ///////

                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <button className="w-fit px-6 py-2 md:text-base text-xl text-neutral-800 hover:text-sky-700 eas-in-out duration-300 cursor-pointer">
                            Sign In
                        </button>

                        <button className="w-fit px-6 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-base text-neutral-50 eas-in-out duration-300 cursor-pointer">
                            Get Started
                        </button>

                    </div>
                    */}
                </div>

            </div>

        </div>
    )
}

export default Navbar