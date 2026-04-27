import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { category } from '../redux/slices/Category';
import Cart from './Cart';

function ProductsOfCategories() {
    let params=useParams()
    console.log(params);
    let dispatch=useDispatch()
    useEffect(()=>{
dispatch(category(`${params.item}`))
    },[params,dispatch])

    let selector=useSelector(state=>state.category
     
    )
    let items=selector.items
  return (
    <>
    <h1 className='font-mono text-center font-extrabold m-5'>{params.item}</h1>
    <Cart items={items}/>
</>
  )
}

export default ProductsOfCategories