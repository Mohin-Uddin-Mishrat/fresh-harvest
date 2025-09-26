"use client"
import { Star,  Heart, ShoppingCart } from 'lucide-react';
import { useGetAllProductsQuery, useGetSingelProductQuery } from '@/redux/slices/api/productApiSlice'
import React from 'react'
import Image from 'next/image';
import Spinner from '@/heplers/Spinner';
import { SpinnerColor, SpinnerSize } from '@/types/enums';
import Link from 'next/link';
import { IProduct } from '@/types/product';
interface Props {
    productId: string;
}
export default function ProductDetails({ productId }: Props) {
    const {
        data: productDetails,
        isLoading: isProductLoading,
    } = useGetSingelProductQuery(productId);

    const {
        data: products,
        isLoading: isProductsLoading,
    } = useGetAllProductsQuery();
    if (isProductLoading || isProductsLoading) {
        return <div className='flex justify-center items-center h-screen'><Spinner color={SpinnerColor.BLUE} size={SpinnerSize.LARGE}></Spinner></div>;
    }
    // if (error) return <div>Error!</div>
    return (
        <div className=" mx-2 lg:mx-28 mt-20 mb-20 ">


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* product image */}
                <div className="relative w-full h-80 lg:h-full mb-3 border border-gray-200 rounded-lg ">
                    <Image
                        src={productDetails?.data?.images[0]}
                        alt={"product.productName"}
                        fill
                        className="object-contain rounded-lg hover:scale-105 transition-transform duration-200"
                    />
                </div>
                {/* Product Info Section */}
                <div className="space-y-6">
                    {/* Header */}
                    <div>
                        <span className="inline-block bg-green-100 text-green-700 font-medium px-4 py-1 rounded-full text-sm">
                            Fruits
                        </span>

                        <h2 className=" text-3xl md:text-5xl font-semibold text-gray-900 mt-4">
                        {productDetails?.data?.productName}
                        </h2>                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-current"
                                        style={{ fill: "#fbbf24", stroke: "none" }}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-600">5.0 (Fruiters)</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-[#FF6A1A]">${productDetails?.data?.price}6.3</span>
                            <span className="text-gray-600">/kg</span>
                        </div>
                    </div>


                    {/* Description */}
                    <div>
                        <p className="text-gray-700 leading-relaxed">
                            {productDetails?.data?.description}
                        </p>
                    </div>

                    <div className=" pt-6">
                        {/* Quantity Selector */}
                        <div className="mb-6 flex items-center gap-4">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Quantity
                            </label>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-gray-300 ">
                                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors">
                                        -
                                    </button>
                                    <span className="px-4 py-2 border-l border-r border-gray-300 font-medium">1kg</span>
                                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 transition-colors">
                                        +
                                    </button>
                                </div>
                                <span className="text-gray-500">kg</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-4 md:flex-row">
                            <button className="flex-1 bg-[#F4F6F6] text-black py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                                <Heart className="w-5 h-5" />
                                Save As Favourite
                            </button>
                            <button className="flex-1 bg-[#FF6A1A] text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                                <ShoppingCart className="w-5 h-5" />
                                Add to cart
                            </button>

                        </div>


                    </div>
                </div>
            </div>

            <div className="flex gap-6  my-10">
                <button className=" bg-[#749B3F] text-white py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    Description
                </button>
                <button className=" border border-gray-200 text-gray-500 py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    Review(1)
                </button>
            </div>
            <p className='bg-[#F4F6F6] rounded-lg px-8 py-10 w-full lg:w-2/3'>{productDetails?.data?.description}</p>

            {/* Related Product */}

            <div>
                <div className=" mx-auto text-center p-6">
                    <span className="inline-block bg-green-100 text-green-700 font-medium px-4 py-1 rounded-full text-sm">
                        Our Products
                    </span>

                    <h2 className=" text-3xl md:text-5xl font-semibold text-gray-900 mt-4">
                        Related Products
                    </h2>

                    
                </div>

            </div>

            {/* product section  */}
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {products?.data.slice(0, 4).map((product: IProduct, index: number) => {
                    return (
                        <Link href={`/product/${product.id}`} key={product.id || index}>
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-200">
                                <div className="relative w-full h-32 mb-3 bg-gray-50 rounded-lg overflow-hidden">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.productName}
                                        fill
                                        className="object-contain rounded-lg hover:scale-105 transition-transform duration-200"
                                    />
                                </div>

                                <div className="space-y-2 flex flex-col items-center">
                                    <h3 className="font-medium text-gray-800 text-sm capitalize">
                                        {product.productName}
                                    </h3>
                                    <p className="text-lg font-semibold text-gray-900">
                                        ${product.price}
                                    </p>
                                </div>

                                <button className="w-full mt-3 text-black border border-gray-200  hover:bg-orange-600 hover:text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                                    Add to cart
                                </button>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}


