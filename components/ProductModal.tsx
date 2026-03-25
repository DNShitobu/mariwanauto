"use client";

import { useState } from "react";
import { X, ShoppingCart, Check, Minus, Plus, CheckCircle } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const productDetails: Record<string, { description: string; brand: string; sku: string; features: string[] }> = {
  "Premium Leather Seat Covers Set": {
    description: "Luxurious genuine leather seat covers that provide superior comfort and protection. Features precise stitching, custom fit design, and durable construction that lasts for years.",
    brand: "AutoLeather Pro",
    sku: "SC-LTH-001",
    features: ["Genuine leather", "Airbag compatible", "Easy installation", "Universal fit", "Warranty included"]
  },
  "All-Weather Rubber Floor Mats": {
    description: "Heavy-duty rubber floor mats designed to protect your vehicle's interior from dirt, mud, snow, and spills. Features raised edges and non-slip backing for maximum protection.",
    brand: "WeatherGuard",
    sku: "FM-RBR-002",
    features: ["All-weather protection", "Easy to clean", "Non-slip surface", "Custom fit available", "Odor-free material"]
  },
  "default": {
    description: "High-quality automotive product meeting OEM specifications. Engineered for perfect fit and reliable performance. Tested for durability and safety.",
    brand: "Mariwan Select",
    sku: "MW-GEN-001",
    features: ["Premium quality", "Easy installation", "Durable construction", "Value pricing", "Satisfaction guaranteed"]
  }
};

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { convertPrice } = useCurrency();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!isOpen || !product) return null;

  const details = productDetails[product.name] || productDetails["default"];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      subcategory: product.subcategory,
      price: product.price,
      image: product.image,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleClose = () => {
    setQuantity(1);
    setAddedToCart(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center min-h-[400px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-96 object-contain rounded-2xl shadow-lg"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-primary-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-lg">
                {product.category}
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-10 flex flex-col">
            <div className="mb-2">
              <span className="text-sm text-gray-500">{product.subcategory}</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium">Brand:</span>
                <span>{details.brand}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium">SKU:</span>
                <span>{details.sku}</span>
              </div>
            </div>

            <p className="text-4xl font-bold text-primary-600 mb-6">{convertPrice(product.price)}</p>

            <p className="text-gray-600 mb-6 leading-relaxed">{details.description}</p>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {details.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center bg-gray-100 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-200 rounded-l-xl transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-200 rounded-r-xl transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  addedToCart
                    ? "bg-green-500 text-white"
                    : "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl"
                }`}
              >
                {addedToCart ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-6 h-6" />
                    Add to Cart - {convertPrice(product.price * quantity)}
                  </>
                )}
              </button>
              
              <a
                href="/contact"
                className="block w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-center hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                Contact for Bulk Orders
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
