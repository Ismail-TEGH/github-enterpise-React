import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className="bg-[#111615] border-t-4 border-[#5BE38A] text-white px-4 p-4 md:py-16 ">



    <div className="max-w-7xl mx-auto px-4 py-16">

       <div className="mb-14">
         <svg height="32" viewBox="0 0 16 16" width="32" className="fill-white mb-8">
          <path
            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
          </path>
        </svg>

        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-green-500 inline-block"></span>
          <span className="uppercase text-xs sm:text-sm font-mono tracking-wider text-white font-semibold">The Developer
            Newsletter</span>
        </div>

        <p className="text-[#8b949e] text-sm sm:text-base mb-5 max-w-md leading-relaxed">
          Get tips, technical guides, and best practices. Twice a month. Right in your inbox.
        </p>

        <Link to="https://github.com/newsletter"
          className="bg-[#238636] hover:bg-[#2ea043] transition-colors text-white text-sm font-semibold px-4 py-2 rounded-md">
          Subscribe
        </Link>
      </div>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-t border-zinc-800 pt-10">

         <div>
          <h4 className="text-[#8b949e] text-xs font-semibold uppercase tracking-wider mb-4">Platform</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="https://github.com/enterprise" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Enterprise</Link></li>
            <li><Link to="https://github.com/features/copilot" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Copilot</Link></li>
            <li><Link to="https://github.com/features" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Features</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">AI</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Security</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Pricing</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Team</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Resources</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Roadmap</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Compare GitHub</Link></li>
          </ul>
        </div>

         <div>
          <h4 className="text-[#8b949e] text-xs font-semibold uppercase tracking-wider mb-4">Ecosystem</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Developer API</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Partners</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Education</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">GitHub CLI</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">GitHub Desktop</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">GitHub Mobile</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">GitHub Marketplace</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">MCP Registry</Link></li>
          </ul>
        </div>

         <div>
          <h4 className="text-[#8b949e] text-xs font-semibold uppercase tracking-wider mb-4">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Docs</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Community Forum</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Professional Services</Link>
            </li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Premium Support</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Skills</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Status</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Contact GitHub</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">What is Git?</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Sitemap</Link></li>
          </ul>
        </div>

         <div>
          <h4 className="text-[#8b949e] text-xs font-semibold uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">About</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Why GitHub</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Customer Stories</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Blog</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">The ReadME Project</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Careers</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Newsroom</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Inclusion</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Social Impact</Link></li>
            <li><Link to="#" className="hover:text-[#7DD3FC] hover:underline underline-offset-2">Shop</Link></li>
          </ul>
        </div>

      </div>

       <div
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-zinc-800 pt-8 mt-12">

         <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#8b949e] uppercase">
          <span>© 2026 GitHub, Inc.</span>
          <Link to="#" className="hover:text-white hover:underline underline-offset-2">Terms</Link>
          <Link to="#" className="hover:text-white hover:underline underline-offset-2">Privacy</Link>
          <Link to="#" className="hover:text-white hover:underline underline-offset-2">Manage cookies</Link>
          <Link to="#" className="hover:text-white hover:underline underline-offset-2">Do not share my personal
            information</Link>
        </div>

      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
   <div className="flex flex-row flex-wrap gap-5">
     <Link to="#" aria-label="LinkedIn" className="text-[#8b949e] hover:text-white transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </Link>
     <Link to="#" aria-label="Instagram" className="text-[#8b949e] hover:text-white transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </Link>
     <Link to="#" aria-label="YouTube" className="text-[#8b949e] hover:text-white transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </Link>
     <Link to="#" aria-label="X" className="text-[#8b949e] hover:text-white transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    </Link>
     <Link to="#" aria-label="TikTok" className="text-[#8b949e] hover:text-white transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    </Link>
     <Link to="#" aria-label="Twitch" className="text-[#8b949e] hover:text-white transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0 1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L21.714 12.86V0zm13.714 12-3.428 3.429h-3.429l-3 3v-3H6.857V1.714h12.857Z" />
      </svg>
    </Link>
     <Link to="#" aria-label="GitHub" className="text-[#8b949e] hover:text-white transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
      </svg>
    </Link>
  </div>
  
   <div>
    <button className="flex items-center gap-1.5 border border-zinc-700 rounded-md px-3 py-1.5 text-sm text-white hover:border-zinc-500 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /> <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      English
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  </div>
</div>

      </div>

    </div>
  </div>
    </div>
  )
}

export default Footer
