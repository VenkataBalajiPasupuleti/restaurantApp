import {CartProvider} from './context/CartContext'
import Home from './pages/Home'

const App = () => (
  <CartProvider>
    <div className="min-h-screen bg-gray-100">
      <Home />
    </div>
  </CartProvider>
)

export default App
