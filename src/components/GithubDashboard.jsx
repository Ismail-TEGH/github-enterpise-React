import React from 'react'

function GithubDashboard({image}) {
  return (
     <div className="pt-8 md:pt-20 md:mt-8 px-4 ">
      <div className="max-w-7xl mx-auto  border border-zinc-500  rounded-2xl md:rounded-4xl  ">

        <div
          className="w-full aspect-video rounded-2xl md:rounded-4xl flex justify-center border-4 md:border-8  border-zinc-700 overflow-hidden">
          <img src={image} alt=""  />
        </div>
      </div>
    </div>
  )
}

export default GithubDashboard
