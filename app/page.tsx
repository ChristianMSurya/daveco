import Image from "next/image";
import Header from '@/components/Header';
import BannerCarousel from '@/components/BannerCarousel';

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
] as const;

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white w-full">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto bg-white max-w-[1200px] mt-8 px-4 md:px-8">
        <div className="relative">
          {/* Carousel Container */}
          <BannerCarousel slides={bannerSlides} />
        </div>

        <div className="flex justify-between items-center mt-12 mb-6">
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
                className="object-cover"
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
                className="object-cover"
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
              className="object-cover"
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
        <div className="flex flex-col mx-auto max-w-[1200px] px-4 md:px-8 py-12">
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
