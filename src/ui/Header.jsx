import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

export default function Header() {
  return (
    <header className="bg-yellow-400 px-4 py-4 border-b border-black sm:px-6
    flex
    items-center
    justify-between">

        <Link to ="/" className="uppercase tracking-widest mt-2"> DOMINO'S PIZZA </Link>
        <SearchOrder/>
        <Username/>
    </header>
  )
}
