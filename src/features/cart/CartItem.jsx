import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { clearCart, deleteItem, getCurrentQuantityById } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";
import Button from "../../ui/Button";
function CartItem({ item }) {
  const dispatch=useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity=useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className='flex item-center justify-between '>
        <p>{formatCurrency(totalPrice)}</p>
        <div className="flex gap-4">

        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
       <Button onClick={()=>dispatch(deleteItem(pizzaId))}>delete</Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
