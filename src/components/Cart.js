import {useCart} from '../context/CartContext'

const Cart = () => {
  const {cart} = useCart()
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0)

  return (
    <div className="relative">
      <button className="text-gray-700 text-xl" type="button">
        🛒
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  )
}

export default Cart
