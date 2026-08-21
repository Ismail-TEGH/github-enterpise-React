import React, { useState } from 'react'

function ImageComponents({  title,  description,  linkText,   linkUrl = "#",  imageUrl,   videoTitle,   youtubeVideoId ,isVideo = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
       <div className="py-8 md:py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <div className="w-full md:w-5/8">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                {title}
              </h2>
              <p className="leading-relaxed text-md mb-6 text-zinc-400">
                {description}
              </p>

              <div className="inline-block self-start">
                <a href={linkUrl} className="relative inline-flex items-center gap-1.5 pb-1 text-sm md:text-base font-semibold text-[#7DD3FC] hover:transition-colors duration-400 group">
                  <span>{linkText}</span>
                  <span className="inline-flex items-center translate-x-0 transition-transform duration-300 ease-out">
                    <svg className="w-3.5 h-3.5 opacity-100 group-hover:opacity-0 group-hover:scale-50 transition-all duration-400 absolute" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth="round" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <svg className="w-4.5 h-4.5 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#58a6ff] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Media Window */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="p-px bg-white w-full max-w-xl rounded-2xl border-4 md:border-8 border-white/10 overflow-hidden">
              <div className="aspect-video relative overflow-hidden bg-zinc-900 rounded-lg">
                
                {/* CASE 1: Video is actively playing via Iframe */}
                {isVideo && isPlaying ? (
                  <iframe
                    className="w-full h-full absolute inset-0"
                    src={`https://youtube.com{youtubeVideoId}?autoplay=1&rel=0`}
                    title={videoTitle}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  /* CASE 2: Static Layout (Used for regular images OR video thumbnails before clicking play) */
                  <>
                    <img 
                      src={imageUrl} 
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      alt={title} 
                    />

                    {/* Only show the video play button and top/bottom bars if isVideo is TRUE */}
                    {isVideo && (
                      <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 via-transparent to-black/60">
                        
                        {/* Top Bar Header */}
                        <div className="relative flex items-center gap-2.5 z-10">
                          <div className="w-10 h-10 rounded-full border border-white/10 bg-black/50 flex items-center justify-center">
                            <svg height="32" width="32" viewBox="0 0 16 16" className="w-6 h-6 invert text-white fill-current">
                              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.88.01.47.01.84.01.93 0 .22-.16.47-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-white text-md font-bold leading-tight drop-shadow-md">{videoTitle}</span>
                            <span className="text-[12px] text-zinc-300">GitHub</span>
                          </div>
                        </div>

                        {/* Center Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button 
                            onClick={() => setIsPlaying(true)}
                            className="bg-[#ff0000] rounded-xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-[#cc0000] focus:outline-none"
                          >
                            <svg className="w-16 h-11 cursor-pointer" viewBox="0 0 68 48">
                              <path fill="#FF0000" d="M66.52,7.74c-0.78-2.93-3.09-5.24-6.02-6.02C55.21,1.01,34,1.01,34,1.01s-21.21,0-26.5,0.71 C4.57,2.5,2.26,4.81,1.48,7.74C0.77,13.03,0.77,24,0.77,24s0,10.97,0.71,16.26c0.78,2.93,3.09,5.24,6.02,6.02 C12.79,46.99,34,46.99,34,46.99s21.21,0,26.5-0.71c2.93-0.78,5.24-3.09,6.02-6.02C67.23,34.97,67.23,24,67.23,24 S67.23,13.03,66.52,7.74z"></path>
                              <polygon fill="#FFFFFF" points="27.42,34.13 45.1,24 27.42,13.87"></polygon>
                            </svg>
                          </button>
                        </div>

                        {/* Bottom Utility Bar */}
                        <div className="flex justify-between items-center w-full">
                          <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                            <svg className="w-5 h-5 invert" viewBox="0 0 640 640">  
                              <path d="M288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448L480 448C515.3 448 544 419.3 544 384L544 183.4C544 166 536.9 149.3 524.3 137.2L466.6 81.8C454.7 70.4 438.8 64 422.3 64L288 64zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L352 496L352 512L160 512L160 256L176 256L176 192L160 192z" />
                            </svg>
                          </div>
                          <div className="flex items-center gap-1 px-4 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[14px]">
                            <span>Watch on</span>
                            <span className="font-extrabold text-red-500">YouTube</span>
                          </div>
                        </div>

                      </div>
                    )}
                  </>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default ImageComponents
