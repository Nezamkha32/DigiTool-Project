import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import MainSection from './components/MainSection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id)
      if (exists) return prev
      return [...prev, product]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <div className="min-h-screen font-sans">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <MainSection
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
