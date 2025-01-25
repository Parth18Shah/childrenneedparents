'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from "next/navigation";

const navItems = [
    {
        id: "home",
        label: "Home",
        href: "/home",
    },
    {
        id: "about",
        label: "About",
        href: "/about",
    },
    {
        id: "settings",
        label: "Settings",
        href: "/settings",
    },
];

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className='bg-blue-400'>
            <nav className="mx-5 pb-4 md:pb-8 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-lg md:text-3xl font-bold text-spotify-green mt-4"
                >
                    webapp
                </Link>
                <ul className="flex  justify-end items-center gap-4 mt-4">
                    {navItems.map((eachItem) => (
                        <li key={eachItem.id}>
                            <Link
                                href={eachItem.href}
                                className={`${pathname === eachItem.href ? "text-spotify-green" : "text-spotify-gray"} text-sm md:text-lg font-medium`}
                            >
                                {eachItem.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

    );
};

export default Navbar