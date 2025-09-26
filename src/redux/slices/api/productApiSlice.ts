import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const api = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL 
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllProducts: builder.query<any, void>({
      query: () => 'products',
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getSingelProduct: builder.query<any, string>({
      query: (id) => `products/${id}`,
    }),
   
  }),
})

export const { useGetAllProductsQuery , useGetSingelProductQuery } = api