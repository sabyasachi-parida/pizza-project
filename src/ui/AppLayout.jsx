import React from 'react'
import Header from './Header'
import Loader from "./Loader"
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
function AppLayout() {


  const navigation =useNavigation();
  const isLoading=navigation.state === "loading";
 
   const navigate=useNavigate();
  return (

   
    <div className="grid h-screen grid-rows-[auto_0.02fr_1fr_auto] bg-gray-200">
   {isLoading && <Loader/>}

 

<Header/>
<button className="bg-yellow-500 rounded-full w-24  hover:text-red-600 hover:bg-blue-950 " onClick={()=>navigate(-1)}>&larr;</button>
<div className="overflow-scroll">
<main className="m-6 ">
    <Outlet/>
</main>
</div>
<CartOverview/>



    </div>
  )
}

export default AppLayout

 
