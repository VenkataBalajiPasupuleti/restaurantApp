import {useState, useEffect} from 'react'
import axios from 'axios'
import MenuItem from './MenuItem'

const MenuList = ({categoryId}) => {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    if (!categoryId) return

    axios
      .get(
        `https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details?category_id=${categoryId}`,
      )
      .then(response => setDishes(response.data.dishes))
      .catch(error => console.error('Error fetching dishes:', error))
  }, [categoryId])

  return (
    <div className="p-4">
      {dishes.map(dish => (
        <MenuItem key={dish.dish_id} dish={dish} />
      ))}
    </div>
  )
}

export default MenuList
