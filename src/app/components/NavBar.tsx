'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";




export default function NavBar(){

    const [showMenu, setShowMenu] = useState(false);

    return (
        // wrapper
        <div className="bg-[#dadfe1]">
            {/* NavBar */}
            <div className="max-w-[1200px] p-3 md:px-6 mx-auto flex items-center justify-between">
                <div className="h-16 w-16 relative">
                    <Image src='/logo.jpg' alt='' fill className="rounded-full bg-black"/>
                </div>
                {/* links */}
                <div className="hidden sm:flex flex-1 gap-10 justify-end items-center">
                    <div className=" gap-4 justify-end flex">
                        <Link href='' className='font-semibold text-lg transition hover:text-black text-gray-600'>Home</Link>
                        <Link href='' className='font-semibold text-lg transition hover:text-black text-gray-600'>Shop</Link>
                        <Link href='' className='font-semibold text-lg transition hover:text-black text-gray-600'>About</Link>
                        <Link href='' className='font-semibold text-lg transition hover:text-black text-gray-600'>Contact</Link>
                    </div>
                    <div className="flex gap-4">
                        <button className="hover:opacity-50">
                            <FaRegUserCircle  size={28}/>
                        </button>
                        <button className="hover:opacity-50 ">
                            <IoCartOutline size={28} />
                        </button>
                    </div>
                </div>
                {/* user & cart */}
                <div className="sm:hidden">
                    <button className="hover:opacity-70" onClick={()=>setShowMenu(true)}>
                        <RiMenu3Line size={30}/>
                    </button>
                </div>
            </div>

            {/* responsive menu */}
            <div style={{
                top:showMenu?'0':'-1000px',
                transition:'0.3s'
            }} className="z-[9999] fixed left-0 w-full h-[100vh] p-2 bg-gray-200">
                <div className="flex justify-end p-4">
                    <button onClick={()=>setShowMenu(false)} className="hover:opacity-70">
                        <MdOutlineCancel size={35}/>
                    </button>    
                </div>

                <div className="flex flex-col items-center gap-7 mt-14">
                    <Link href='' className='font-semibold hover:scale-90 text-2xl transition hover:text-black text-gray-600'>Home</Link>
                    <Link href='' className='font-semibold hover:scale-90 text-2xl transition hover:text-black text-gray-600'>Shop</Link>
                    <Link href='' className='font-semibold hover:scale-90 text-2xl transition hover:text-black text-gray-600'>About</Link>
                    <Link href='' className='font-semibold hover:scale-90 text-2xl transition hover:text-black text-gray-600'>Contact</Link>
                    <Link href='' className='font-semibold hover:scale-90 text-2xl transition hover:text-black text-gray-600'>Profile</Link>
                </div>
            </div>


            {/* responsive shopping cart */}
            <div className="z-[999] sm:hidden hover:opacity-90 cursor-pointer fixed bottom-6 right-6 bg-[#dadfe1] rounded-full w-16 h-16 flex justify-center items-center">
                <button>
                    <IoCartOutline size={40} />
                </button>
            </div>
        </div>
    )
}

