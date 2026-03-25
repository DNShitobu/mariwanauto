"use client";

import Link from "next/link";
import { SocialIcons } from "./SocialIcons";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Seat Covers", href: "/products?category=Seat Covers" },
    { name: "Floor Mats", href: "/products?category=Floor Mats" },
    { name: "Car Body Covers", href: "/products?category=Car Body Covers" },
    { name: "Car Batteries", href: "/products?category=Car Batteries" },
    { name: "Wipers & Blades", href: "/products?category=Wipers & Wiper Blades" },
    { name: "Lubricants & Fluids", href: "/products?category=Car Lubricants & Fluids" },
  ],
  services: [
    { name: "Product Consultation", href: "/services" },
    { name: "Bulk Orders", href: "/contact" },
    { name: "Delivery Services", href: "/services" },
    { name: "Technical Support", href: "/contact" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Return Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Mariwan Auto</h2>
                <p className="text-xs text-primary-400 font-semibold tracking-wide">PREMIUM AUTO PARTS</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for quality automotive parts, accessories, and car care products. Serving customers with excellence since 2010.
            </p>
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Follow Us</p>
              <SocialIcons variant="light" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Auto Drive, Industrial Area, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">+233 24 197 4527</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">info@mariwanauto.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">Mon-Sat: 8AM - 6PM</span>
              </li>
            </ul>
            
            <a
              href="https://wa.me/233241974527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-bold transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Mariwan Auto Parts. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
