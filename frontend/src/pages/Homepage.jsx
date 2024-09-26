import React, { useEffect } from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import Banner from '../components/Home/Banner'
import GridSection from '../components/Home/GridSection'
import { fetchProduct } from '../redux/productSlice'
import {useDispatch} from 'react-redux'
import ProductList from '../components/Home/ProductList'
function Homepage() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])

  return (
    <div>
   <Navbar/>
   <Hero/>
   <GridSection/>
   <Banner/>
   <ProductList/>
    </div>
  )
}

export default Homepage
