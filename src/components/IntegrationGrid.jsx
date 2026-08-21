import React from 'react'

function IntegrationGrid({image}) {
  return (
    <div>
        <div className="w-full aspect-video   rounded-lg flex items-center justify-center relative overflow-hidden">
              <img src={image} alt="" className="w-full h-full object-cover"
                style={{
            maskImage: 'linear-gradient(to right, transparent, black 25%, black 75%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 25%, black 75%, transparent)'
          }}  />
            </div>
    </div>
  )
}

export default IntegrationGrid
