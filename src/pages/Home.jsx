import React, { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/fetchProduct";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Hero from "../components/Hero";
const Cart=lazy(()=>import('../components/Cart'))
function Home() {
  const [fetchPro, setFetchPro] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { items, loading, error } = useSelector((state) => state.fetchProducts);
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
    <Hero/>
    
  <Suspense fallback={<Spinner/>}>
          <Cart items={items} forfav={false} />
  </Suspense>
  
      
    </>
  );
}

export default Home;
