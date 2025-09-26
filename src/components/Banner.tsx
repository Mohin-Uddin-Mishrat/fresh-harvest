import Image from 'next/image'
import React from 'react'
import banner from '../../public/banner.jpg'
import { Apple, Smartphone } from 'lucide-react'
export default function Banner() {
    return (
        <div>
            <div className="relative w-full h-screen mb-3 bg-gray-50 rounded-lg overflow-hidden">
                <Image
                    src={banner}
                    alt={"banner"}
                    fill
                    className="object-cover  "
                />
                <div className='absolute top-28 left-3 lg:left-28'>
                    <div className=" ">
                        <span className="inline bg-green-100 text-green-700 font-medium px-4 py-1 rounded-full text-sm">
                            Welcome To Fresh Food Harvest
                        </span>

                        <h2 className=" text-3xl md:text-7xl font-semibold text-gray-900 mt-4">
                            Fresh And Vegetables
                        </h2>

                        <p className='w-full lg:w-1/2 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic, porro sequi expedita dolorem quidem molestiae quis perspiciatis provident similique?</p>
                        <div>
                            <button className="flex-1 bg-[#FAC714]  font-semibold text-white py-3 px-6 rounded-lg  flex items-center justify-center gap-2">
                                Shop Now
                            </button>
                        </div>

                        {/* App Download Buttons */}
                        <div className=" my-4  flex gap-2 md:gap-4">
                            <button className="flex items-center bg-black text-white px-2 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors w-full sm:w-auto">
                                <Apple className="w-5 h-5 mr-2" />
                                <div className="text-left">
                                    <div className="text-xs opacity-75">Download on the</div>
                                    <div className="font-semibold text-sm">App Store</div>
                                </div>
                            </button>

                            <button className="flex items-center bg-black text-white px-4  rounded-lg text-sm hover:bg-gray-800 transition-colors w-full sm:w-auto">
                                <Smartphone className="w-5 h-5 mr-2" />
                                <div className="text-left">
                                    <div className="text-xs opacity-75">Get it on</div>
                                    <div className="font-semibold">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
