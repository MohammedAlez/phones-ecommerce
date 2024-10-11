import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

import SectionTitle from "../SectionTitle";

const data=[
    {
        image:'/phones-category.png',
        title:'Mobile Phones',
        id:1
    },
    {
        image:'/laptops-category.jpg',
        title:'Laptops',
        id:2
    },
    {
        image:'/accessories-category.jpg',
        title:'Accessories',
        id:3
    },
]


export default function Categories(){


    return (
        <div className="mt-20">
            <SectionTitle title="Categories" subTitle=""/>
            <div className="md:flex gap-6">
                {data.map(e=><Category key={e.id} item={e}/>)}
            </div>
        </div>
    )
}



const Category=({item}:{item:any})=>{

    return (
        <div className="mb-6 md:mb-0 flex-1 rounded-2xl h-48 min-w-[200px] overflow-hidden relative group">
            <Image src={item.image} fill alt='' className="group-hover:scale-125 transition duration-200 object-cover "/>
            <div className="bg-black w-full h-full abaolute left-0 top-0 opacity-65 group-hover:opacity-55" />
            <div className="absolute z-[99] min-w-full left-0 top-0 h-full flex flex-col justify-between p-5">
                <h1 className="text-white text-2xl font-bold sm:text-2xl md:text-3xl">{item.title}</h1>
                <div className="">
                    <Link href={`/`} className="bg-gray-300 hover:bg-gray-100 w-11 h-11 rounded-full flex justify-center items-center ">
                        <FaArrowRight  size={26}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}