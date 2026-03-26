import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import CartDetails from './components/CartDetails.jsx'
import ProductsOfCategories from './components/ProductsOfCategories.jsx'
import Favourites from './components/Favourites.jsx'
import CartItems from './components/CartItems.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
            <Route path="/CartDetails/:id" element={<CartDetails/>} />
              <Route path="/ProductOfCategories/:item" element={<ProductsOfCategories/>} />
                    <Route path="/Favourites" element={<Favourites/>} />
                      <Route path="/CartItems" element={<CartItems/>} />
  
    </Route>
  )
)
createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
