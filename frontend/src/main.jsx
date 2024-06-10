import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/styles/index.css"
// import "./assets/styles/bootstrap.custom.css"
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import store from './store.js'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen.jsx'
import { Page404 } from './components/Page404.jsx'
import CartScreen from './screens/CartScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import ShippingScreen from './screens/ShippingScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/shipping' element={<ShippingScreen />} />

      <Route path='/*' element={<Page404 />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
