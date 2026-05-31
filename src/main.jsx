import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout.jsx'

import { lazy,Suspense } from 'react'
import Spinner from './components/Spinner.jsx'
import Categories from './components/Categories.jsx'
const Home=lazy(()=>import('./pages/Home.jsx'))
const About=lazy(()=>import('./pages/About.jsx'))
const CartDetails=lazy(()=>import('./components/CartDetails.jsx'))
const ProductsOfCategories=lazy(()=>import('./components/ProductsOfCategories.jsx'))
const Favourites=lazy(()=>import('./components/Favourites.jsx'))
const CartItems =lazy(()=>import('./components/CartItems.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
            <Route path="/CartDetails/:id" element={<CartDetails/>} />
              <Route path="/ProductOfCategories/:item" element={<ProductsOfCategories/>} />
                    <Route path="/Favourites" element={<Favourites/>} />
                      <Route path="/CartItems" element={<CartItems/>} />
                        <Route path="/Categories" element={<Categories/>} />
    </Route>

   
  )
 
)
createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  
    <RouterProvider router={router} />
  </Provider>
  

)
