"use client"
import { Leaf, ShoppingCart, Menu, X,  } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className='fixed top-0 left-0 right-0 my-4 z-50'>
                <div className='mx-2 lg:mx-28 flex justify-between items-center   py-2  rounded-lg '>
                    {/* brand */}
                    <div className="flex items-center ">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                            <Leaf className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Fresh Harvests</h3>
                    </div>

                    {/* desktop menu */}
                    <ul className='hidden lg:flex gap-5 items-center'>
                       <Link href="/"> <li className='hover:text-green-600 cursor-pointer transition-colors'>Home</li></Link>
                        <li className='hover:text-green-600 cursor-pointer transition-colors'>Shop</li>
                        <li className='hover:text-green-600 cursor-pointer transition-colors'>About Us</li>
                        <li className='hover:text-green-600 cursor-pointer transition-colors'>Blog</li>
                    </ul>

                    <div className='flex items-center gap-5'>
                        {/* cart - hidden on mobile */}
                        <div className='hidden md:flex items-center gap-2 hover:text-green-600 cursor-pointer transition-colors'>
                            <ShoppingCart size={20} />
                            <span>Cart</span>
                        </div>

                        {/* sign in button - hidden on mobile */}
                        <button className='hidden md:block text-yellow-400 px-4 py-1 border border-yellow-500 rounded-lg hover:bg-yellow-50 transition-colors'>
                            Sign In
                        </button>

                        {/* mobile menu button */}
                        <button 
                            className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu overlay */}
            <div className={`
                fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden
                ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `} onClick={toggleMenu}></div>

            {/* mobile menu sidebar */}
            <div className={`
                fixed top-0 z-96 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 lg:hidden
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className='p-6 h-full flex flex-col'>
                    {/* menu header */}
                    <div className='flex justify-between items-center mb-8'>
                        <h3 className='text-lg font-semibold'>Menu</h3>
                        <button onClick={toggleMenu} className='p-2 hover:bg-gray-100 rounded-lg'>
                            <X size={20} />
                        </button>
                    </div>

                    {/* mobile menu items */}
                    <ul className='flex flex-col gap-4 flex-1'>
                        <li className='py-3 px-4 hover:bg-green-50 rounded-lg cursor-pointer transition-colors '>
                            Home
                        </li>
                        <li className='py-3 px-4 hover:bg-green-50 rounded-lg cursor-pointer transition-colors '>
                            Shop
                        </li>
                        <li className='py-3 px-4 hover:bg-green-50 rounded-lg cursor-pointer transition-colors '>
                            About Us
                        </li>
                        <li className='py-3 px-4 hover:bg-green-50 rounded-lg cursor-pointer transition-colors '>
                            Blog
                        </li>
                    </ul>

                    {/* mobile bottom section */}
                    <div className='border-t pt-6'>
                        <div className='flex items-center gap-2 py-3 px-4 hover:bg-green-50 rounded-lg cursor-pointer transition-colors mb-3'>
                            <ShoppingCart size={20} />
                            <span>Cart</span>
                        </div>
                        <button className='w-full text-yellow-400 px-4 py-3 border border-yellow-500 rounded-lg hover:bg-yellow-50 transition-colors'>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            {/* add padding to prevent content from being hidden under fixed header */}
            <div className='h-20'></div>
        </>
    )
}