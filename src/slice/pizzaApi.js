import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const pizzaSlice = createApi({
    reducerPath: "pizzaApi",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: '/JSON/pizza.json'
        }
    ),
    endpoints: builder => ({
        getPizza: builder.query({
            query: () => '',
        })
    })
})

export const { useGetPizzaQuery } = pizzaSlice