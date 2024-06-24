import { configureStore } from '@reduxjs/toolkit'
import { pizzaSlice } from '../slice/pizzaApi'
import { pizzasSlice } from "../slice/pizzaSlice";

export default configureStore({
    reducer: {
        [pizzaSlice.reducerPath]: pizzaSlice.reducer,
        [pizzaSlice.name]: pizzasSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(pizzaSlice.middleware)
})