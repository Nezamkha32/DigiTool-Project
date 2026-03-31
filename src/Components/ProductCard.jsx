import { useState } from 'react'
import { toast } from 'react-toastify'

const tagStyles = {
  popular: 'bg-blue-100 text-blue-700',
  new: 'bg-emerald-100 text-emerald-700',
  'best-seller': 'bg-orange-100 text-orange-700',
}

const ProductCard = ({ product, addToCart, cartItems }) => {
  const [justAdded, setJustAdded] = useState(false)
  const isInCart = cartItems.some((item) => item.id === product.id)

  const handleBuyNow = () => {
    if (isInCart) {
      toast.info(`"${product.name}" is already in your cart!`, { icon: '🛒' })
      return
    }
    addToCart(product)
    toast.success(`"${product.name}" added to cart! 🛒`)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group">

      {/* Header: Icon + Tag */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-purple-100 transition-colors">
          {product.icon}
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[product.tagType] || 'bg-gray-100 text-gray-600'}`}>
          {product.tag}
        </span>
      </div>

      {/* Name & Description */}
      <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">{product.description}</p>

      {/* Features */}
      <ul className="mb-5 space-y-2">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mb-4 flex items-end gap-1">
        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm mb-0.5">/{product.period}</span>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleBuyNow}
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95 ${
          isInCart
            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-default'
            : justAdded
            ? 'bg-emerald-500 text-white'
            : 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow-md'
        }`}
      >
        {isInCart
          ? '✓ Added to Cart'
          : justAdded
          ? '✓ Added to Cart'
          : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;