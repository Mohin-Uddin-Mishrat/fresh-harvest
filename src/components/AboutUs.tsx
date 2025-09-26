import React from 'react'
import model from '../../public/model.png'
import Image from 'next/image'
export default function AboutUs() {
    return (
        <div className='mx-2 lg:mx-28 grid grid-cols-1 lg:grid-cols-2 my-5'>
            {/* IMAGE SECTION */}
            <div className="relative w-full h-80 lg:h-[600px] mb-3  rounded-lg overflow-hidden">
                <Image
                    src={model}
                    alt={"model image"}
                    fill
                    className="object-contain rounded-lg hover:scale-105 transition-transform duration-200"
                />
            </div>
            <div className='flex items-center'>
                <div className=" mx-auto  ">
                    <span className="inline-block bg-green-100 text-green-700 font-medium px-4 py-1 rounded-full text-sm">
                        About Us
                    </span>

                    <h2 className=" text-3xl md:text-5xl font-semibold text-gray-900 mt-4">
                        About Fresh Harvest
                    </h2>

                    <p className="mt-2 text-[12px] md:text-[14px] text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dolore, fuga dolor modi suscipit a, incidunt aperiam quidem omnis, aut accusantium tempora optio quis. Aliquid exercitationem eum magni nisi ipsum sit tempore corporis voluptas quas veniam? Magni commodi dolore, fugiat nisi tempore repudiandae dolor delectus pariatur cupiditate! Dolorum, similique quasi!
                    </p>
                </div>
            </div>
        </div>
    )
}
