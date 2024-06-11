"use client"

import { Button } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
const NavBarComponent = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-xl font-bold">
                            YourLogo
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <Link href="about" className="hover:underline">
                            About
                        </Link>
                        <Link href="/blog" className="hover:underline">
                            Blog
                        </Link>
                        <Link href="/contact" className="hover:underline">
                            Contact
                        </Link>


                    </div>
                    <div className="mt-4 md:mt-0">
                        <Button className='bg-indigo-800'>
                            <Link href="/auth/login">
                                Login
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default NavBarComponent;
