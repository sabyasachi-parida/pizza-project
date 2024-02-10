import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, deleteItem } from "../cart/cartSlice";
import { getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {


  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch=useDispatch();
  const currentQuantity =useSelector(getCurrentQuantityById(id));
  const isInCart=currentQuantity > 0 ;



 function handleAddToCarts(){
  const newItem={
    pizzaId:id,
    name,
    quantity:1,
    unitPrice,
    totalPrice:unitPrice * 1,
  }
   dispatch(addItem(newItem));
  
 }

  return (
    <li className='flex gap-4  p-1 '>
      <img src={imageUrl} alt={name}  className={`h-24 ${soldOut? 'opacity-70 grayscale': ''}`}/>
      <div className="flex flex-col w-screen">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize">{ingredients.join(', ')}</p>
        <div className="flex justify-between items-center">
          {!soldOut ? <p className="text-sm ">{formatCurrency(unitPrice)}</p> : <p className="text-sm text-red-600 uppercase">Sold out</p>}
        <div className="mt-auto  flex gap-4 ">

     
           <div className="flex gap-6">

          {
            isInCart && <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity}/>

          }
          {isInCart  && <Button onClick={()=>dispatch(deleteItem(id))}>remove from cart</Button>} 
          { !soldOut &&  !isInCart && <button className="bg-yellow-400  rounded-full px-1 py-1 sm:px-2 sm:py-2 hover:bg-yellow-200" onClick={handleAddToCarts}>Add to CART </button>}
           </div>
        </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
