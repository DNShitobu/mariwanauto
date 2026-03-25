"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "233241974527";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in your auto parts and accessories. Can you help me?");

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button
        onClick={openWhatsApp}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`fixed bottom-6 right-6 z-50 group ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        } transition-all duration-500`}
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <div className="absolute -top-16 right-0 bg-gray-900 rounded-2xl px-5 py-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none shadow-2xl">
            <p className="text-sm font-bold text-white">Chat with us!</p>
            <p className="text-xs text-gray-400">Click to start conversation</p>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-gray-900 transform rotate-45" />
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
            <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 shadow-green-500/40">
              <MessageCircle className="w-8 h-8" />
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
