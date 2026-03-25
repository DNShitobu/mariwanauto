"use client";

import { ShoppingCart, Eye } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  image: string;
  onViewDetails?: () => void;
}

export function ProductCard({ id, name, category, subcategory, price, image, onViewDetails }: ProductCardProps) {
  const { convertPrice } = useCurrency();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id, name, category, subcategory: subcategory || category, price, image });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group relative">
      <div className="relative h-56 bg-gray-100 overflow-hidden cursor-pointer" onClick={onViewDetails}>
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-6xl font-bold opacity-20">
              {name.charAt(0)}
            </span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
            {category}
          </span>
        </div>

        <button
          onClick={onViewDetails}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-lg"
        >
          <Eye className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="p-5">
        <h3 
          className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 cursor-pointer hover:text-primary-600 transition-colors"
          onClick={onViewDetails}
        >
          {name}
        </h3>
        {subcategory && (
          <p className="text-sm text-gray-500 mb-3">{subcategory}</p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">{convertPrice(price)}</span>
          <button 
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-dark-900 hover:bg-primary-600 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
