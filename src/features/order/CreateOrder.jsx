import { useState } from "react";
import { Form, redirect, useActionData, useNavigate, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );



function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const totalCartPrice=useSelector(getTotalCartPrice);
  const dispatch=useDispatch();
  const priorityPrice= withPriority ? totalCartPrice * 0.2 : 0 ;
  const totalPrice=totalCartPrice + priorityPrice;
  const {username,status:addressStatus,position,address,error:errorAddress}=useSelector((store)=>(store.user));
  const isLoadingAddress= addressStatus === 'loading';
   const navigation=useNavigation();
   const isSubmitting=navigation.state === 'submitting'
   const formErrors=useActionData();




 if(!cart) return <EmptyCart/>
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      
      <Form method='POST'>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-4">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required className="input grow"  defaultValue={username} />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center mb-4">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required  className="input w-full"/>
        
          
            {formErrors?.phone  && <p className="text-xs mt-2 text-red-700 bg-red-100 p-0.5">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row  relative sm:items-center mb-4">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address"  defaultValue={address}required disabled={isLoadingAddress} className="input w-full"/>
            {addressStatus === 'error' && (<p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">{errorAddress}</p>)}
          </div>
         {!position.latitude && !position.longitude &&   <span className='absolute right-[3px] top-[3px] z-50 md:top-[5px] md:right-[5px]'>

          <Button disabled={isLoadingAddress}onClick={(e)=>{
            e.preventDefault();
            
            dispatch(fetchAddress())}}
            > get position </Button>
          </span>
}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
          className="h-6 w-6 accent-yellow-400
          focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>
         <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
         <input type="hidden" name="position" value={ position.longitude && position.latitude ?`${position.latitude},${position.longitude}`:''}/>
        <div>
          <Button type="primary" disabled={isSubmitting || isLoadingAddress}> {isSubmitting ? "packing order" :`order now for ${ formatCurrency(totalPrice)}`}</Button>
        </div>
      </Form>
    </div>
  );
}
export async function action  ({request}){
   const formdata= await request.formData()
   const data= Object.fromEntries(formdata);
     const order={
      ...data,
      cart:JSON.parse(data.cart),
      priority: data.priority === 'true'
     }
     const errors={}; 
     if(!isValidPhone(order.phone)){  
     errors.phone="please give a valid phone number:-"
    }
    if(Object.keys(errors).length > 0){
      return errors;
    }
    const newOrder = await  createOrder(order);
    store.dispatch(clearCart());
   return redirect (`/order/${newOrder.id}`);
}
export default CreateOrder;
