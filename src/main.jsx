import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import router from './router/router.js'
import store from './store/store.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
