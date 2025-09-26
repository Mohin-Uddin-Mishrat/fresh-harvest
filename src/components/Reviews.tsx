import Image from 'next/image'
import React from 'react'
import model from '../../public/handsome-man-with-headphones-standing-white-wall.jpg'
export default function Reviews() {
    return (
        <div className='mx-2 lg:mx-28 '>
            {/* intro */}
            <div className=" mx-auto text-center p-6">
                <span className="inline-block bg-green-100 text-green-700 font-medium px-4 py-1 rounded-full text-sm">
                    Testimonial
                </span>

                <h2 className=" text-3xl md:text-5xl font-semibold text-gray-900 mt-4">
                    What Our Customer Says
                </h2>

                <p className="mt-2 text-[12px] md:text-[14px] text-gray-600">
                    We pride ourselves on offering a wide variety of fresh and flavorful fruits,
                    vegetables, and salad ingredients.
                </p>
            </div>
            {/* reviews */}
            <div className='flex lg:flex-row flex-col items-center justify-center gap-10 lg:gap-20'>
                {/* leftside content */}
                <div className="relative w-48 h-80 mb-3 rounded-full bg-gray-50  overflow-hidden">
                    <Image
                        src={model}
                        alt={"model"}
                        fill
                        className="object-cover rounded-full hover:scale-105 transition-transform duration-200"
                    />
                </div>
                {/*  rIGHT SIDE CONTENT */}
                <div className='bg-[#F4F6F6] rounded-lg px-8 py-10 w-full md:w-1/2 '>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem ipsam deserunt, ducimus distinctio laborum quasi. Ducimus voluptate iusto reiciendis? Soluta perspiciatis, ipsa nemo labore repellat architecto consectetur ut, animi voluptatibus inventore quo fugiat itaque quae, debitis minima eos? Dicta nam saepe suscipit officiis, hic veniam dolore pariatur neque ipsam.</p>
                </div>
            </div>
        </div>
    )
}
