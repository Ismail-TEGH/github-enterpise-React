import React, { useState, useRef, useEffect } from 'react'
import { megaMenus } from './config';


function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 useEffect(() => {
  function handleClickOutside(e) {
     if (isMenuOpen) return;

    if (navRef.current && !navRef.current.contains(e.target)) {
      setOpenMenu(null);
    }
  }
  
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [isMenuOpen]);  

  const navNames = ["Platform", "Solutions", "Resources", "Open Source", "Enterprise"];

  return (
    <>
      <header className="w-full bg-black     relative">


        <div className="md:hidden"  >

          <nav className="h-16 flex items-center justify-between px-4">

            <button id="openMenuBtn" className="text-white p-1 -ml-1" aria-label="Open menu" onClick={() => setIsMenuOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            <a href="#" className="hover:text-gray-400 transition-colors">
              <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"
                className="fill-current text-white">
                <path
                  d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.88.01.47.01.84.01.93 0 .22-.16.47-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
                </path>
              </svg>
            </a>

            <a href="#"
              className="text-white border border-white px-3 py-2 rounded-lg hover:text-gray-300 font-semibold text-sm">Sign
              in</a>

          </nav>


          <div id="mobileMenu" className={`${isMenuOpen ? "flex" : "hidden"}   fixed inset-0   z-50   flex-col`}>

            <div className="h-16 flex items-center  bg-black   justify-between px-4       ">
              <button id="closeMenuBtn" className="p-1 -ml-1 text-gray-700" aria-label="Close menu " onClick={() => setIsMenuOpen(false)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="fill-current text-gray-400">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"
                className="fill-current text-white">
                <path
                  d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.88.01.47.01.84.01.93 0 .22-.16.47-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
                </path>
              </svg>
              <a href="#"
                className="text-white border border-white px-3 py-2 rounded-lg hover:text-gray-300 font-semibold text-sm">Sign
                in</a>

            </div>

            <div id="mainMenu"
              className={`flex-1 overflow-y-auto font-semibold bg-black border-t border-gray-600 rounded-t-xl transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
              <ul className="    text-xl p-4 space-y-3">
 {navNames.map((name) => {
  const isOpen = openMenu === name;

  return (
    <li key={name} className="block w-full">
     
      <button 
        type="button"
        onClick={() => {
           setOpenMenu(isOpen ? null : name);
        }} 
        className="w-full flex items-center justify-between px-4 py-4 font-semibold text-white   transition-colors duration-200"
      >
        {name}
        <svg 
          xmlns="http://w3.org" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* DROPDOWN CONTENT WRAPPER - NO stopPropagation here to avoid blocking */}
      <div 
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="overflow-hidden min-h-0">
          {megaMenus[name] && megaMenus[name].map((col) => (
            <div key={col.heading} className="mb-6 px-2">
              <p className="text-base font-mono tracking-wider text-gray-500 mb-3">
                {col.heading}
              </p>
              <ul className="space-y-4">
                {col.items.map((item) => (
                  <li key={item.title}>
                    <a href="#" className="block group relative pb-1 max-w-max">
                      <span className="text-white font-semibold text-lg">
                        {item.title}
                      </span>
                      {item.desc && (
                        <span className="block text-gray-500 text-base mt-0.5">
                          {item.desc}
                        </span>
                      )}
                      <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-20" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
})}


    <li>
    <a 
      href="#" 
      className="w-full flex items-center justify-between px-4 py-4 font-semibold text-white   hover:text-gray-300 transition-colors"
    >
      Pricing
    </a>
  </li>
</ul>

              <div className="px-6 py-4 ">
                <div className="relative">
                  <input type="text" placeholder="Search or jump to..."
                    className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:outline-none rounded-md py-2 pl-8 pr-10 text-[14px] text-gray-700 placeholder:text-gray-400" />
                  <span className="absolute left-2.5 top-2.5 text-gray-400">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                      <path
                        d="M10.68 11.74a6 6 0 1 1 1.06-1.06l3.24 3.24a.75.75 0 1 1-1.06 1.06l-3.24-3.24ZM11.5 7a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z">
                      </path>
                    </svg>
                  </span>
                  <span
                    className="absolute right-2.5 top-1.5 border border-gray-200 bg-white px-1.5 py-0.2 rounded text-[11px] text-gray-400">/</span>
                </div>
              </div>

              <div className="px-6 pb-6">
                <a href="#"
                  className="block w-full text-center bg-purple-950 hover:bg-black text-white font-semibold text-sm py-2.5 rounded-md transition-colors">
                  Sign up
                </a>
              </div>
            </div>

          </div>


        </div>

        <div className="hidden md:block " onMouseLeave={() => setOpenMenu(null)} ref={navRef}>

          <nav className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between text-[18px]">

            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"
                  className="fill-current text-white">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.88.01.47.01.84.01.93 0 .22-.16.47-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
                  </path>
                </svg>
              </a>

              <div className="flex items-center space-x-4 font-semibold text-gray-300">
                {navNames.map((name) => (
                  <div key={name} className="relative" onMouseLeave={() => setOpenMenu(null)}>
                    <button
                      onClick={() => setOpenMenu(openMenu === name ? null : name)}
                      onMouseEnter={() => setOpenMenu(name)}
                      className="flex items-center cursor-pointer hover:text-white transition-colors"
                    >
                      {name}
                      <span
                        className={`ml-1 text-xs opacity-60 transition-transform duration-200 ${openMenu === name ? "rotate-180" : "rotate-0"
                          }`}
                      >
                        ▼
                      </span>
                    </button>

                    {openMenu === name && megaMenus[name] && megaMenus[name].length > 0 && (
                      <div className="absolute pt-2 left-0 w-max min-w-100  z-50">
                        <div className="border border-gray-700 bg-black rounded-lg shadow-2xl shadow-black/50">
                          <div className={`p-8 grid gap-8 ${
     megaMenus[name].length === 4 ? 'grid-cols-4' : 
     megaMenus[name].length === 3 ? 'grid-cols-3' : 'grid-cols-2'
  }`}>
                            {megaMenus[name].map((col) => (
                              <div key={col.heading} className='w-44'>
                                <p className="text-sm font-mono tracking-wider text-gray-500 mb-4">{col.heading}</p>
                                <ul className="space-y-3">
                                  {col.items.map((item) => (
                                    <li key={item.title}>
                                      <a href="#" className="group block">
                                        <span className="relative inline-block text-white font-semibold text-sm pb-1 z-10">
                                          {item.title}
                                          {item.desc && (
                                            <span className="block text-gray-400 text-sm mt-1">{item.desc}</span>
                                          )}
                                          <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-20" />
                                        </span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
 {!["Open Source", "Enterprise"].includes(name) &&
                          <div className="block w-full px-8 py-4 rounded-b-3xl border-t border-gray-800 bg-[#111615] text-white font-semibold text-sm hover:bg-[#161b22] transition-colors">
                            <a href="#" className="relative inline-flex items-center gap-1.5 pb-1 text-sm md:text-base font-semibold group">
                              <span>View All Features</span>
                              <span className="inline-flex items-center translate-x-0 transition-transform duration-300 ease-out">
                                <svg className="w-3.5 h-3.5 opacity-100 group-hover:opacity-0 group-hover:scale-50 transition-all duration-400 absolute" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <svg className="w-4.5 h-4.5 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                              </span>
                              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </a>
                          </div>}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <a href="#" className="hover:text-white transition-colors">Pricing</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input type="text" placeholder="Search or jump to..."
                  className="bg-transparent border border-gray-700 hover:border-gray-500 focus:border-blue-500 focus:outline-none rounded-md py-1.5 pl-8 pr-10 text-[13px] text-gray-300 w-60 transition-all placeholder:text-gray-400" />
                <span className="absolute left-2.5 top-2.5 text-gray-400">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                    <path
                      d="M10.68 11.74a6 6 0 1 1 1.06-1.06l3.24 3.24a.75.75 0 1 1-1.06 1.06l-3.24-3.24ZM11.5 7a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z">
                    </path>
                  </svg>
                </span>
                <span
                  className="absolute right-2.5 top-1.5 border border-gray-700 bg-gray-900 px-1.5 py-0.2 rounded text-[11px] text-gray-400">/</span>
              </div>

              <a href="#" className="text-white hover:text-gray-300 font-semibold text-sm">Sign in</a>

              <a href="#"
                className="border border-white text-white hover:bg-white hover:text-black font-semibold text-sm py-1.5 px-3 rounded-md transition-colors duration-150">
                Sign up
              </a>
            </div>
          </nav>

          <nav className="bg-[#010409]/60 backdrop-blur-md border-t border-gray-800">
            <div className="max-w-8xl mx-auto px-6 h-12 flex items-center space-x-6 text-[16px]">
              <a href="#" className="font-semibold text-white border-b-2 border-[#1f6feb] h-full flex items-center px-1">
                Enterprise
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors h-full flex items-center">
                Advanced Security
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors h-full flex items-center">
                Premium Support
              </a>
            </div>
          </nav>

        </div>


      </header>
    </>
  )
}

export default Header
