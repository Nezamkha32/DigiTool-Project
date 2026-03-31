import { toast } from 'react-toastify'

const CartSection = ({ cartItems, removeFromCart, clearCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  const handleRemove = (item) => {
    removeFromCart(item.id)
    toast.error(`"${item.name}" removed from cart.`, { icon: '🗑️' })
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning('Your cart is empty! Add some products first.', { icon: '⚠️' })
      return
    }
    clearCart()
    toast.success('Checkout successful! Thank you for your purchase! 🎉', { autoClose: 4000 })
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="text-7xl mb-5">🛒</div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
        <p className="text-gray-400 text-sm">
          Switch to the Products tab and add items to your cart.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Cart Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-900 text-lg">Your Cart</h3>
          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {cartItems.length} item{cartItems.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Cart Items */}
        <div className="divide-y divide-gray-50">
          {cartItems.map((item) => (
            <div key={item.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-purple-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                  <p className="text-purple-600 font-bold text-sm">
                    ${item.price}
                    <span className="text-gray-400 font-normal text-xs ml-0.5">/{item.period}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="text-red-400 hover:text-red-600 text-sm font-semibold transition-colors hover:underline ml-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Footer */}
        <div className="px-6 py-5 bg-gray-50/70 border-t border-gray-100">
          <div className="flex justify-between items-center mb-5">
            <span className="text-gray-600 font-medium">Total</span>
            <span className="text-2xl font-bold text-gray-900">${total}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-purple-600 hover:bg-purple-700 active:scale-95 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-purple-200 text-sm"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSection