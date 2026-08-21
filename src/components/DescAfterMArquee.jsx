import React from 'react'

function DescAfterMArquee({ title, description }) {
  return (
  <div className="   p-16 text-center px-6">
      <div className="text-3xl md:text-4xl font-medium text-white   leading-tight">
        {title}
      </div>
      <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
         {description}
       </p>
    </div>
  )
}

export default DescAfterMArquee
