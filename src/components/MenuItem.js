import {useCart} from '../context/CartContext'

const MenuItem = ({dish}) => {
  const {addToCart, removeFromCart, cart} = useCart()

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{dish.dish_name}</h3>
        <p className="text-gray-600">SAR {dish.price}</p>
        <p className="text-sm text-orange-500">{dish.calories} calories</p>
        {dish.addoncat && (
          <p className="text-blue-500 text-xs">Customizations available</p>
        )}
        {dish.available ? (
          <div className="flex items-center mt-2">
            <button
              type="button"
              onClick={() => removeFromCart(dish)}
              className="px-2 py-1 bg-gray-200"
            >
              -
            </button>
            <span className="px-4">{cart[dish.dish_id] || 0}</span>
            <button
              type="button"
              onClick={() => addToCart(dish)}
              className="px-2 py-1 bg-green-500 text-white"
            >
              +
            </button>
          </div>
        ) : (
          <p className="text-red-500 text-sm mt-1">Not available</p>
        )}
      </div>
      {dish.image && (
        <img
          src={dish.image}
          alt={dish.dish_name}
          className="w-20 h-20 object-cover rounded-lg"
        />
      )}
    </div>
  )
}

export default MenuItem
