import Image from "next/image";

export default function Home() {
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

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] mx-auto bg-white">
      {/* Header */}
      <header className="flex flex-row max-w-[1200px] border-b bg-white">
        <div className="container mx-auto py-4 max-w-[1200px]">
          <div className="flex items-center justify-between">
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
      </header>

      <div className="flex flex-row items-center justify-between w-full max-w-[1200px] pt-8 mx-auto gap-8">
           <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-500 cursor-pointer transition-all duration-300">Home</a>
              <a href="#" className="text-gray-900 hover:text-gray-500 cursor-pointer transition-all duration-300">Beer</a>
              <a href="#" className="text-gray-900 hover:text-gray-500 cursor-pointer transition-all duration-300">Wine</a>
              <a href="#" className="text-gray-900 hover:text-gray-500 cursor-pointer transition-all duration-300">Liquor</a>
              <a href="#" className="text-gray-900 hover:text-gray-500 cursor-pointer transition-all duration-300">Mixers</a>
              <a href="#" className="text-gray-900 hover:text-gray-500 cursor-pointer transition-all duration-300">Tobacco</a>
              <a href="#" className="text-gray-900 hover:text-gray-500 cursor-pointer transition-all duration-300">Delivery</a>
              <a href="#" className="text-gray-900 hover:text-gray-500 cursor-pointer transition-all duration-300">More</a>
            </nav>
            <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="pl-4 pr-10 py-2 border rounded-full w-full bg-white"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto pt-8 bg-white max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col items-center p-4 rounded-xl bg-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.10)] hover:drop-shadow-[0_4px_10px_rgba(0,0,0,0.20)] transition-all duration-200 cursor-pointer"
            >
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
              <button className="mt-4 w-full text-sm border border-gray-200 py-2 text-gray-800 rounded-md hover:bg-black hover:text-gray-100 transition duration-300">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
