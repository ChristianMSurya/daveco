'use client'
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Pikesville Rye 110 Whiskey",
      price: 54.99,
      volume: "750 ML",
      image: "/pikesville.png"
    },
    {
      id: 2,
      name: "Jack Daniel's No. 7 Black",
      price: 54.99,
      volume: "750 ML",
      image: "/jack-daniels.png"
    },
    {
      id: 3,
      name: "The Dalmore 25 Year",
      price: 89.99,
      volume: "750 ML",
      image: "/dalmore.png"
    },
    {
      id: 4,
      name: "Jim Beam Kentucky Straight",
      price: 19.99,
      volume: "750 ML",
      image: "/jim.png"
    },
    {
      id: 5,
      name: "Pikesville Rye 110 Whiskey",
      price: 54.99,
      volume: "750 ML",
      image: "/pikesville.png"
    },
    {
      id: 6,
      name: "The Dalmore 25 Year",
      price: 89.99,
      volume: "750 ML",
      image: "/dalmore.png"
    },
    {
      id: 7,
      name: "Jack Daniel's No. 7 Black",
      price: 54.99,
      volume: "750 ML",
      image: "/jack-daniels.png"
    },
    {
      id: 8,
      name: "Jim Beam Kentucky Straight",
      price: 19.99,
      volume: "750 ML",
      image: "/jim.png"
    }
  ];

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white w-full">
      {/* Header */}
      <header className="flex flex-col bg-white w-full items-center justify-center max-w-[1200px]">
        <div className="flex flex-col max-w-[1200px] w-full">
          <div className="flex w-full px-8 py-4">
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
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-y">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="flex flex-row items-center justify-between py-6 gap-8">
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 border-b-2 border-gray-400 pb-1 cursor-pointer transition-all duration-300">Home</a>
                
                {/* Beer Dropdown */}
                <div className="relative group">
                  <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Beer</a>
                  <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Type</h3>
                        <div className="space-y-2">
                          {beerCategories.type.map((type) => (
                            <a key={type} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{type}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Country</h3>
                        <div className="space-y-2">
                          {beerCategories.country.map((country) => (
                            <a key={country} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{country}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Brand</h3>
                        <div className="space-y-2">
                          {beerCategories.brand.map((brand) => (
                            <a key={brand} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{brand}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wine Dropdown */}
                <div className="relative group">
                  <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Wine</a>
                  <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-100 rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Type</h3>
                        <div className="space-y-2">
                          {wineCategories.type.map((type) => (
                            <a key={type} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{type}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Country</h3>
                        <div className="space-y-2">
                          {wineCategories.country.map((country) => (
                            <a key={country} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{country}</a>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-px bg-gray-100 my-3" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">By Variety</h3>
                        <div className="space-y-2">
                          {wineCategories.variety.map((variety) => (
                            <a key={variety} href="#" className="block text-sm text-gray-500 hover:text-gray-900">{variety}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Liquor</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Mixers</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Tobacco</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Delivery</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">More</a>
              </nav>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 w-full"
                  />
                  <button className="absolute left-3 top-1/2 -translate-y-1/2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
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
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Image
                src="/daveco_logo.png"
                alt="Daveco Liquors"
                width={100}
                height={40}
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 p-6 space-y-6">
              <a href="#" className="block text-xl text-gray-900 font-medium">Home</a>
              
              {/* Mobile Beer Menu */}
              <div className="space-y-4">
                <div className="text-xl text-gray-900 font-medium">Beer</div>
                <div className="pl-4 space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">By Type</div>
                    {beerCategories.type.map((type) => (
                      <a key={type} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2">{type}</a>
                    ))}
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">By Country</div>
                    {beerCategories.country.map((country) => (
                      <a key={country} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2">{country}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Wine Menu */}
              <div className="space-y-4">
                <div className="text-xl text-gray-900 font-medium">Wine</div>
                <div className="pl-4 space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">By Type</div>
                    {wineCategories.type.map((type) => (
                      <a key={type} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2">{type}</a>
                    ))}
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">By Variety</div>
                    {wineCategories.variety.map((variety) => (
                      <a key={variety} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2">{variety}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="#" className="block text-xl text-gray-500 hover:text-gray-900">Liquor</a>
                <a href="#" className="block text-xl text-gray-500 hover:text-gray-900">Mixers</a>
                <a href="#" className="block text-xl text-gray-500 hover:text-gray-900">Tobacco</a>
                <a href="#" className="block text-xl text-gray-500 hover:text-gray-900">Delivery</a>
                <a href="#" className="block text-xl text-gray-500 hover:text-gray-900">More</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto bg-white max-w-[1200px] mt-8 px-8">
        <h1 className="text-xl font-semibold text-gray-900 mb-2">Best Sellers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col items-center p-4 rounded-xl bg-white border border-gray-200 drop-shadow-[0_4px_8px_rgba(0,0,0,0.03)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] transition-all duration-200"
            >
              <div className="flex flex-col w-full items-center cursor-pointer">
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-start w-full gap-1">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="text-sm text-gray-500">{product.volume}</div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <h3 className="text-md font-bold text-black truncate w-full">{product.name}</h3>
                <div className="text-md text-gray-500">${product.price}</div>
              </div>
              </div>
              <button className="mt-4 w-full text-sm border border-gray-200 py-2 text-gray-500 rounded-md hover:bg-[#D00027] hover:text-gray-100 transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
