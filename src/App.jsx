import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/slices/fetchProduct'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
function App() {
  const [fetchPro,setFetchPro]=useState([])
    const dispatch=useDispatch()

useEffect(()=>{
dispatch(fetchProducts()
)
},[])


   const { items, loading, error } = useSelector((state) => state.fetchProducts);



  return (
    <>
    <div className="bg-teal2 h-4"></div>
<Navbar/>  
  <Cart items={items}/>
   {/* <Cart items={items}/>
   <button className='button bg-amber-300'>click hele</button> */}
   </>
  )
}

export default App

