import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
const MenuButtonforUsername = () => {
    const username=useSelector((store)=>(store.user.username))
  return (
   <button className="bg-yellow-400 rounded-full hover:bg-yellow-200 px-2 py-0.5"><Link to='/menu '> Continue ordering {username} </Link></button>
  )
}

export default MenuButtonforUsername