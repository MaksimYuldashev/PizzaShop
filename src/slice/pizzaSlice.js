import { createSlice } from '@reduxjs/toolkit'
export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState: [],
    reducers: {
        add: (state, { payload }) => {
            state.push({ id: payload.id, title: payload.title, price: payload.price })
        },
        remove: (state, { payload }) => {
            const index = state.findIndex((pizza) => pizza.id === payload.id);
            if (index !== -1) {
                state.splice(index, 1);  
            }
        }
    }
})

export const { add, remove } = pizzasSlice.actions