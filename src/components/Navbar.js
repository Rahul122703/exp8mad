import React, { useState } from "react";
import Input from "./ui/Input";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold">ShopEasy</h1>
      </div>

      <div className="hidden sm:flex items-center gap-2 flex-grow max-w-md">
        <Input
          placeholder="Search..."
          className="w-full border rounded-md px-2 py-1"
        />
        <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>

      <div className="flex items-center gap-4">
        <ShoppingCart className="w-5 h-5 cursor-pointer" />
        <User className="w-5 h-5 cursor-pointer" />
      </div>

      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center p-4 lg:hidden">
          <Input
            placeholder="Search..."
            className="w-64 border rounded-md px-2 py-1 mb-2"
          />
          <div className="flex gap-4">
            <Search className="w-5 h-5 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}
