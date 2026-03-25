// Utility to sanitize cart item data (defense-in-depth)
function sanitizeCartItem(item) {
  return {
    ...item,
    id: typeof item.id === 'string' ? item.id.replace(/<.*?>/g, '').replace(/["'`;]/g, '') : item.id,
    name: typeof item.name === 'string' ? item.name.replace(/<.*?>/g, '').replace(/["'`;]/g, '') : item.name,
    category: typeof item.category === 'string' ? item.category.replace(/<.*?>/g, '').replace(/["'`;]/g, '') : item.category,
    subcategory: typeof item.subcategory === 'string' ? item.subcategory.replace(/<.*?>/g, '').replace(/["'`;]/g, '') : item.subcategory,
    image: typeof item.image === 'string' ? item.image.replace(/<.*?>/g, '').replace(/["'`;]/g, '') : item.image,
    // price and quantity are numbers, no need to sanitize
    price: item.price,
    quantity: item.quantity,
  };
}
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useCurrency } from "./CurrencyContext";

export interface CartItem {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("mariwan-cart");
    if (saved) {
      try {
        // Sanitize loaded items just in case
        const loaded = JSON.parse(saved).map(sanitizeCartItem);
        setItems(loaded);
      } catch (e) {
        console.log("Failed to load cart");
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Sanitize before saving
      const sanitized = items.map(sanitizeCartItem);
      localStorage.setItem("mariwan-cart", JSON.stringify(sanitized));
    }
  }, [items, mounted]);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    const sanitizedItem = sanitizeCartItem({ ...item, quantity: 1 });
    setItems((prev) => {
      const existing = prev.find((i) => i.id === sanitizedItem.id);
      if (existing) {
        return prev.map((i) =>
          i.id === sanitizedItem.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, sanitizedItem];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
