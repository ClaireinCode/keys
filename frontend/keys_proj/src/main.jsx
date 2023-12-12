import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
