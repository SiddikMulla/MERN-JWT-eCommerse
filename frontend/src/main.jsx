import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/styles/index.css"
import "./assets/styles/bootstrap.custom.css"
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
