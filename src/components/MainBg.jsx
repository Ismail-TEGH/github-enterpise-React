import React from 'react'
import { Link } from 'react-router-dom'

function MainBg( {title, 
  description, 
  primaryBtnHref = "#",
  secondaryBtnHref = "#",
 bgClass = "bg-gradient-to-b from-[#040d21] to-[#0d1347]" ,
 paddingClass = "pt-24 pb-32",}) {
  return (
   <div>
      <div className={`relative ${bgClass} ${paddingClass} overflow-hidden`}>
       
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] max-w-3xl">
             {title}
          </h1>

          <p className="mt-6 text-base md:text-[19px] text-gray-400 leading-relaxed max-w-2xl font-light">
            {description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
            to={primaryBtnHref}
            className="w-full sm:w-auto bg-[#1f883d] hover:bg-[#1a7334] text-white font-semibold px-6 py-2.5 rounded-lg text-base shadow-lg shadow-green-900/20 transition-all text-center"
            >Start a 30-day free trial</Link>
             <Link
            to={secondaryBtnHref}
              className="w-full sm:w-auto bg-[#1c2135]/80 hover:bg-[#242b45] text-white font-semibold px-6 py-2.5 rounded-lg text-base border border-gray-800 transition-all text-center">
            Contact sales</Link>
            {/* <a href={primaryBtnHref}
              className="w-full sm:w-auto bg-[#1f883d] hover:bg-[#1a7334] text-white font-semibold px-6 py-3.5 rounded-lg text-base shadow-lg shadow-green-900/20 transition-all text-center">
              Start a 30-day free trial
            </a> */}
            {/* <a href={secondaryBtnHref}
              className="w-full sm:w-auto bg-[#1c2135]/80 hover:bg-[#242b45] text-white font-semibold px-6 py-3.5 rounded-lg text-base border border-gray-800 transition-all text-center">
              Contact sales
            </a> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default MainBg
