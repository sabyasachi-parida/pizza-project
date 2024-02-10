import {  RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Home"
import Menu from "./features/menu/Menu";

import Cart from "./features/cart/Cart"
import CreateOrder ,{action as createOrderAction} from "./features/order/CreateOrder";
import Order ,{loader as orderLoader}from "./features/order/Order";
import {action as updateOrderAction} from './features/order/UpdateOrder'

import AppLayout from "./ui/AppLayout";
import { Loader as menuLoader } from "./features/menu/Menu";
import MyError from "./ui/MyError";
 const router = createBrowserRouter ([

  {
    element:<AppLayout/>,
    errorElement:<MyError/>,
    children:[
       {
      path:"/",
      element:<Home/>,
    },
    {
     path:"/menu",
     element:<Menu />,
     loader:menuLoader,
     errorElement:<MyError/>,
    },
    {
      path:"/cart",
      element:<Cart />,
      errorElement:<MyError/>,
    },
    {
      path:"/order/new",
      element:<CreateOrder />,
      action:createOrderAction,
      errorElement:<MyError/>,
    },
    {
      path:"/order/:orderId",
      element:<Order />,
      loader:orderLoader,
      errorElement:<MyError/>,
      action:updateOrderAction,
    }],
  },
 
]);


function App() {
  

  return(      
    <>
    
  <RouterProvider router={router} />
 
  </>
  )
   
  
  
   
}

export default App
