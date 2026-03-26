import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/fetchProduct";
import Cart from "../components/Cart";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Hero from "../components/Hero";

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
  
      <Cart items={items} forfav={false} />
  
      
    </>
  );
}

export default Home;
