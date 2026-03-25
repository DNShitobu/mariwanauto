import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { CartProvider } from "@/context/CartContext";
import { CartSidebar } from "@/components/CartSidebar";

export const metadata: Metadata = {
  title: "Mariwan Auto Parts | Premium Car Parts & Accessories",
  description: "Your trusted source for quality auto parts, seat covers, floor mats, batteries, wipers, lubricants, and more. Everything your car needs!",
  keywords: "auto parts, car accessories, seat covers, floor mats, batteries, wipers, lubricants, Mariwan",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%230ea5e9' rx='20' width='100' height='100'/><text x='50' y='70' font-size='60' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold'>M</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <CurrencyProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
            <CartSidebar />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
