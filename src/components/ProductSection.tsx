'use client'

import Spinner from '@/heplers/Spinner';
import { useGetAllProductsQuery } from '@/redux/slices/api/productApiSlice'
import { SpinnerColor, SpinnerSize } from '@/types/enums';
import { IProduct } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';



export default function ProductSection() {
  const { data: products, isLoading, error } = useGetAllProductsQuery()
  console.log(products?.data)
 if (isLoading) {
        return <div className='flex justify-center items-center h-screen'><Spinner color={SpinnerColor.BLUE} size={SpinnerSize.LARGE}></Spinner></div>;
    }  if (error) return <div>Error!</div>

  return (
    <div className='mx-2 lg:mx-28 ' >
      <div>
        <div className=" mx-auto text-center p-6">
          <span className="inline-block bg-green-100 text-green-700 font-medium px-4 py-1 rounded-full text-sm">
            Our Products
          </span>

          <h2 className=" text-3xl md:text-5xl font-semibold text-gray-900 mt-4">
            Our Fresh Products
          </h2>

          <p className="mt-2 text-[12px] md:text-[14px] text-gray-600">
            We pride ourselves on offering a wide variety of fresh and flavorful fruits,
            vegetables, and salad ingredients.
          </p>

          <div className="flex justify-center gap-2 md:gap-4 mt-6">
            <button className="px-2 sm:px-6 py-2 rounded-lg bg-green-600 text-white font-medium">
              All
            </button>
            <button className="px-2 sm:px-6  py-2 rounded-lg bg-gray-100 text-gray-500 font-medium">
              Fruits
            </button>
            <button className="px-2 sm:px-6  py-2 rounded-lg bg-gray-100 text-gray-500 font-medium">
              Vegetables
            </button>
            <button className="px-2 sm:px-6  py-2 rounded-lg bg-gray-100 text-gray-500 font-medium">
              Salad
            </button>
          </div>
        </div>

      </div>

      {/* product section  */}
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products?.data.map((product: IProduct, index: number) => {
          return (
            <Link href={`product/${product.id}`} key={product.id || index}>
            <div  className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-200">
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
  )
}