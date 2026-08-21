import React from 'react'
import { Link } from 'react-router-dom'
 
function Mostout({icon,title,LinkText,hRef}) {
  return (
           <div className="">
              <Link
      to={hRef}
      className="block h-full group/card outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
    >
            <div className="bg-[#111615] p-8 rounded-xl h-full flex flex-col justify-between"> 
              <div className="bg-[#0f3522] w-12 rounded-xl h-12 flex justify-center items-center">
                {icon}
              </div>

              <h2 className="text-xl pt-6 md:text-2xl font-semibold tracking-tight text-white mb-4">
             {title}

              </h2>

              <div className="inline-block self-start">
                <div  
                  className="relative inline-flex items-center gap-1.5 pb-1 text-lg md:text-lg font-semibold text-[#7DD3FC] hover:transition-colors duration-400 group">
                  <span> {LinkText}</span>

                  <span className="inline-flex items-center translate-x-0   transition-transform duration-300 ease-out">
                    <svg
                      className="w-3.5 h-3.5 opacity-100 group-hover:opacity-0 group-hover:scale-50 transition-all duration-400 absolute"
                      fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <svg
                      className="w-4.5 h-4.5 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400"
                      fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>

                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#58a6ff] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </div>
              </div>
              </div>
              </Link>
             


            </div>
  )
}

export default Mostout
