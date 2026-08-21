import React from 'react'

function OctoverseCard({image}) {
  return (
    <div>
           

            <div
              className="w-full bg-zinc-900 border border-zinc-800 border-b-transparent rounded-lg flex items-center justify-center relative z-10">
              <div className="bg-[#0d1117] rounded-[10px] overflow-hidden   flex flex-col items-center">
              <img src={image} alt="Octoverse 2025 Graphic" className="w-full h-auto block z-90" />
               
              </div>   
               <div
              className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-indigo-600 blur-2xl  rounded-full pointer-events-none">
            </div>
             
            </div>
      
    </div>
  )
}

export default OctoverseCard
