"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { CurrencySelector } from "@/components/CurrencySelector";
import { Search, X, SlidersHorizontal, ChevronDown } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string;
}

const categories = [
  { name: "Seat Covers", count: 15, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { name: "Floor Mats", count: 12, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { name: "Car Body Covers", count: 8, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { name: "Steering Covers", count: 10, image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80" },
  { name: "Interior Decorations", count: 25, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { name: "Exterior Decorations", count: 18, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { name: "Car Batteries", count: 12, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" },
  { name: "Wipers & Wiper Blades", count: 20, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { name: "Air Fresheners", count: 30, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { name: "Body Fillers", count: 8, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { name: "Bostik & Adhesives", count: 15, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { name: "Car Lubricants & Fluids", count: 25, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
  { name: "Car Spare Parts", count: 20, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80" },
  { name: "Car Care & Detailing", count: 22, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
];

const products: Product[] = [
  { id: "sc-001", name: "Premium Leather Seat Covers Set", category: "Seat Covers", subcategory: "Leather Seat Covers", price: 189.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "sc-002", name: "Universal Fabric Seat Covers", category: "Seat Covers", subcategory: "Fabric Seat Covers", price: 79.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "sc-003", name: "Bucket Seat Cover Racing Style", category: "Seat Covers", subcategory: "Bucket Seat Covers", price: 59.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "sc-004", name: "Memory Foam Seat Cushion", category: "Seat Covers", subcategory: "Seat Cushions", price: 45.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "sc-005", name: "Headrest Covers Set (4)", category: "Seat Covers", subcategory: "Headrest Covers", price: 24.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  
  { id: "fm-001", name: "All-Weather Rubber Floor Mats", category: "Floor Mats", subcategory: "All-Weather Floor Mats", price: 89.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "fm-002", name: "Premium Carpet Floor Mats Set", category: "Floor Mats", subcategory: "Carpet Floor Mats", price: 69.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "fm-003", name: "3D Deep Embossed Floor Mats", category: "Floor Mats", subcategory: "3D Floor Mats", price: 99.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "fm-004", name: "Heavy Duty Cargo Liner", category: "Floor Mats", subcategory: "Cargo Liners", price: 79.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  
  { id: "bc-001", name: "Indoor Soft Car Cover", category: "Car Body Covers", subcategory: "Indoor Car Covers", price: 129.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "bc-002", name: "Outdoor Premium Car Cover", category: "Car Body Covers", subcategory: "Outdoor Car Covers", price: 159.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "bc-003", name: "Waterproof Car Cover All Seasons", category: "Car Body Covers", subcategory: "Waterproof Covers", price: 139.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "bc-004", name: "Reflective Car Cover Sun Protection", category: "Car Body Covers", subcategory: "Reflective Covers", price: 119.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  
  { id: "stc-001", name: "Genuine Leather Steering Cover", category: "Steering Covers", subcategory: "Leather Steering Covers", price: 49.99, image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80" },
  { id: "stc-002", name: "Universal Steering Wheel Cover", category: "Steering Covers", subcategory: "Universal Steering Covers", price: 29.99, image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80" },
  { id: "stc-003", name: "Heated Steering Wheel Cover", category: "Steering Covers", subcategory: "Heated Steering Covers", price: 79.99, image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80" },
  
  { id: "id-001", name: "LED Strip Light Kit Interior", category: "Interior Decorations", subcategory: "LED Interior Lights", price: 24.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "id-002", name: "Chrome Interior Trim Set", category: "Interior Decorations", subcategory: "Chrome Trim", price: 45.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "id-003", name: "Dashboard Phone Mount", category: "Interior Decorations", subcategory: "Phone Holders", price: 19.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "id-004", name: "Universal Sun Shade Set", category: "Interior Decorations", subcategory: "Sun Shades", price: 29.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "id-005", name: "Dashboard Ornament Decor", category: "Interior Decorations", subcategory: "Dashboard Decor", price: 15.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "id-006", name: "Premium Tissue Box Holder", category: "Interior Decorations", subcategory: "Tissue Box Holders", price: 14.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  
  { id: "ed-001", name: "Carbon Fiber Body Sticker Kit", category: "Exterior Decorations", subcategory: "Body Stickers", price: 39.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "ed-002", name: "Chrome Door Handle Covers", category: "Exterior Decorations", subcategory: "Chrome Accessories", price: 24.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "ed-003", name: "Universal Window Visors", category: "Exterior Decorations", subcategory: "Window Visors", price: 49.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "ed-004", name: "Rear Spoiler Lip Kit", category: "Exterior Decorations", subcategory: "Spoilers", price: 89.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  
  { id: "bat-001", name: "Lead-Acid Car Battery 12V", category: "Car Batteries", subcategory: "Lead-Acid Batteries", price: 129.99, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" },
  { id: "bat-002", name: "AGM Premium Battery", category: "Car Batteries", subcategory: "AGM Batteries", price: 199.99, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" },
  { id: "bat-003", name: "Portable Jump Starter 20000mAh", category: "Car Batteries", subcategory: "Jump Starters", price: 89.99, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" },
  { id: "bat-004", name: "Smart Battery Charger 12V/24V", category: "Car Batteries", subcategory: "Battery Chargers", price: 49.99, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" },
  { id: "bat-005", name: "Battery Maintainer Trickle Charger", category: "Car Batteries", subcategory: "Battery Maintainers", price: 34.99, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" },
  
  { id: "wp-001", name: "Premium Flat Wiper Blades 24\"", category: "Wipers & Wiper Blades", subcategory: "Flat Wiper Blades", price: 29.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "wp-002", name: "Hybrid Wiper Blade Set", category: "Wipers & Wiper Blades", subcategory: "Hybrid Wiper Blades", price: 39.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "wp-003", name: "Conventional Wiper Blades Pair", category: "Wipers & Wiper Blades", subcategory: "Conventional Wiper Blades", price: 19.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "wp-004", name: "Rear Wiper Blade 12\"", category: "Wipers & Wiper Blades", subcategory: "Rear Wiper Blades", price: 14.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "wp-005", name: "Windshield Washer Pump Universal", category: "Wipers & Wiper Blades", subcategory: "Washer Pumps", price: 12.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  
  { id: "af-001", name: "Premium Hanging Air Freshener", category: "Air Fresheners", subcategory: "Hanging Air Fresheners", price: 8.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "af-002", name: "Vent Clip Air Freshener", category: "Air Fresheners", subcategory: "Vent Air Fresheners", price: 6.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "af-003", name: "Car Air Freshener Spray", category: "Air Fresheners", subcategory: "Spray Air Fresheners", price: 9.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "af-004", name: "Gel Air Freshener Canister", category: "Air Fresheners", subcategory: "Gel Air Fresheners", price: 7.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "af-005", name: "Aromatherapy Car Diffuser", category: "Air Fresheners", subcategory: "Car Diffusers", price: 24.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "af-006", name: "Essential Oil Set for Car", category: "Air Fresheners", subcategory: "Essential Oils", price: 19.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  
  { id: "bf-001", name: "Premium Polyester Body Filler 2kg", category: "Body Fillers", subcategory: "Polyester Fillers", price: 24.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "bf-002", name: "Lightweight Body Filler 1kg", category: "Body Fillers", subcategory: "Lightweight Fillers", price: 29.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "bf-003", name: "Fiberglass Body Filler 2kg", category: "Body Fillers", subcategory: "Fiberglass Fillers", price: 34.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "bf-004", name: "Body Filler Hardener Tube", category: "Body Fillers", subcategory: "Body Filler Hardeners", price: 5.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  
  { id: "ba-001", name: "Bostik Heavy Duty Adhesive", category: "Bostik & Adhesives", subcategory: "Automotive Adhesives", price: 14.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "ba-002", name: "Automotive Silicone Sealant", category: "Bostik & Adhesives", subcategory: "Sealants", price: 9.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "ba-003", name: "Thread Locker Blue 50ml", category: "Bostik & Adhesives", subcategory: "Thread Lockers", price: 8.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "ba-004", name: "Gasket Maker Red 85g", category: "Bostik & Adhesives", subcategory: "Gasket Makers", price: 11.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "ba-005", name: "Super Glue Gel 3g (3pk)", category: "Bostik & Adhesives", subcategory: "Super Glues", price: 6.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "ba-006", name: "3M Double-Sided Mounting Tape", category: "Bostik & Adhesives", subcategory: "Mounting Tapes", price: 7.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  
  { id: "lf-001", name: "Synthetic Engine Oil 5W-30 5L", category: "Car Lubricants & Fluids", subcategory: "Engine Oils", price: 54.99, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
  { id: "lf-002", name: "Semi-Synthetic Engine Oil 10W-40 4L", category: "Car Lubricants & Fluids", subcategory: "Engine Oils", price: 39.99, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
  { id: "lf-003", name: "Automatic Transmission Fluid ATF 4L", category: "Car Lubricants & Fluids", subcategory: "Transmission Oils", price: 44.99, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
  { id: "lf-004", name: "DOT 4 Brake Fluid 1L", category: "Car Lubricants & Fluids", subcategory: "Brake Fluids", price: 18.99, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
  { id: "lf-005", name: "Antifreeze Coolant 5L", category: "Car Lubricants & Fluids", subcategory: "Coolants", price: 24.99, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
  { id: "lf-006", name: "Power Steering Fluid 1L", category: "Car Lubricants & Fluids", subcategory: "Power Steering Fluids", price: 14.99, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
  { id: "lf-007", name: "Manual Transmission Gear Oil 75W-90 1L", category: "Car Lubricants & Fluids", subcategory: "Gear Oils", price: 19.99, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
  { id: "lf-008", name: "Lithium Grease Cartridge 400g", category: "Car Lubricants & Fluids", subcategory: "Grease", price: 9.99, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
  { id: "lf-009", name: "AdBlue 10L", category: "Car Lubricants & Fluids", subcategory: "AdBlue", price: 29.99, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
  
  { id: "sp-001", name: "Ceramic Brake Pads Front Set", category: "Car Spare Parts", subcategory: "Brake Pads", price: 65.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "sp-002", name: "High-Flow Air Filter", category: "Car Spare Parts", subcategory: "Air Filters", price: 34.99, image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&q=80" },
  { id: "sp-003", name: "Premium Oil Filter", category: "Car Spare Parts", subcategory: "Oil Filters", price: 9.99, image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&q=80" },
  { id: "sp-004", name: "Iridium Spark Plugs Set (4)", category: "Car Spare Parts", subcategory: "Spark Plugs", price: 29.99, image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&q=80" },
  { id: "sp-005", name: "Fuel Filter Inline", category: "Car Spare Parts", subcategory: "Fuel Filters", price: 14.99, image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&q=80" },
  
  { id: "cc-001", name: "Car Wash Shampoo 1L", category: "Car Care & Detailing", subcategory: "Car Wash", price: 14.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "cc-002", name: "Premium Car Wax 500ml", category: "Car Care & Detailing", subcategory: "Wax & Polishes", price: 24.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "cc-003", name: "Interior Cleaner Dashboard 500ml", category: "Car Care & Detailing", subcategory: "Interior Cleaners", price: 12.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "cc-004", name: "Glass Cleaner 500ml", category: "Car Care & Detailing", subcategory: "Glass Cleaners", price: 8.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "cc-005", name: "Tire Dressing Shine 500ml", category: "Car Care & Detailing", subcategory: "Tire Dressings", price: 11.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "cc-006", name: "Microfiber Cleaning Cloths (6pk)", category: "Car Care & Detailing", subcategory: "Microfiber Cloths", price: 19.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "cc-007", name: "Car Cleaning Sponge Set", category: "Car Care & Detailing", subcategory: "Sponges & Brushes", price: 9.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === "All" || product.subcategory === selectedSubcategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const getSubcategories = (categoryName: string) => {
    const category = categories.find(c => c.name === categoryName);
    const subcategories = new Set<string>();
    products.forEach(p => {
      if (p.category === categoryName) {
        subcategories.add(p.subcategory);
      }
    });
    return Array.from(subcategories);
  };

  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Car Parts & Accessories</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Quality spare parts, interior & exterior accessories, car care products, lubricants and more!
              </p>
            </div>
            <CurrencySelector />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5" />
                    Categories
                  </h2>
                  <button
                    onClick={() => setShowCategories(!showCategories)}
                    className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                  >
                    {showCategories ? <X className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
                
                <div className={`space-y-1 ${showCategories ? 'block' : 'hidden lg:block'}`}>
                  <button
                    onClick={() => { setSelectedCategory("All"); setSelectedSubcategory("All"); }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${
                      selectedCategory === "All" 
                        ? "bg-primary-600 text-white shadow-lg" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    All Products ({products.length})
                  </button>
                  {categories.map((cat) => {
                    const count = products.filter(p => p.category === cat.name).length;
                    return (
                      <div key={cat.name}>
                        <button
                          onClick={() => { setSelectedCategory(cat.name); setSelectedSubcategory("All"); }}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium flex items-center gap-3 ${
                            selectedCategory === cat.name 
                              ? "bg-primary-600 text-white shadow-lg" 
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <img src={cat.image} alt="" className="w-8 h-8 rounded-lg object-cover" />
                          <span className="flex-1">{cat.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            selectedCategory === cat.name ? "bg-white/20" : "bg-gray-200"
                          }`}>
                            {count}
                          </span>
                        </button>
                        {selectedCategory === cat.name && (
                          <div className="ml-4 mt-2 space-y-1 max-h-64 overflow-y-auto">
                            <button
                              onClick={() => setSelectedSubcategory("All")}
                              className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${
                                selectedSubcategory === "All" 
                                  ? "text-blue-600 font-semibold bg-blue-50" 
                                  : "text-gray-600 hover:text-gray-900"
                              }`}
                            >
                              All {cat.name}
                            </button>
                            {getSubcategories(cat.name).map((sub) => (
                              <button
                                key={sub}
                                onClick={() => setSelectedSubcategory(sub)}
                                className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${
                                  selectedSubcategory === sub 
                                    ? "text-blue-600 font-semibold bg-blue-50" 
                                    : "text-gray-600 hover:text-gray-900"
                                }`}
                              >
                                {sub}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by product name, category, or subcategory..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {(selectedCategory !== "All" || selectedSubcategory !== "All" || searchQuery) && (
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-gray-600">Active filters:</span>
                  {selectedCategory !== "All" && (
                    <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory("All")}><X className="w-4 h-4" /></button>
                    </span>
                  )}
                  {selectedSubcategory !== "All" && (
                    <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {selectedSubcategory}
                      <button onClick={() => setSelectedSubcategory("All")}><X className="w-4 h-4" /></button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      "{searchQuery}"
                      <button onClick={() => setSearchQuery("")}><X className="w-4 h-4" /></button>
                    </span>
                  )}
                  <button
                    onClick={() => { setSelectedCategory("All"); setSelectedSubcategory("All"); setSearchQuery(""); }}
                    className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                  >
                    Clear all
                  </button>
                </div>
              )}

              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? "s" : ""}
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id}
                      {...product}
                      onViewDetails={() => handleViewDetails(product)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={() => { setSelectedCategory("All"); setSelectedSubcategory("All"); setSearchQuery(""); }}
                    className="btn-primary"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      <section className="bg-blue-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can&apos;t Find What You Need?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us and our experts will help you find the right parts or accessories for your vehicle!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
}
