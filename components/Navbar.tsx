"use client";

import Link from "next/link";
// Utility to sanitize user input (defense-in-depth)
function sanitizeInput(input: string) {
  // Remove script tags and encode special characters
  return input.replace(/<.*?>/g, "").replace(/["'`;]/g, "");
}
import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, Phone, ChevronDown } from "lucide-react";
import { SocialIcons } from "./SocialIcons";
import { useCart } from "@/context/CartContext";
import { CurrencySelector } from "./CurrencySelector";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const quickCategories = [
  { name: "Seat Covers", href: "/products?category=Seat Covers" },
  { name: "Floor Mats", href: "/products?category=Floor Mats" },
  { name: "Batteries", href: "/products?category=Car Batteries" },
  { name: "Wipers", href: "/products?category=Wipers & Wiper Blades" },
  { name: "Lubricants", href: "/products?category=Car Lubricants & Fluids" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getTotalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized = sanitizeInput(searchQuery.trim());
    if (sanitized) {
      window.location.href = `/products?search=${encodeURIComponent(sanitized)}`;
    }
  };

  const cartCount = getTotalItems();

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 shadow-md ${
      isScrolled ? "bg-white" : "bg-white"
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center gap-6">
              <SocialIcons variant="light" />
            </div>
            <div className="hidden lg:flex items-center gap-6 text-sm">
              <a href="tel:+233241974527" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4" />
                +233 24 197 4527
              </a>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">Mon-Sat: 8AM - 6PM</span>
            </div>
            <div className="flex items-center gap-4">
              <CurrencySelector />
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Mariwan Auto
                </h1>
                <p className="text-xs text-primary-600 font-semibold tracking-wide">PREMIUM AUTO PARTS</p>
              </div>
            </Link>

            <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for parts, accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-gray-200 bg-gray-50 focus:bg-white transition-colors focus:outline-none focus:border-primary-500"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </form>

            <div className="hidden lg:flex items-center gap-8">
              <div className="relative">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex items-center gap-2 text-gray-700 font-medium hover:text-primary-600 transition-colors"
                >
                  Categories
                  <ChevronDown className={`w-4 h-4 transition-transform ${showCategories ? "rotate-180" : ""}`} />
                </button>
                
                {showCategories && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowCategories(false)}
                    />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl border p-3 z-20">
                      {quickCategories.map((cat) => (
                        <Link
                          key={cat.name}
                          href={cat.href}
                          onClick={() => setShowCategories(false)}
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                          rel={cat.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          target={cat.href.startsWith('http') ? '_blank' : undefined}
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full" />
                          {cat.name}
                        </Link>
                      ))}
                      <div className="border-t mt-2 pt-2">
                        <Link
                          href="/products"
                          onClick={() => setShowCategories(false)}
                          className="flex items-center justify-center gap-2 px-4 py-3 text-primary-600 font-semibold hover:bg-primary-50 rounded-xl transition-colors"
                        >
                          View All Products
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-primary-600 transition-colors"
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-3 bg-gray-100 hover:bg-primary-50 rounded-2xl transition-colors"
              >
                <ShoppingBag className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce-in">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container-custom py-6">
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-2xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </form>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-gray-700 font-medium hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Quick Categories</p>
              <div className="flex flex-wrap gap-2">
                {quickCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    rel={cat.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    target={cat.href.startsWith('http') ? '_blank' : undefined}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Connect With Us</p>
              <SocialIcons variant="dark" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
