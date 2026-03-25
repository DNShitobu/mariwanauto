"use client";

import { useCurrency, Currency } from "@/context/CurrencyContext";
import { ChevronDown } from "lucide-react";

const currencies: { code: Currency; name: string; symbol: string }[] = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "GHS", name: "Ghana Cedis", symbol: "₵" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
];

export function CurrencySelector() {
  const { currency, setCurrency, currencySymbol, currencyName } = useCurrency();

  return (
    <div className="relative">
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as Currency)}
        className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none cursor-pointer text-sm font-medium"
      >
        {currencies.map((curr) => (
          <option key={curr.code} value={curr.code}>
            {curr.symbol} {curr.code}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}
