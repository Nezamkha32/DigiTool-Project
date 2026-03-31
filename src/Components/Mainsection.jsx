import { useState } from 'react'
import products from '../data/products.json'
import ProductCard from './ProductCard'
import CartSection from './CartSection'

const MainSection = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
  const [activeTab, setActiveTab] = useState('products')

  return (
    <section id="products" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-1.5 flex gap-1 shadow-sm">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-7 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                activeTab === 'products'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-7 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'cart'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Cart
              {cartItems.length > 0 && (
                <span
                  className={`text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold leading-none ${
                    activeTab === 'cart'
                      ? 'bg-white text-purple-600'
                      : 'bg-purple-600 text-white'
                  }`}
                >
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                cartItems={cartItems}
              />
            ))}
          </div>
        ) : (
          <CartSection
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        )}
      </div>
    </section>
  )
}

export default MainSection