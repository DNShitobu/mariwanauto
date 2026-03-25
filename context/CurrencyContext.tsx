"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Currency = "USD" | "EUR" | "GBP" | "GHS" | "CNY";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (priceInUSD: number) => string;
  currencySymbol: string;
  currencyName: string;
}

const exchangeRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  GHS: 15.50,
  CNY: 7.24,
};

const currencyInfo: Record<Currency, { symbol: string; name: string }> = {
  USD: { symbol: "$", name: "US Dollar" },
  EUR: { symbol: "€", name: "Euro" },
  GBP: { symbol: "£", name: "British Pound" },
  GHS: { symbol: "₵", name: "Ghana Cedis" },
  CNY: { symbol: "¥", name: "Chinese Yuan" },
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const convertPrice = (priceInUSD: number): string => {
    const converted = priceInUSD * exchangeRates[currency];
    return `${currencyInfo[currency].symbol}${converted.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
        currencySymbol: currencyInfo[currency].symbol,
        currencyName: currencyInfo[currency].name,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
