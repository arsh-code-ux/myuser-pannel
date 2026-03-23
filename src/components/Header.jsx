import React, { useState } from 'react';
import { Menu, X, Heart, ShoppingCart, User, LogOut } from 'lucide-react';

export function Header({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const handleMyInformation = () => {
    onNavigate('my-information');
    setIsAccountDropdownOpen(false);
  };

  const handleMyAddress = () => {
    onNavigate('my-address');
    setIsAccountDropdownOpen(false);
  };

  const handleMyPurchases = () => {
    onNavigate('my-purchases');
    setIsAccountDropdownOpen(false);
  };

  const handleMyStore = () => {
    onNavigate('my-store');
    setIsAccountDropdownOpen(false);
  };

  const handleHome = () => {
    onNavigate('home');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="luxury-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={handleHome} className="text-2xl md:text-3xl font-serif font-bold text-black hover:text-gray-700 transition cursor-pointer">
            Zigguratss
          </button>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search artifacts..."
                className="w-full px-5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Currency Selector */}
            <button className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition">
              $ USD
            </button>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 relative">
              <div 
                className="relative"
                onMouseEnter={() => setIsAccountDropdownOpen(true)}
                onMouseLeave={() => setIsAccountDropdownOpen(false)}
              >
                <button className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition duration-300">
                  <User className="w-4 h-4" />
                  Sign in
                </button>

                {/* Dropdown Menu */}
                {isAccountDropdownOpen && (
                  <div className="absolute top-full right-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
                    <button onClick={handleMyInformation} className="w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition flex items-center gap-2">
                      <User className="w-4 h-4" />
                      My Information
                    </button>
                    <button onClick={handleMyAddress} className="w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition flex items-center gap-2">
                      <User className="w-4 h-4" />
                      My Address
                    </button>
                    <button onClick={handleMyPurchases} className="w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      My Purchase
                    </button>
                    <button onClick={handleMyStore} className="w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition flex items-center gap-2">
                      <User className="w-4 h-4" />
                      My Store
                    </button>
                    <button className="w-full px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Creative Hub
                    </button>
                    <div className="border-t border-gray-200"></div>
                    <button className="w-full px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-gray-50 transition flex items-center gap-2">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Heart className="w-5 h-5 cursor-pointer hover:fill-red-500 hover:text-red-500 transition duration-300" />
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-600 transition duration-300" />
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <input
            type="text"
            placeholder="Search artifacts..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200 space-y-3">
            <a href="#" className="block text-sm font-medium hover:text-gray-600">Home</a>
            <a href="#" className="block text-sm font-medium hover:text-gray-600">Collections</a>
            <a href="#" className="block text-sm font-medium hover:text-gray-600">About</a>
            <a href="#" className="block text-sm font-medium hover:text-gray-600">Sign in</a>
          </nav>
        )}
      </div>

      {/* Category Navigation */}
      <div className="hidden md:block border-t border-gray-200 bg-white">
        <div className="luxury-container py-3">
          <div className="flex gap-8 overflow-x-auto text-sm font-medium">
            <button className="hover:text-gray-600 transition whitespace-nowrap">Artifacts</button>
            <button className="hover:text-gray-600 transition whitespace-nowrap">Paintings</button>
            <button className="hover:text-gray-600 transition whitespace-nowrap">Sculptures</button>
            <button className="hover:text-gray-600 transition whitespace-nowrap">Photography</button>
            <button className="hover:text-gray-600 transition whitespace-nowrap">Collectibles</button>
            <button className="hover:text-gray-600 transition whitespace-nowrap">Exhibitions</button>
          </div>
        </div>
      </div>
    </header>
  );
}
