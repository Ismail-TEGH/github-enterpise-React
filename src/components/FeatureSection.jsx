import React from 'react'

function  FeatureSection({ headingText, subHeadingText, featuresList }) {
  return (
    <div>
   <section className="md:py-6 px-4">
      <div className="bg-black text-white flex items-center justify-center">
        <div className="max-w-7xl w-full flex flex-col md:justify-between md:flex-row md:border-b border-zinc-700 gap-12 lg:gap-32 pb-20 md:pt-10 pt-8 items-start">
          
          {/* Left Column: Headings */}
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight text-white leading-[1.3] font-sans">
              {headingText}
              <span className="text-[#8b949e] font-semibold inline ml-1">
                {subHeadingText}
              </span>
            </h2>
          </div>

          {/* Right Column: Dynamic Vertical Timeline */}
          <div className="w-full flex-1 md:max-w-90">
            {featuresList.map((item, index) => {
              // Determine if this is the last element in the array
              const isLast = index === featuresList.length - 1;

              return (
                <div key={index} className="grid grid-cols-[20px_1fr] gap-x-4">
                  {/* Timeline Indicator Node */}
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full border-2 border-[#6b80849d] bg-black mt-0.5"></div>
                    {/* Only render vertical connector line if it is NOT the last item */}
                    {!isLast && <div className="w-0.5 flex-1 bg-[#6b80849d] mt-0.5"></div>}
                  </div>
                  
                  {/* Timeline Body Copy */}
                  <div className={`${!isLast ? 'pb-8' : ''} text-[14px] sm:text-[16px] text-[#8b949e] leading-relaxed font-sans`}>
                    <strong className="text-white font-semibold mr-1">
                      {item.boldTitle}
                    </strong>
                    {item.descriptionText}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
      
    </div>
  )
}

export default FeatureSection 
