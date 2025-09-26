import Image from 'next/image'
import React from 'react'
import banner from '../../public/banner.jpg'
export default function Offers() {
    return (
        <div>
            <div className="relative w-full h-[600px] mb-3 bg-gray-50 rounded-lg overflow-hidden">
                <Image
                    src={banner}
                    alt={"banner"}
                    fill
                    className="object-cover  "
                />
                <div className='absolute top-28 left-3 lg:left-28'>
                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                        <span className="inline-block bg-green-100 text-green-700 font-medium px-4 py-1 rounded-full text-sm">
                            Special Offers
                        </span>

                        <h2 className=" text-3xl md:text-7xl font-semibold text-gray-900 mt-4">
                            Seasonal Fruite Bundle
                        </h2>
                        <h2 className=" text-2xl md:text-5xl font-semibold text-gray-900 mt-4">
                            Discount up to <span className='text-[#FF6A1A]'>80% Off</span>
                        </h2>
                        <div className='flex gap-4 my-5'>
                            <div className='p-2 lg:p-7 bg-white flex flex-col  justify-center rounded-lg'>
                                <span className='text-[40px] font-medium'>O3</span>
                                <span className='text-[18px] text-gray-600'>Days</span>
                            </div>
                            <div className='p-2 lg:p-7 bg-white flex flex-col  justify-center rounded-lg '>
                                <span className='text-[40px] font-medium'>18</span>
                                <span className='text-[18px] text-gray-600'>Hour</span>
                            </div>
                            <div className='p-2 lg:p-7 bg-white flex flex-col  justify-center rounded-lg'>
                                <span className='text-[40px] font-medium'>54</span>
                                <span className='text-[18px] text-gray-600'>Minutes</span>
                            </div>
                            <div className='p-2 lg:p-7 bg-white flex flex-col  justify-center rounded-lg '>
                                <span className='text-[40px] font-medium'>21</span>
                                <span className='text-[18px] text-gray-600'>Second</span>
                            </div>
                        </div>
                        <div>
                            <button className="flex-1 bg-[#176D38]  font-semibold text-white py-3 px-6 rounded-full  flex items-center justify-center gap-2">
                                CODE:<span className='text-[#FAC714]'>FRESH28</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
