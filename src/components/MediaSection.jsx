import React from 'react'
import { Link } from 'react-router-dom'

function MediaSection({ title, description, linkText, linkUrl = "#", children}) {
  return (
    <div>
       <section className="py-8 md:py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side text layout */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <div className="w-full lg:max-w-100">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                {title}
              </h2>
              <p className="leading-relaxed text-base mb-6 text-zinc-400 font-light">
                {description}
              </p>
              <div className="inline-block">
                <Link to={linkUrl} className="relative inline-flex items-center gap-1.5 pb-1 text-sm md:text-base font-semibold text-[#7DD3FC] group">
                  <span>{linkText}</span>
                <span className="inline-flex items-center translate-x-0   transition-transform duration-300 ease-out">
                    <svg
                      className="w-3.5 h-3.5 opacity-100 group-hover:opacity-0 group-hover:scale-50 transition-all duration-400 absolute"
                      fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <svg
                      className="w-4.5 h-4.5 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400"
                      fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#58a6ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Slot - This dynamically receives whatever custom layout you build below */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-xl">
              {children}
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default MediaSection
