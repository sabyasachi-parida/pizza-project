import React from 'react'
import { useSelector } from 'react-redux'

const Username = () => {


  const username= useSelector((state)=>state.user.username)
  return (
    <div className="text-sm font-semibold hidden md:block uppercase"> welcome {username}</div>
  )
}

export default Username
