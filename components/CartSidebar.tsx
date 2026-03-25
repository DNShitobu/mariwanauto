"use client";

import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";

export function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { convertPrice } = useCurrency();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-slide-in">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary-600" />
            <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
            <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 text-center mb-6">Discover our amazing products and add them to your cart!</p>
            <Link
              href="/products"
              onClick={() => setIsCartOpen(false)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-lg font-bold text-primary-600 mt-1">
                      {convertPrice(item.price)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2 bg-white rounded-lg border">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-6 space-y-4 bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-2xl font-bold text-gray-900">{convertPrice(getTotalPrice())}</span>
              </div>
              <p className="text-sm text-gray-500">Shipping calculated at checkout</p>
              <div className="space-y-3">
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-semibold transition-colors">
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-primary-600 hover:text-primary-600 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
              <button
                onClick={clearCart}
                className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
