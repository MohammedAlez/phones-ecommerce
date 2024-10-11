import { Facebook, Instagram, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";




export default function Footer(){
    return (
        <div className='bg-[#171717]'>
            <div className="max-w-[1200px] mx-auto px-6 flex-col lg:flex-row flex gap-10 py-16">
                {/* first block  */}
                <div className="flex-1 lg:min-w-[300px] bg-[#ae4ef1] p-6 text-white -mt-28 py-10">
                    <h1 className="sm:text-center lg:text-start font-medium text-2xl lg:text-3xl">Get In Touch</h1>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:flex-col mt-6">
                        <div className="flex gap-3 my-2">
                            <MapPin size={35}/>
                            <div className="">
                                <h2 className="font-medim text-xl mb-2">Address</h2>
                                <address className='text- lg:max-w-[220px]'>08 Rue Street, Ouargla</address>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <PhoneCall size={30}/>
                            <div className="">
                                <h2 className="font-medim text-xl mb-2">Call us</h2>
                                <address className='text- lg:max-w-[220px]'>+213658005590</address>
                                {/* <address className='text- lg:max-w-[220px]'>888-7000-212 (Reservation)</address> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row flex-3 gap-10">
                    <div className="flex gap-10  flex-1 flex-coll">
                        {/* second block */}
                        <div className=" text-white flex-1">
                            <h2 className="font-bold lg:text-xll mb-6 sm:text-lg lg:min-w-[147px]">About us</h2>
                            <ul className="flex flex-col gap-2">
                                <li className="hover:text-[#ae4ef1] transition text-sm lg:text-base">
                                    <Link href='/about'>Our history</Link>
                                </li>
                                <li className="hover:text-[#ae4ef1] transition text-sm lg:text-base">
                                    <Link href='/contact'>Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        {/* third block */}
                        <div className=" text-white flex-1">
                            <h2 className="font-bold lg:text-xll mb-6 sm:text-lg min-w-[200px]">Links</h2>
                            <ul className="flex flex-col gap-2">
                                <li className="hover:text-[#ae4ef1] transition text-sm lg:text-base">
                                    <Link href='/shop'>Shop </Link>
                                </li>
                                <li className="hover:text-[#ae4ef1] transition text-sm lg:text-base">
                                    <Link href='/services'>Services</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* forth block */}
                    <div className="flex-1 text-white">
                    <div className="">
                        <div className="mx-auto md:ml-0 w-20 h-20 md:w-28 md:min-h-28 relative md:mx-auto rounded-full overflow-hidden">
                            <Image src='/logo.jpg' fill alt='' className="" />
                        </div>
                    </div>
                        <p className="py-6 md:text-start max-w-full text-center text-sm">
                        Welcome to out shop, your one-stop destination for the latest phones, laptops, and accessories. We offer a wide range of top-quality tech products at competitive prices.
                        </p>
                        <div className="flex justify-center md:justify-start gap-1">
                            <Link href='https://web.facebook.com/' className="hover:scale-95 transition w-[30px] h-[30px] flex justify-center items-center border border-gray-300">
                                <Facebook size={18}/>
                            </Link>
                            <Link href='https://www.instagram.com/' className="hover:scale-95 transition w-[30px] h-[30px] flex justify-center items-center border border-gray-300">
                                <Instagram size={18}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 w-full h-[0.6px] "></div>
            <div className="max-w-[1200px] mx-auto text-white p-6 text-center text-sm md:text-base">
                Copyrights © 2024, All rights reserved.
            </div>
        </div>
    )
}