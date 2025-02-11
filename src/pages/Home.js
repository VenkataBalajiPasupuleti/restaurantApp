import {useEffect, useState} from 'react'
import CategoryTabs from '../components/CategoryTabs'

const Home = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details')
      .then(res => res.json())
      .then(data => {
        setCategories(data.categories || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching categories:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {loading ? <p>Loading...</p> : <CategoryTabs categories={categories} />}
    </div>
  )
}

export default Home
