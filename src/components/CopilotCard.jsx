import React from 'react'

function CopilotCard() {
  return (
    <div className="w-full h-full flex items-center">
      
      <div className="relative w-full max-w-xl mx-auto font-sans">

        {/* Glow */}
        <div
          className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-600 opacity-30 blur-3xl rounded-full pointer-events-none"
        />

        {/* Right fade */}
        <div
          className="absolute inset-y-0 right-0 w-1/3 pointer-events-none z-20"
          style={{
            background: "linear-gradient(to right, transparent, black)"
          }}
        />

        {/* Main content */}
        <div className="relative flex gap-3">

          {/* GitHub icon */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black border border-neutral-700 flex items-center justify-center z-10">
            <svg viewBox="0 0 16 16" width="18" height="18" fill="#fff">
              <path
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              />
            </svg>
          </div>

          {/* Copilot card */}
          <div className="min-w-0 flex-1 border border-neutral-700 rounded-lg bg-[#161b22] z-10">

            {/* Header */}
            <div className="border-b border-neutral-700 px-4 py-2 flex items-center flex-wrap">
              <span className="text-neutral-100 font-semibold text-sm">
                Copilot
              </span>

              <span className="border border-neutral-700 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full ml-1.5">
                AI
              </span>

              <span className="text-neutral-400 text-sm ml-1">
                commented
              </span>
            </div>

            {/* Body */}
            <div className="p-4">

              {/* Item 1 */}
              <div className="flex items-start gap-2 mb-2.5">
                <span className="w-4 h-4 border border-neutral-500 rounded-sm inline-block mt-0.5 flex-shrink-0" />

                <span className="text-neutral-100 text-sm break-words">
                  User can pin only one PR Files Changed side panel
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-2 mb-2.5">
                <span className="w-4 h-4 border border-neutral-500 rounded-sm inline-block mt-0.5 flex-shrink-0" />

                <span className="text-neutral-100 text-sm break-words">
                  The pinned panel is remembered for the user so it's
                  applied across sessions
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-2 mb-4">
                <span className="w-4 h-4 border border-neutral-500 rounded-sm inline-block mt-0.5 flex-shrink-0" />

                <span className="text-neutral-100 text-sm break-words">
                  The pinned panel can be resized
                </span>
              </div>

              {/* Closes */}
              <div className="text-sm text-neutral-400 mb-3.5 flex items-center gap-1 flex-wrap">
                <span>Closes</span>

                <svg
                  viewBox="0 0 16 16"
                  width="14"
                  height="14"
                  fill="#3fb950"
                  className="flex-shrink-0"
                >
                  <path
                    d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5Z"
                  />
                </svg>

                <a
                  href="#"
                  className="text-blue-400 hover:underline break-words"
                >
                  Allow users to pin side panels
                </a>

                <span>#1524</span>
              </div>

              {/* Footer */}
              <div className="text-xs text-neutral-500">
                Copilot is powered by AI, so mistakes are possible. Review
                carefully.
              </div>

            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="relative flex items-center gap-2.5 mt-3 ml-11 z-10">

          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="#8b949e">
              <path
                d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
              />
            </svg>
          </div>

          <span className="text-sm text-neutral-100 break-words">
            <strong>Copilot</strong>{" "}
            <span className="text-neutral-400">
              started work on behalf of
            </span>{" "}
            <strong>monatheoctocat</strong>
          </span>

        </div>

      </div>
    </div>
  )
}

export default CopilotCard