"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    const links = [
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        },
        {
            title: "Gallery",
            path: "/gallery"
        }
    ]

    return (
        <div className='bg-orange-400 py-8 flex items-center'>
            <div className='flex-grow'>
                <h1 className='font-bold text-purple-500 text-2xl'>Next Meal</h1>
            </div>
            <div className='font-bold text-2xl space-x-4 flex justify-center flex-grow'>
            {
                links.map((link)=> <Link className={`${pathName == link.path ? "text-blue-500" : ""}`} href={link.path} key={link.path}>{link.title}</Link>)
            }
            </div>
        </div>
    );
}

export default Navbar;
