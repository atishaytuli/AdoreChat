function Navbar() {
  return (
    <>
      <div className="bg-white shadow-lg border-b border-gray-100 w-full top-0 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <img
                  className="h-5 w-auto md:h-7"
                  src="./logo.png"
                  alt="AdoreChat Logo"
                />
                <img
                  className="h-5 w-auto md:h-6"
                  src="./logo2.png"
                  alt=""
                />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-10">
              <a
                href="#features"
                className="text-[15px] font-medium text-gray-600 hover:text-pink-500 transition-all duration-300 hover:scale-105"
              >
                Video Call
              </a>
              <a
                href="#resources"
                className="text-[15px] font-medium text-gray-600 hover:text-pink-500 transition-all duration-300 hover:scale-105"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-[15px] font-medium text-gray-600 hover:text-pink-500 transition-all duration-300 hover:scale-105"
              >
                Free Forever
              </a>

              <div className="flex items-center space-x-6">
                <a
                  href="/login"
                  className="text-[15px] font-medium text-gray-600 hover:text-pink-500 transition-all duration-300 hover:scale-105"
                >
                  Login
                </a>
                <div className="relative inline-flex group ml-10">
                  <div
                    className="absolute duration-700 transform rotate-180 transitiona-all opacity-70 -inset-1 rounded-lg blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                    style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}
                  ></div>
                  <a
                    href="https://github.com/atishaytuli07"
                    target="_blank"
                    className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-gray-900 rounded-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>


            <div className="md:hidden ml-10">
              <div className="relative inline-flex group">
                <div
                  className="absolute duration-700 transform rotate-180 transitiona-all opacity-70 -inset-1 rounded-lg blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                  style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}
                ></div>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all duration-300 bg-gray-900 rounded-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Start Call
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
