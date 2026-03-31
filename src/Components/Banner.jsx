import React from 'react';
const Banner = () => {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-tight mb-5">
              Supercharge Your{' '}
              <span className="text-purple-600">Digital Workflow</span>
            </h1>

            <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-purple-200">
                Explore Products
              </button>
              <button className="flex items-center gap-1 border border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-700 px-8 py-3.5 rounded-xl font-semibold text-base transition-all">
                <img src="./src/assets/assets/play.png" alt="#" /> Watch Demo
              </button>
            </div>
           </div>

          {/* Right Illustration */}
          <div className="flex-1 flex justify-center md:justify-end">
           <img src="./src/assets/assets/banner.png" alt="#" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner ;