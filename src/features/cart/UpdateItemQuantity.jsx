import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from './cartSlice';


const UpdateItemQuantity = ({pizzaId,currentQuantity}) => {
  
    const dispatch=useDispatch();
    return (<div className="flex gap-1">
    <button className="bg-yellow-400 rounded-full px-2 py-0.5 md:px-3 md:py-1.5
    hover:bg-yellow-200"  onClick={()=> dispatch(decreaseItemQuantity(pizzaId))}>-</button>
    <p  className="mt-2">{currentQuantity}</p>
     <button className="bg-yellow-400 rounded-full px-2 py-0.5 md:px-3 md:py-1.5
     hover:bg-yellow-200" onClick={()=> dispatch(increaseItemQuantity(pizzaId))}>+</button>
    </div>
  )
}

export default UpdateItemQuantity