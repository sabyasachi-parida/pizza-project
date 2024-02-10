import React from 'react'

export default function Button({children,disabled,type,to,onClick}) {
 
  if(onClick){
    return (
      <button onClick={onClick}  disabled={disabled} className="bg-yellow-400 text-sm inline-block px-2 py-0.5 font-semibold uppercase 
      tracking-wide text-stone-800 rounded-full hover:bg-yellow-200 transition-colors focus:bg-yellow-300 focus:outline-none
       focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-2
   
      ">{children}</button>
     )
  }

  return (
   <button  disabled={disabled} className="bg-yellow-400 text-sm inline-block px-2 py-0.5 font-semibold uppercase 
   tracking-wide text-stone-800 rounded-full hover:bg-yellow-200 transition-colors focus:bg-yellow-300 focus:outline-none
    focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-2

   ">{children}</button>
  )
}
