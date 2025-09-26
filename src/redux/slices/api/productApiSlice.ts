import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface User {
  id: string
  fullName: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface LoginRequest {
  email: string
  password: string
}


export interface RegisterRequest {
  fullName: string
  email: string
  password: string
}

export interface AuthResponse {
  success: boolean
  message: string
  data: {
    token?: string
    user?: User
  }
}


export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllProducts: builder.query<any, void>({
      query: () => 'products',
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getSingelProduct: builder.query<any, string>({
      query: (id) => `products/${id}`,
    }),
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (userData) => ({
        url: 'users/register',
        method: 'POST',
        body: userData,
      }),
    }),
    getProfile: builder.query<User, void>({
      query: () => 'auth/profile',
      providesTags: ['User'],
    }),

  }),
})

export const { useGetAllProductsQuery, useGetSingelProductQuery,useLoginMutation, useRegisterMutation , useGetProfileQuery } = api