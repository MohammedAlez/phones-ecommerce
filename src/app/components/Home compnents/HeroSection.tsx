'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const data=[
    {
        id:1,
        title:'Discover the Latest Smartphones',
        desc:'Shop the newest releases from top brands like Apple, Samsung, and Google. Stay connected with cutting-edge technology and unbeatable prices.',
        image:'/sliders/phones.png',
    },
    {
        id:2,
        title:'Powerful Laptops for Every Need',
        desc:'From gaming rigs to professional workstations, find the perfect laptop to match your style and performance requirements.',
        image:'/sliders/laptops.png',
    },
    {
        id:3,
        title:'Enhance Your Tech Experience with Accessories',
        desc:'Explore our range of accessories, from headphones to chargers, designed to complement your devices and make life easier.',
        image:'/sliders/accessories.png',
    },
]
export default function HeroSection(){


    return (
        <div className="py-6 ">
            <div className="bg-gradient-to-r from-black to-[#363636] rounded-xl">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable:true
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {data.map(e=>{
                        return (
                            <SwiperSlide key={e.id}>
                                <SliderComponent item={e}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}




const SliderComponent=({item}:{item:any})=>{


    return (
        <div className="#5d2c9d p-5 py-14 md:p-16 lg:px-24">
            <div className="flex flex-col-reverse gap-8 md:flex-row">
                <div className="flex-1 text-white">
                    <div className="text-2xl lg:text-3xl font-bold my-4">
                        {item.title}
                    </div>
                    <p className="text-[#ddd] font-medium lg:text-xl">
                        {item.desc}
                    </p>
                    <Link href="/" className="p-3 px-4 rounded-2xl font-medium mt-4 inline-block bg-[#ae6bde] hover:bg-[#ad60e4] text-sm  " >Shop Now</Link>
                </div>
                <div className="flex-1 ">
                    <div className="w-full h-[280px] md:h-[300px] relative">
                        <Image src={item.image} fill alt="" className="object-contain md:h-full rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}