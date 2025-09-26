import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const api = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api-fresh-harvest.code-commando.com/api/v1/' 
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