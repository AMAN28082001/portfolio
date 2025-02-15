"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, X } from "lucide-react"
import { useState } from "react"

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "E-commerce Platform", price: 49.99 },
    { id: 2, name: "Task Management App", price: 29.99 },
  ])

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleCart}
        className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition duration-300 transform hover:scale-110"
      >
        <ShoppingCart size={24} />
      </button>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-2 w-80 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-teal-300">Cart</h3>
              <button onClick={toggleCart} className="text-gray-300 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-300">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white">{item.name}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <X size={16} />
                    </button>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}