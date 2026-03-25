"use client";

import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";

interface SocialIconProps {
  className?: string;
  variant?: "light" | "dark" | "primary";
  showLabels?: boolean;
}

export function SocialIcons({ className = "", variant = "primary", showLabels = false }: SocialIconProps) {
  const socials = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/mariwanautoparts" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/mariwanautoparts" },
    { name: "TikTok", icon: MessageCircle, url: "https://tiktok.com/@mariwanautoparts" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/mariwanautoparts" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@mariwanautoparts" },
  ];

  const variants = {
    light: "bg-white/10 hover:bg-primary-500 text-white",
    dark: "bg-gray-100 hover:bg-primary-500 text-gray-600 hover:text-white",
    primary: "bg-primary-500 hover:bg-primary-600 text-white",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${variants[variant]}`}
            aria-label={`Follow us on ${social.name}`}
            title={social.name}
          >
            <Icon className="w-5 h-5" />
            {showLabels && <span className="text-sm font-medium hidden sm:inline">{social.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
