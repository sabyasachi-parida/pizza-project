import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link to="/menu" className="bg-yellow-400 rounded-full hover:bg-yellow-200 px-2 py-0.5">&larr; Back to menu</Link>

      <p className="font-bold text-xl mt-4">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
