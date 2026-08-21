import React from 'react'
import { Link } from 'react-router-dom'
 

function AdapptedOrganizations({image,title,hRef}) {
  return (
    <div>
      <Link to={hRef} >
        <div className="bg-[#111615] p-8 rounded-xl h-full flex flex-col justify-between">
            <div className="">
              <img src={image} alt=""/>


              <h2 className="text-xl pt-6 md:text-2xl font-semibold tracking-tight text-white mb-4">
              {title}</h2>

              <div className="inline-block self-start">
                <div
                  className="relative inline-flex items-center gap-1.5 pb-1 text-lg md:text-lg font-semibold text-[#7DD3FC] hover:transition-colors duration-400 group">
                  <span> Read customer story</span>

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

                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#58a6ff] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </div>
              </div>


            </div>
          </div>
      </Link>
    </div>
  )
}

export default AdapptedOrganizations
