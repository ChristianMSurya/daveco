'use client'
import Image from "next/image";
import { useState, useEffect, useCallback } from 'react';

const bannerSlides = [
  {
    image: "/vineyard.jpg",
    title: "Discover Our Wines",
    description: "Explore our curated selection of fine wines from around the world"
  },
  {
    image: "/whiskey.jpg",
    title: "Premium Spirits",
    description: "Find your perfect whiskey, bourbon, or scotch"
  },
  {
    image: "/beer.jpg",
    title: "Craft Beer Selection",
    description: "Local and international craft beers for every taste"
  }
];

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
    price: 24.99,
    volume: "750 ML",
    image: "/jack-daniels.png"
  },
  {
    id: 3,
    name: "The Dalmore 25 Year",
    price: 1499.99,
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
    price: 1499.99,
    volume: "750 ML",
    image: "/dalmore.png"
  },
  {
    id: 7,
    name: "Jack Daniel's No. 7 Black",
    price: 24.99,
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

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white w-full">
      {/* Header */}
      <header className="w-full bg-white">
        {/* Top Bar */}
        <div className="max-w-[1200px] mx-auto px-8">
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
        </div>

        {/* Navigation Bar */}
        <div className="w-full border-t border-gray-200">
          <div className="w-full border-b border-gray-200">
            <div className="max-w-[1200px] mx-auto px-8">
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

                  {/* Liquor Dropdown */}
                  <div className="relative group">
                    <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Liquor</a>
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
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-gray-900 mb-2">By Country</h3>
                          <div className="space-y-2">
                            {liquorCategories.country.map((country) => (
                              <a key={country} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{country}</a>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 mb-2">By Brand</h3>
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
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-gray-900 mb-2">By Brand</h3>
                          <div className="space-y-2">
                            {mixersCategories.brand.map((brand) => (
                              <a key={brand} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{brand}</a>
                            ))}
                          </div>
                        </div>
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

                  <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Tobacco</a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">Delivery</a>

                  {/* More Dropdown */}
                  <div className="relative group">
                    <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-300">More</a>
                    <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-100 rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-gray-900 mb-2">Accessories</h3>
                          <div className="space-y-2">
                            {moreCategories.accessories.map((item) => (
                              <a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{item}</a>
                            ))}
                          </div>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold text-gray-900 mb-2">Snacks</h3>
                          <div className="space-y-2">
                            {moreCategories.snacks.map((item) => (
                              <a key={item} href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">{item}</a>
                            ))}
                          </div>
                        </div>
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
                <div className="flex items-center gap-4 w-full">
                  <div className="relative w-full">
                    <form onSubmit={handleSearch} className="relative w-full">
                      <input
                        type="search"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.1)] focus:outline-none focus:border-gray-300 w-full text-gray-900 placeholder-gray-500 caret-gray-900"
                      />
                      <button 
                        type="submit"
                        className="absolute left-3 top-1/2 -translate-y-1/2 hover:text-gray-700 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
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
                      <a key={type} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2 transition-colors duration-300">{type}</a>
                    ))}
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">By Country</div>
                    {beerCategories.country.map((country) => (
                      <a key={country} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2 transition-colors duration-300">{country}</a>
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
                      <a key={type} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2 transition-colors duration-300">{type}</a>
                    ))}
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">By Variety</div>
                    {wineCategories.variety.map((variety) => (
                      <a key={variety} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2 transition-colors duration-300">{variety}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Liquor Menu */}
              <div className="space-y-4">
                <div className="text-xl text-gray-900 font-medium">Liquor</div>
                <div className="pl-4 space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">By Type</div>
                    {liquorCategories.type.map((type) => (
                      <a key={type} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2 transition-colors duration-300">{type}</a>
                    ))}
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">By Brand</div>
                    {liquorCategories.brand.map((brand) => (
                      <a key={brand} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2 transition-colors duration-300">{brand}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Mixers Menu */}
              <div className="space-y-4">
                <div className="text-xl text-gray-900 font-medium">Mixers</div>
                <div className="pl-4 space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">By Type</div>
                    {mixersCategories.type.map((type) => (
                      <a key={type} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2 transition-colors duration-300">{type}</a>
                    ))}
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">By Flavor</div>
                    {mixersCategories.flavor.map((flavor) => (
                      <a key={flavor} href="#" className="block text-base text-gray-500 hover:text-gray-900 py-2 transition-colors duration-300">{flavor}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="#" className="block text-xl text-gray-500 hover:text-gray-900 transition-colors duration-300">Tobacco</a>
                <a href="#" className="block text-xl text-gray-500 hover:text-gray-900 transition-colors duration-300">Delivery</a>
                <a href="#" className="block text-xl text-gray-500 hover:text-gray-900 transition-colors duration-300">More</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto bg-white max-w-[1200px] mt-8 px-8">
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {bannerSlides.map((slide, index) => (
                <div key={index} className="relative flex-shrink-0 w-full">
                  <div className="relative flex items-center justify-center bg-gray-100 w-full aspect-[3/1] overflow-hidden">
                    <div className="absolute inset-0">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover object-center"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 p-4 sm:p-8 text-white text-center max-w-2xl mx-auto">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1 sm:mb-2">{slide.title}</h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-100">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white/50 hover:text-white p-2 rounded-full shadow-lg transition-all duration-300 z-20 group"
              aria-label="Previous slide"
            >
              <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white/50 hover:text-white p-2 rounded-full shadow-lg transition-all duration-300 z-20 group"
              aria-label="Next slide"
            >
              <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          {/* Slide Indicators below the carousel */}
          <div className="flex justify-center space-x-2 mt-4 mb-10">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gray-800 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Best Sellers</h1>
          <button className="text-md text-gray-500 hover:text-gray-900 transition-colors duration-200">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col bg-white p-4 rounded-xl overflow-hidden border border-gray-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col w-full items-center cursor-pointer">
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-start w-full gap-1">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="text-sm text-gray-500">{product.volume}</div>
                  <div className="flex items-center space-x-[2px]">
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

          {/* Quick Banners */}
        <div className="w-full max-w-7xl mx-auto py-20">
          <div className="flex flex-col md:flex-row gap-6">
            {/* First Banner */}
            <div className="flex-1 relative aspect-[2/1] overflow-hidden rounded-xl bg-gray-100 cursor-pointer group hover:shadow-lg transition-all duration-300">
              <Image
                src="/whiskey.jpg"
                alt="Whiskey Deal"
                fill
                className="object-cover transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-1">15% OFF Whiskeys</h2>
                <p className="text-sm sm:text-base text-gray-100">All single malts, this weekend only</p>
              </div>
            </div>
            
            {/* Second Banner */}
            <div className="flex-1 relative aspect-[2/1] overflow-hidden rounded-xl bg-gray-100 cursor-pointer group hover:shadow-lg transition-all duration-300 transform hover:scale-[1.0]">
              <Image
                src="/beer.jpg"
                alt="Craft Beer Deal"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.0]"
                priority
              />
              <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/20" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-1">Buy 2 Get 1 Free</h2>
                <p className="text-sm sm:text-base text-gray-100">On all craft beer 6-packs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Colorado Banner */}

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">New Arrivals</h1>
          <button className="text-md text-gray-500 hover:text-gray-900 transition-colors duration-200">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col bg-white p-4 rounded-xl overflow-hidden border border-gray-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col w-full items-center cursor-pointer">
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-start w-full gap-1">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="text-sm text-gray-500">{product.volume}</div>
                  <div className="flex items-center space-x-[2px]">
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

        <div className="w-full max-w-7xl mx-auto mb-4 mt-16">
          <div className="relative aspect-[3/1] overflow-hidden rounded-xl bg-gray-100 cursor-pointer group hover:shadow-lg transition-all duration-300">
            <Image
              src="/colorado.jpg"
              alt="Colorado"
              fill
              className="object-cover transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
            
            {/* Holder Image Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[400px] h-[400px]">
                <Image
                  src="/holder.png"
                  alt="Holder"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full mt-16 border-t border-gray-200">
        <div className="flex flex-col mx-auto max-w-[1200px] px-8 py-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-medium">Daveco Beer Wine & Spirits</p>
                <p>2555 Prairie Center Pkwy</p>
                <p>Brighton, CO 80601</p>
                <p className="mt-4"><a href="tel:(303) 951-3820" className="hover:text-gray-900 transition-colors duration-300">(303) 951-3820</a></p>
                <p><a href="mailto:davecoliquors@gmail.com" className="hover:text-gray-900 transition-colors duration-300">davecoliquors@gmail.com</a></p>
              </div>
            </div>

            {/* Store Hours */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Store Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between gap-6"><span>Monday - Tuesday</span><span>8:00 AM - 9:00 PM</span></p>
                <p className="flex justify-between gap-6"><span>Wednesday</span><span>8:00 AM - 5:00 PM</span></p>
                <p className="flex justify-between gap-6"><span>Thursday</span><span>8:00 AM - 9:00 PM</span></p>
                <p className="flex justify-between gap-6"><span>Friday - Saturday</span><span>8:00 AM - 10:00 PM</span></p>
                <p className="flex justify-between gap-6"><span>Sunday</span><span>9:00 AM - 7:00 PM</span></p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-600">
                <p><a href="#" className="hover:text-gray-900 transition-colors duration-300">About</a></p>
                <p><a href="#" className="hover:text-gray-900 transition-colors duration-300">Coupons</a></p>
                <p><a href="#" className="hover:text-gray-900 transition-colors duration-300">FAQs</a></p>
                <p><a href="#" className="hover:text-gray-900 transition-colors duration-300">Contact Us</a></p>
                <p><a href="#" className="hover:text-gray-900 transition-colors duration-300">Sitemap</a></p>
                <p><a href="#" className="hover:text-gray-900 transition-colors duration-300">Locations</a></p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Test Site. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
