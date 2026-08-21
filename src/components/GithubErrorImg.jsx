import React from 'react'

function GithubErrorImg() {
  return (
    <div className='p-4 md:mt-16  '>
    <div className="md:max-w-7xl m-auto ">
      {/* Responsive 16:9 container */}
      <div className="relative  w-full aspect-video overflow-hidden rounded-lg bg-linear-to-br from-black via-[#0d1347] to-[#040d21]">

       
        <div className="absolute inset-0 flex items-center justify-center p-[8%]">

          <div className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-[#0d1117]/60 backdrop-blur-md p-[2.5%] shadow-2xl shadow-indigo-500/10">

             
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-purple-600/20 to-blue-600/20 opacity-30 blur-xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-[1.5vw]">

              
              <div className="flex items-center gap-[0.7vw] text-[clamp(6px,1.1vw,14px)] text-[#8b949e]">
                <span className="font-semibold text-white tracking-tight">
                  github-advanced-security
                </span>

                <span className="px-[0.5vw] py-[0.15vw] text-[clamp(5px,0.7vw,11px)] font-medium border border-[#30363d] rounded-full bg-[#161b22]">
                  bot
                </span>

                <span>
                  found potential issues
                </span>
              </div>
 
              <div className="overflow-hidden rounded-lg border border-[#30363d] bg-[#010409]">

               
                <div className="py-[1.2%] font-mono text-[clamp(5px,0.85vw,14px)] leading-relaxed overflow-hidden">

                  
                  <div className="flex items-start px-[2%] bg-[#1f2937]/10">
                    <span className="w-[7%] shrink-0 select-none text-[#484f58] text-right pr-[2%]">
                      1
                    </span>

                    <span className="text-[#3fb950] font-bold mr-[1%] select-none">
                      +
                    </span>

                    <span className="text-white whitespace-nowrap">
                      <span className="text-[#ff7b72]">
                        const
                      </span>{' '}

                      <span className="text-[#79c0ff]">
                        express
                      </span>{' '}

                      ={' '}

                      <span className="text-[#58a6ff]">
                        require
                      </span>
                      (
                      <span className="text-[#a5d6ff]">
                        'express'
                      </span>
                      );
                    </span>
                  </div>

             
                  <div className="flex items-start px-[2%] bg-[#1f2937]/10">
                    <span className="w-[7%] shrink-0 select-none text-[#484f58] text-right pr-[2%]">
                      2
                    </span>

                    <span className="text-[#3fb950] font-bold mr-[1%] select-none">
                      +
                    </span>
                  </div>

                   
                  <div className="flex items-start px-[2%] bg-[#1f2937]/10">
                    <span className="w-[7%] shrink-0 select-none text-[#484f58] text-right pr-[2%]">
                      3
                    </span>

                    <span className="text-[#3fb950] font-bold mr-[1%] select-none">
                      +
                    </span>

                    <span className="text-white whitespace-nowrap">
                      <span className="text-[#ff7b72]">
                        const
                      </span>{' '}

                      <span className="text-[#79c0ff]">
                        app
                      </span>{' '}

                      ={' '}

                      <span className="text-[#58a6ff]">
                        express
                      </span>
                      ();
                    </span>
                  </div>

                   
                  <div className="flex items-start px-[2%] bg-[#1f2937]/10">
                    <span className="w-[7%] shrink-0 select-none text-[#484f58] text-right pr-[2%]">
                      4
                    </span>

                    <span className="text-[#3fb950] font-bold mr-[1%] select-none">
                      +
                    </span>

                    <span className="text-white whitespace-nowrap">
                      <span className="text-[#79c0ff]">
                        app
                      </span>
                      .
                      <span className="text-[#d2a8ff]">
                        get
                      </span>
                      (
                      <span className="text-[#a5d6ff]">
                        '/'
                      </span>
                      , (
                      <span className="text-[#ff7b72]">
                        req
                      </span>
                      ,{' '}

                      <span className="text-[#ff7b72]">
                        res
                      </span>
                      ){` => `}

                      <span className="text-[#79c0ff]">
                        res
                      </span>
                      .
                      <span className="text-[#d2a8ff]">
                        send
                      </span>
                      (
                      <span className="text-[#a5d6ff]">
                        {'Hello, ${req.query.name}!'}
                      </span>
                      ));
                    </span>
                  </div>
                </div>

                
                <div className="border-t border-[#30363d] bg-[#161b22] p-[2.5%] flex gap-[2%] items-start border-l-[3px] border-l-[#f85149]">

                  
                  <div className="shrink-0 flex items-center justify-center w-[4%] aspect-square rounded-full bg-[#f85149]/10 text-[#f85149]">

                    <svg
                      className="w-[55%] h-[55%] fill-current"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06z" />
                    </svg>

                  </div>

                  
                  <div className="min-w-0 flex flex-col gap-[0.4vw] text-[clamp(5px,0.9vw,14px)]">

                    <div className="text-[#8b949e]">
                      Check failure
                    </div>

                    <div className="flex items-center gap-[0.4vw] text-white font-medium">

                      <svg
                        className="w-[1em] h-[1em] shrink-0 fill-current text-[#8b949e]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.88.01.64.01 1.11.01 1.26 0 .21-.15.47-.55.38A8.006 8.006 0 0 1 0 8c0-4.42 3.58-8 8-8z" />
                      </svg>

                      <span>
                        Code scanning / CodeQL
                      </span>

                    </div>

                     <div className="flex items-center gap-[0.5vw] mt-[0.2vw]">

                      <span className="text-[clamp(7px,1.2vw,18px)] font-bold text-[#f85149]">
                        Reflected cross-site scripting
                      </span>

                      <span className="px-[0.5vw] py-[0.1vw] text-[clamp(5px,0.7vw,11px)] text-[#f85149] border border-[#f85149]/30 rounded-full bg-[#f85149]/10">
                        High
                      </span>

                    </div>

                     <p className="text-[#8b949e] text-[clamp(5px,0.8vw,13px)]">
                      Cross-site scripting vulnerability due to{' '}
                      <span className="text-[#58a6ff]">
                        user-provided value
                      </span>.
                    </p>

                     <a
                      href="#"
                      className="text-[#58a6ff] text-[clamp(5px,0.75vw,12px)] hover:underline font-medium"
                    >
                      Show more details
                    </a>

                  </div>
                </div>

                 <div className="border-t border-[#30363d] bg-[#0d1117] p-[2.5%] flex gap-[2%] items-start">

                   <div className="shrink-0 flex items-center justify-center w-[5%] aspect-square rounded-full border border-[#30363d] bg-[#161b22] text-white">

                    <svg
                      className="w-[50%] h-[50%] fill-current text-white/90"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1.25a.75.75 0 0 1 .64.354l1.246 1.958 2.193.266a.75.75 0 0 1 .432 1.304l-1.646 1.493.468 2.158a.75.75 0 0 1-1.11.802L8.5 8.441l-1.723.996a.75.75 0 0 1-1.11-.802l.468-2.158-1.646-1.493a.75.75 0 0 1 .432-1.304l2.193-.266L7.36 1.604A.75.75 0 0 1 8 1.25z" />
                    </svg>

                  </div>

                   <div className="min-w-0 flex-1 flex flex-col gap-[0.5vw]">

                    <div className="flex items-center gap-[0.5vw]">

                      <span className="text-[clamp(6px,0.9vw,14px)] font-semibold text-white">
                        Copilot Autofix
                      </span>

                      <span className="px-[0.4vw] py-[0.1vw] text-[clamp(4px,0.6vw,10px)] font-bold border border-white/20 rounded-md bg-white/10 text-white">
                        AI
                      </span>

                    </div>

                    <span className="text-[clamp(5px,0.7vw,11px)] text-[#8b949e]">
                      Generating a fix suggestion...
                    </span>

                     <div className="w-full h-[0.4vw] min-h-[2px] bg-[#21262d] rounded-full overflow-hidden mt-[0.2vw]">

                      <div
                        className="h-full bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"
                        style={{ width: '70%' }}
                      />

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default GithubErrorImg