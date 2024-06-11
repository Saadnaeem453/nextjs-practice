"use client"
import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <a href="/" className="text-xl font-bold">
                            YourLogo
                        </a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline">
                            Blog
                        </a>
                        <a href="#" className="hover:underline">
                            Terms
                        </a>
                        <a href="#" className="hover:underline">
                            Services
                        </a>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
