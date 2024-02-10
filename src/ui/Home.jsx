import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser"
import store from "../store";
import MenuButtonforUsername from "./MenuButtonforUsername";
function Home() {
 const username=useSelector((store)=>(store.user.username));

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="text-xl text-yellow-500 font-semibold text-center mb-8  md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
       
      </h1>

     <>
     {(!username)? <CreateUser/> : <MenuButtonforUsername/>}</>
    </div>
  );
}

export default Home;
