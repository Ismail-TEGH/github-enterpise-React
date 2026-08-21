import React from 'react'

function Marquee() {

  const companies = (
    <>
      {/* Ford */}
      <div className="shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
        <svg
          className="h-8 fill-current text-white"
          viewBox="0 0 100 40"
          width="80"
        >
          <ellipse
            cx="50"
            cy="20"
            rx="45"
            ry="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

          <text
            x="50"
            y="26"
            fontFamily="Georgia, serif"
            fontWeight="bold"
            fontStyle="italic"
            fontSize="18"
            textAnchor="middle"
            fill="currentColor"
          >
            Ford
          </text>
        </svg>
      </div>

      {/* 3M */}
      <div className="shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
        <span className="text-white text-3xl font-black tracking-tighter">
          3M
        </span>
      </div>

      {/* P&G */}
      <div className="shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
        <span className="text-white text-3xl font-extrabold italic tracking-tight">
          P&G
        </span>
      </div>

      {/* American Airlines */}
      <div className="shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer flex items-center gap-2">
        <span className="text-white text-lg font-bold tracking-wider">
          American Airlines
        </span>

        <span className="text-xl text-blue-400">
          ✈
        </span>
      </div>

      {/* KPMG */}
      <div className="shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
        <span className="text-white text-2xl font-black tracking-widest border-t-2 border-b-2 border-white/40 py-0.5">
          KPMG
        </span>
      </div>

      {/* Stripe */}
      <div className="shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
        <span className="text-white text-3xl font-bold tracking-tight lowercase">
          stripe
        </span>
      </div>

      {/* Spotify */}
      <div className="shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer flex items-center gap-2">

        <svg
          className="h-7 w-7 fill-current text-white"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.3c-.22.36-.68.49-1.05.26-2.9-1.77-6.56-2.17-10.87-1.19-.41.1-.83-.16-.93-.57-.1-.41.16-.83.57-.93 4.72-1.08 8.76-.63 12.02 1.37.37.22.49.69.26 1.06zm1.47-3.26c-.28.45-.87.59-1.32.32-3.32-2.04-8.38-2.63-12.31-1.44-.51.15-1.04-.14-1.2-.66-.15-.51.14-1.04.66-1.2 4.49-1.36 10.07-.7 13.85 1.62.45.27.59.86.32 1.32zm.12-3.4c-3.98-2.36-10.55-2.58-14.36-1.42-.61.19-1.26-.15-1.45-.76-.19-.61.15-1.26.76-1.45 4.38-1.33 11.62-1.08 16.2 1.64.55.33.73 1.04.4 1.6-.33.55-1.04.73-1.6.4z" />
        </svg>

        <span className="text-white text-lg font-bold tracking-tight">
          Spotify
        </span>

      </div>
    </>
  )

  return (
    <div className="w-full bg-black py-12">

      {/* Viewport */}
      <div
        className="
          relative
          w-full
          max-w-7xl
          mx-auto
          overflow-hidden
          group
        "
      >

        {/* Left fade */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-32
            bg-linear-to-r
            from-black
            via-black/80
            to-transparent
            z-10
            pointer-events-none
          "
        />

        {/* Right fade */}
        <div
          className="
            absolute
            inset-y-0
            right-0
            w-32
            bg-linear-to-l
            from-black
            via-black/80
            to-transparent
            z-10
            pointer-events-none
          "
        />

        {/* Moving track */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] scale-125">

          {/* FIRST COPY */}
          <div className="flex items-center gap-24 px-12 shrink-0 ">
            {companies}
          </div>

          {/* SECOND IDENTICAL COPY */}
          <div
            className="flex items-center gap-24 px-12 shrink-0"
            aria-hidden="true"
          >
            {companies}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Marquee