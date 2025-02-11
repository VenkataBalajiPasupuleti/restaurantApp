import {createContext, useContext, useState} from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({})

  const addToCart = item => {
    setCart(prev => ({
      ...prev,
      [item.dish_id]: (prev[item.dish_id] || 0) + 1,
    }))
  }

  const removeFromCart = item => {
    setCart(prev => {
      const updatedCart = {...prev}

      if (updatedCart[item.dish_id] > 0) {
        updatedCart[item.dish_id] -= 1
      }

      return updatedCart
    })
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
