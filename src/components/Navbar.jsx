import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (

        <>
            <section className='absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center z-50 w-full pt-4'>
                <ul className='bg-[#fff] flex items-center justify-center gap-2 xl:gap-3 px-1 xl:px-4 2xl:px-[24px] ml-3 text-white rounded-[30px] h-[40px] xl:h-[50px] pointer-events-auto'>
                    <li className=''>
                        <NavLink to="/" className={({ isActive }) => `px-2 xl:px-3 py-2 nav_link text-[10px] xl:text-[14px] hover:text-[#fff] hover:bg-[#411259] transform hover:rounded-[30px] transition-all duration-500 ${isActive ? "active" : "text-[#411259]"}`}>Home</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to="/about" className={({ isActive }) => `px-2 xl:px-3 py-2 nav_link text-[10px] xl:text-[14px] leading-none hover:text-[#fff] hover:bg-[#411259] transform hover:rounded-[30px] transition-all duration-500 ${isActive ? "active" : "text-[#411259]"}`}>About Us</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to="/services" className={({ isActive }) => `px-2 xl:px-3 py-2 nav_link text-[10px] xl:text-[14px] leading-none hover:text-[#fff] hover:bg-[#411259] transform hover:rounded-[30px] transition-all duration-500 ${isActive ? "active" : "text-[#411259]"}`}>Professional Services</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to="/events" className={({ isActive }) => `px-2 xl:px-3 py-2 nav_link text-[10px] xl:text-[14px] leading-none hover:text-[#fff] hover:bg-[#411259] transform hover:rounded-[30px] transition-all duration-500 ${isActive ? "active" : "text-[#411259]"}`}>Events</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to="/client-voice" className={({ isActive }) => `px-2 xl:px-3 py-2 nav_link text-[10px] xl:text-[14px] leading-none hover:text-[#fff] hover:bg-[#411259] transform hover:rounded-[30px] transition-all duration-500 ${isActive ? "active" : "text-[#411259]"}`}>Client's Voices</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to="/career" className={({ isActive }) => `px-2 xl:px-3 py-2 nav_link text-[10px] xl:text-[14px] leading-none hover:text-[#fff] hover:bg-[#411259] transform hover:rounded-[30px] transition-all duration-500 ${isActive ? "active" : "text-[#411259]"}`}>Career</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to="/contact" className={({ isActive }) => `px-2 xl:px-3 py-2 nav_link text-[10px] xl:text-[14px] leading-none hover:text-[#fff] hover:bg-[#411259] transform hover:rounded-[30px] transition-all duration-500 ${isActive ? "active" : "text-[#411259]"}`}>Contact Us</NavLink>
                    </li>
                </ul>
            </section>

            <button
                onClick={() => setOpen(true)}
                className="flex items-center justify-center md:hidden relative text-[#411259]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div
                className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-40 p-4 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close button */}
                <button onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-[#411259]"
                >
                    ✕
                </button>

                {/* Drawer Nav Links */}
                <ul className="flex flex-col gap-3 mt-10">
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/about', label: 'About Us' },
                        { to: '/services', label: 'Professional Services' },
                        { to: '/events', label: 'Events' },
                        { to: '/client-voice', label: "Client's Voices" },
                        { to: '/career', label: 'Career' },
                        { to: '/contact', label: 'Contact Us' },
                    ].map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-2 rounded text-[14px] transition-all ${isActive ? 'bg-[#411259] text-white' : 'text-[#411259] hover:bg-[#411259] hover:text-white'
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default Navbar