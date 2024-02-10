import React from 'react'

import { useNavigate,useRouteError } from 'react-router-dom';

function MyError () {
  const navigate = useNavigate();
  const error =useRouteError();
  
  return (
    <div  className=" flex flex-col justify-center items-center h-full ">
      <h1>Something went wrong 😢</h1>
      <p>{ error.data || error.message }</p>
      <button onClick={() => navigate(-1)} className ="mt-4 bg-yellow-400 text-white px-4 py-2 rounded text-stone-950">&larr; Go back</button>
    </div>
  );
}



export default MyError