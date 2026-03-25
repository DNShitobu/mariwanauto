"use client";

import Link from "next/link";
import { ArrowRight, Shield, Truck, CreditCard, Award, Star, Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Package, Headphones, Sparkles, Wrench, Droplet, Battery, Wind, Paintbrush, Check, Users, Globe } from "lucide-react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&q=80",
    title: "Premium Auto Accessories",
    subtitle: "Transform your car with our wide range of accessories",
  },
  {
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80",
    title: "Quality Spare Parts",
    subtitle: "Genuine parts for all vehicle makes and models",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    title: "Car Care Products",
    subtitle: "Everything you need to keep your car looking new",
  },
];

const featuredProducts = [
  { id: "sc-001", name: "Premium Leather Seat Covers Set", category: "Seat Covers", price: 189.99, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80" },
  { id: "fm-001", name: "All-Weather Rubber Floor Mats", category: "Floor Mats", price: 89.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "bc-002", name: "Outdoor Premium Car Cover", category: "Car Body Covers", price: 159.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "bat-002", name: "AGM Premium Car Battery", category: "Car Batteries", price: 199.99, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80" },
  { id: "wp-001", name: "Premium Flat Wiper Blades", category: "Wipers & Wiper Blades", price: 29.99, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
  { id: "lf-001", name: "Synthetic Engine Oil 5W-30 5L", category: "Car Lubricants & Fluids", price: 54.99, image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80" },
];

const categoryHighlights = [
  { name: "Seat Covers", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80", count: 15 },
  { name: "Floor Mats", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80", count: 12 },
  { name: "Car Body Covers", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", count: 8 },
  { name: "Batteries", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80", count: 10 },
  { name: "Wipers", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80", count: 14 },
  { name: "Lubricants", image: "https://images.unsplash.com/photo-1635784156197-4f61f4c58ec0?w=400&q=80", count: 20 },
];

const whyChooseUs = [
  { icon: Package, title: "Wide Selection", description: "Over 1000+ products including seat covers, floor mats, batteries, wipers, and more." },
  { icon: Headphones, title: "Expert Advice", description: "Our knowledgeable team helps you find the right parts and accessories." },
  { icon: Truck, title: "Fast Delivery", description: "Quick delivery options available. Get your parts delivered to your doorstep." },
  { icon: Shield, title: "Quality Guaranteed", description: "All products are quality-tested from trusted manufacturers." },
];

const productRange = [
  { icon: Wrench, name: "Spare Parts", items: ["Brake Pads", "Filters", "Spark Plugs"] },
  { icon: Droplet, name: "Lubricants", items: ["Engine Oils", "Brake Fluids", "Coolants"] },
  { icon: Battery, name: "Batteries", items: ["Lead-Acid", "AGM", "Chargers"] },
  { icon: Wind, name: "Wipers", items: ["Wiper Blades", "Washer Pumps", "Wiper Arms"] },
  { icon: Paintbrush, name: "Body Care", items: ["Fillers", "Adhesives", "Cleaners"] },
  { icon: Sparkles, name: "Interior", items: ["Seat Covers", "Floor Mats", "Decor"] },
];

const testimonials = [
  { name: "Kwame A.", role: "Toyota Owner", text: "Best selection of seat covers I've found. Great quality and affordable prices!", rating: 5 },
  { name: "Ama B.", role: "Honda Owner", text: "Fast delivery and excellent customer service. Highly recommended!", rating: 5 },
  { name: "John D.", role: "Ford Owner", text: "Professional advice helped me find the right battery for my truck. Thank you!", rating: 5 },
];

const trustBadges = [
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Users, label: "Happy Customers", value: "5000+" },
  { icon: Truck, label: "Fast Delivery", value: "24-48h" },
  { icon: Globe, label: "Countries Served", value: "10+" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[650px] lg:h-[700px] overflow-hidden">
        <HeroCarousel slides={heroSlides} />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-custom relative">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-white/95 text-primary-700 text-sm font-bold px-5 py-2 rounded-full mb-6 shadow-xl">
                <Sparkles className="w-4 h-4" />
                Your One-Stop Car Shop
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-gray-900 drop-shadow-lg">
                Premium Car Parts &{" "}
                <span className="text-primary-600">Accessories</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                From seat covers and floor mats to batteries, wipers, lubricants, body fillers, air fresheners, and more. Everything your car needs!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Browse Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-gray-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 -mt-8 relative z-20">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-gray-900">{badge.value}</p>
                      <p className="text-sm text-gray-500 font-medium">{badge.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-primary-600 font-bold text-sm uppercase tracking-wider">Our Categories</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-1">Popular Categories</h2>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-primary-600 hover:text-primary-700 font-bold transition-colors">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoryHighlights.map((cat, index) => (
              <Link
                key={index}
                href={`/products?category=${encodeURIComponent(cat.name)}`}
                className="group bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 text-center"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-24 object-cover rounded-xl mb-3 group-hover:scale-105 transition-transform"
                />
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.count}+ items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-1 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From seat covers and floor mats to batteries, wipers, lubricants, and car care products, we have everything you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:bg-primary-50 transition-colors group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-primary-600 font-bold text-sm uppercase tracking-wider">Featured Products</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-1">Popular Items</h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-bold group"
            >
              View All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary-400 font-bold text-sm uppercase tracking-wider">Our Range</span>
            <h2 className="text-3xl md:text-4xl font-black mt-1">Our Product Range</h2>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              We offer a wide variety of car parts and accessories to meet all your automotive needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {productRange.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/20 transition-colors">
                  <Icon className="w-10 h-10 text-primary-400 mb-4" />
                  <h3 className="font-bold mb-2">{item.name}</h3>
                  <div className="space-y-1">
                    {item.items.map((subItem, i) => (
                      <p key={i} className="text-sm text-gray-400">{subItem}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-bold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-1">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Need Help Finding the Right Part?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Our expert team is ready to assist you. Get personalized recommendations and competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Contact Us Today
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary-900 transition-colors border-2 border-white/20"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-gray-900 text-white py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="font-bold">+233 24 197 4527</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Email Us</p>
                <p className="font-bold">info@mariwanauto.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Visit Us</p>
                <p className="font-bold">123 Auto Drive, City</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Business Hours</p>
                <p className="font-bold">Mon-Sat: 8AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
