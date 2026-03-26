import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productCategory } from '../redux/slices/productCategory'
import { NavLink } from 'react-router-dom'
function Categories() {
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(productCategory())
    },[])
    
    let items=useSelector(state=>state.productCategory.items
    )

  return (
    <div className='flex flex-wrap gap-4 justify-center items-center '>
        {items?.map((item)=>(
            <NavLink to={`/ProductOfCategories/${item}`} key={item} className="contents">
                <div className='border-2 rounded-2xl border-teal-900 bg-amber-20   h-30 w-30 sm:h-36 sm:w-36  flex justify-center flex-wrap  items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 group hover:cursor-pointer '  >
   <h1 className='font-mono text-black text-center font-bold group-hover:text-teal-700 group-hover:cursor-pointer text-shadow-lg break-words leading-tight '>{item}</h1>
        </div>
            </NavLink>
  
  

        ))}
        </div>


)

}

export default Categories