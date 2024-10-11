import Image from "next/image";
import { FaPlus } from "react-icons/fa6";











export default function ProductCard({product}:{product:any}){

    return (
        <div className="relative overflow-hidden rounded-2xl bg-[#f6f6f6] p-3 group">
            <div className="relative w-full sm:h-[200px] h-[170px] ">
                <Image src={product.image} alt='' fill className="object-cover rounded-2xl bg-gray-200"/>
            </div>
            <div className="mt-2">
                <span className="text-gray-500 text-sm inline-block mb-1">{product.category}</span>
                <h1 className="font-medium text-sm sm:text-base">{product.title}</h1>
                <div className="flex gap-2 items-end">
                    <span className="text-green-600 ">{product.discountPrice}Da</span>
                    <del className="text-gray-600 text-sm">{product.price}Da</del>
                </div>
            </div>
            <div style={{transition:'0.1s'}} className="cursor-pointer h-8 w-8 -bottom-10 group-hover:bottom-3 opacity-0 group-hover:opacity-100 right-3 transition flex justify-center items-center text-white rounded-full bg-[#ae4ef1] absolute ">
                <FaPlus size={20} />
            </div>
        </div>
    )
}