import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

 function SearchOrder() {
 const[query,setQuery]=useState("");
 const navigate=useNavigate();
 function handleSubmit(e) {
    e.preventDefault();
    if(!query) return;
   navigate(`/order/${query}`);
     setQuery("");
 }
  return (
    <form onSubmit={handleSubmit}>
   <input placeholder="search order" value={query} onChange={(e)=>setQuery(e.target.value)} className="rounded-full px-4 py-1.2  bg-yellow-100
   placeholder:text-stone-400 sm:focus:w-72 focus:ring focus:outline-none focus:ring-black focus:ring-opacity-50 sm:w-64 w-28 transition-all
   
   
   "
   
   />
   </form>
  )
}

export default SearchOrder
