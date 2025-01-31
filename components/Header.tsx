'use client'
import Image from "next/image";
import { useState } from 'react';

// Categories data
const beerCategories = {
  type: ['Lager', 'IPA', 'Stout', 'Pilsner', 'Ale', 'Wheat Beer'],
  country: ['Belgium', 'Germany', 'United States', 'Czech Republic', 'Ireland'],
  brand: ['Domestic', 'Craft', 'Import', 'Local Breweries']
};

const wineCategories = {
  type: ['Red', 'White', 'Rosé', 'Sparkling', 'Dessert'],
  country: ['France', 'Italy', 'Spain', 'United States', 'Argentina'],
  variety: ['Cabernet', 'Merlot', 'Chardonnay', 'Pinot Noir', 'Sauvignon Blanc']
};

const liquorCategories = {
  type: ["Whiskey", "Vodka", "Gin", "Rum", "Tequila", "Brandy"],
  country: ["USA", "Scotland", "Ireland", "Russia", "Mexico"],
  brand: ["Jack Daniel's", "Grey Goose", "Bacardi", "Patron", "Hennessy"]
};

const mixersCategories = {
  type: ["Sodas", "Juices", "Tonics", "Syrups", "Energy Drinks"],
  brand: ["Coca-Cola", "Red Bull", "Fever-Tree", "Fentimans", "Ocean Spray"],
  flavor: ["Cola", "Ginger", "Citrus", "Berry", "Tropical"]
};

const moreCategories = {
  accessories: ["Glassware", "Bar Tools", "Ice", "Gift Sets", "Decanters"],
  snacks: ["Chips", "Nuts", "Jerky", "Chocolates", "Crackers"],
  tobacco: ["Cigarettes", "Cigars", "Rolling Papers", "Lighters"]
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategory, setOpenCategory] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col max-w-[1200px] w-full">
          <div className="flex w-full py-4">
            <div className="flex w-full items-center justify-between">
              {/* Left side - Logo */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/record.png"
                  alt="Guinness Logo"
                  width={60}
                  height={40}
                />
              </div>

              <div>
                <Image
                  src="/daveco_logo.png"
                  alt="Daveco Liquors"
                  width={100}
                  height={40}
                />
              </div>

              {/* Right side - Search, Account, Cart */}
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-full border-t border-gray-200">
        <div className="w-full border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="flex flex-row items-center justify-between py-6 gap-32">
              <nav className="hidden md:flex space-x-8 w-full">
                <a href="#" className="text-gray-900 border-b-2 border-gray-400 pb-[2px] cursor-pointer transition-all duration-300">Home</a>
                
                {/* Beer Dropdown */}
                <div className="relative group">
                  <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Beer</a>
                  <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Type</h3>
                        <div className="space-y-2">
                          {beerCategories.type.map((type) => (
                            <a key={type} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{type}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Country</h3>
                        <div className="space-y-2">
                          {beerCategories.country.map((country) => (
                            <a key={country} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{country}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Brand</h3>
                        <div className="space-y-2">
                          {beerCategories.brand.map((brand) => (
                            <a key={brand} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{brand}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wine Dropdown */}
                <div className="relative group">
                  <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Wine</a>
                  <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Type</h3>
                        <div className="space-y-2">
                          {wineCategories.type.map((type) => (
                            <a key={type} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{type}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Country</h3>
                        <div className="space-y-2">
                          {wineCategories.country.map((country) => (
                            <a key={country} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{country}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Variety</h3>
                        <div className="space-y-2">
                          {wineCategories.variety.map((variety) => (
                            <a key={variety} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{variety}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spirits Dropdown */}
                <div className="relative group">
                  <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Spirits</a>
                  <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Type</h3>
                        <div className="space-y-2">
                          {liquorCategories.type.map((type) => (
                            <a key={type} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{type}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Country</h3>
                        <div className="space-y-2">
                          {liquorCategories.country.map((country) => (
                            <a key={country} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{country}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Popular Brands</h3>
                        <div className="space-y-2">
                          {liquorCategories.brand.map((brand) => (
                            <a key={brand} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{brand}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mixers Dropdown */}
                <div className="relative group">
                  <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Mixers</a>
                  <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Type</h3>
                        <div className="space-y-2">
                          {mixersCategories.type.map((type) => (
                            <a key={type} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{type}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Brand</h3>
                        <div className="space-y-2">
                          {mixersCategories.brand.map((brand) => (
                            <a key={brand} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{brand}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Flavor</h3>
                        <div className="space-y-2">
                          {mixersCategories.flavor.map((flavor) => (
                            <a key={flavor} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{flavor}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* More Dropdown */}
                <div className="relative group">
                  <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">More</a>
                  <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Accessories</h3>
                        <div className="space-y-2">
                          {moreCategories.accessories.map((item) => (
                            <a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{item}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Snacks</h3>
                        <div className="space-y-2">
                          {moreCategories.snacks.map((item) => (
                            <a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{item}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Tobacco</h3>
                        <div className="space-y-2">
                          {moreCategories.tobacco.map((item) => (
                            <a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{item}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Search Bar */}
              <div className="flex items-center gap-4 w-full">
                <div className="relative w-full">
                  <form onSubmit={handleSearch} className="relative w-full">
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`pl-10 pr-${searchQuery ? '24' : '4'} py-2 border border-gray-200 rounded-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.1)] focus:outline-none focus:border-gray-300 w-full text-gray-900 placeholder-gray-500 caret-gray-900 transition-all duration-300`}
                    />
                    {/* Search Icon */}
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    {/* Submit Button */}
                    <button 
                      type="submit"
                      className={`absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300 ease-in-out
                        ${searchQuery 
                          ? 'opacity-100 hover:bg-red-700 active:scale-95' 
                          : 'opacity-0 pointer-events-none'}`}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden flex items-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg 
                  className="w-6 h-6 text-gray-700" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMobileMenuOpen 
                      ? "M6 18L18 6M6 6l12 12" 
                      : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl z-50" onClick={e => e.stopPropagation()}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-gray-500 hover:text-gray-900"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-4 border-b">
                <form onSubmit={handleSearch} className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </form>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto">
                <nav className="px-2 py-4 space-y-1">
                  {/* Main Categories */}
                  <div className="space-y-2">
                    {[
                      { name: 'Wine', submenu: ['Red Wine', 'White Wine', 'Rosé', 'Sparkling', 'Natural Wines'] },
                      { name: 'Beer', submenu: ['Craft Beer', 'Import', 'Domestic', 'Local Breweries'] },
                      { name: 'Spirits', submenu: ['Whiskey', 'Vodka', 'Gin', 'Tequila', 'Rum', 'Cognac'] },
                      { name: 'Mixers & More', submenu: ['Mixers', 'Bitters', 'Bar Tools', 'Glassware'] }
                    ].map((category) => (
                      <div key={category.name} className="space-y-1">
                        <button
                          onClick={() => setOpenCategory(openCategory === category.name ? '' : category.name)}
                          className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-150"
                        >
                          <span className="font-medium">{category.name}</span>
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${
                              openCategory === category.name ? 'transform rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Submenu */}
                        <div
                          className={`space-y-1 transition-all duration-200 ease-in-out ${
                            openCategory === category.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                          }`}
                        >
                          {category.submenu.map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="block px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-150"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Account Links */}
                  <div className="mt-6 pt-6 border-t">
                    <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-150">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      My Account
                    </a>
                    <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-150">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Cart
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
