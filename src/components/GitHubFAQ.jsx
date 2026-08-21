import React, { useState } from 'react'
import { faqSections } from './config';


function GitHubFAQ() {  
    const [activeSection, setActiveSection] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);


  const currentSection = faqSections[activeSection];
  const currentMSection = faqSections[mobileSection];

  const handleSectionClick = (index) => {
    setActiveSection(index);
    setOpenQuestion(null);
  };

  const handleQuestionClick = (index) => {
    setOpenQuestion((prev) =>
      prev === index ? null : index
    );
  };
 
  


  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Frequently asked questions
        </h2>


        {/* ================= DESKTOP ================= */}

        <div className="hidden md:grid md:grid-cols-[350px_1fr] gap-16">

          {/* LEFT - SECTIONS */}
          <div className="space-y-4">

            {faqSections.map((section, index) => (
              <button
                key={section.title}
                onClick={() => handleSectionClick(index)}
                className={`
                  w-full text-left
                  text-xs
                  tracking-wide
                  flex items-start gap-2
                  ${activeSection === index
                    ? "text-white"
                    : "text-gray-500"}
                `}
              >
                <span
                  className={`
                    mt-[2px] w-2 h-2 shrink-0
                    ${activeSection === index
                      ? "bg-green-400"
                      : "bg-gray-700"}
                  `}
                />

                <span>
                  {section.title}
                </span>
              </button>
            ))}

          </div>


          {/* RIGHT - QUESTIONS */}
          <div>
              {currentSection.title && (
    <span className="text-xs  text-gray-400 mb-6 tracking-wide">
      {currentSection.title}
    </span>
  )}

            {currentSection.questions.map((item, index) => {

              const isOpen = openQuestion === index;

              return (
                <div
                  key={item.question}
                  className={`border-b
                    ${isOpen ? "border-green-400":" border-gray-800"}`}
                >
                   <span>{item.title}</span>

                  {/* QUESTION */}
                  <button
                    onClick={() => handleQuestionClick(index)}
                    className="
                      w-full
                      py-4
                      flex
                      justify-between
                      items-center
                      text-left
                      text-sm
                    "
                  >  
                    <span>
                      {item.question}
                    </span>

                    <span
                      className={`
                        text-green-400
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    >
                      ▼
                    </span>
                  </button>


                  {/* ANSWER */}
                  <div
                    className={`
                      grid transition-all duration-300
                      ${isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0"}
                    `}
                  >
                    <div className="overflow-hidden">

                      <div className="
                        text-sm
                        leading-6
                        text-gray-400
                        space-y-5
                      ">
                        {item.answer}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* ================= MOBILE ================= */}

        <div className="md:hidden">

          {faqSections.map((section, sectionIndex) => {

            const sectionOpen =
               mobileSection === sectionIndex;

            return (
              <div key={section.title}>

                {/* SECTION */}
                <button
                  onClick={() => {
                     setMobileSection(
                      sectionOpen ? null : sectionIndex
                    );
                    setOpenQuestion(null);
                  }}
                  className={`
                    w-full
                    px-4
                    py-5
                    flex
                    items-center
                    justify-between
                    text-left
                    border-b
                    border-gray-900
                    ${sectionOpen
                      ? "bg-[#101713]"
                      : "bg-[#080b09]"}
                  `}
                >

                  <div className="flex gap-3 items-start">

                    <span
                      className={`
                        w-1
                        h-3
                        mt-1
                        ${sectionOpen
                          ? "bg-green-400"
                          : "bg-gray-800"}
                      `}
                    />

                    <span className="text-xs font-mono">
                      {section.title}
                    </span>

                  </div>

                  <span
                    className={`
                      text-xs
                      transition-transform
                      duration-300
                      ${sectionOpen
                        ? "rotate-180"
                        : ""}
                    `}
                  >
                    ▼
                  </span>

                </button>


                {/* QUESTIONS */}
                <div
                  className={`
                    grid transition-all duration-300
                    ${sectionOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"}
                  `}
                >

                  <div className="overflow-hidden">

                    <div className="px-4 py-6">

                      {section.questions.map(
                        (item, questionIndex) => {

                          const isOpen =
                            openQuestion === questionIndex;

                          return (
                            <div
                              key={item.question}
                              className="border-b border-gray-800"
                            >

                              {/* QUESTION */}
                              <button
                                onClick={() =>
                                  handleQuestionClick(
                                    questionIndex
                                  )
                                }
                                className="
                                  w-full
                                  py-5
                                  flex
                                  justify-between
                                  items-start
                                  text-left
                                "
                              >

                                <span className="
                                  text-base
                                  font-medium
                                  pr-4
                                ">
                                  {item.question}
                                </span>

                                <span
                                  className={`
                                    text-green-400
                                    transition-transform
                                    duration-300
                                    ${isOpen
                                      ? "rotate-180"
                                      : ""}
                                  `}
                                >
                                  ▼
                                </span>

                              </button>


                              {/* ANSWER */}
                              <div
                                className={`
                                  grid
                                  transition-all
                                  duration-300
                                  ${isOpen
                                    ? "grid-rows-[1fr] opacity-100 pb-6"
                                    : "grid-rows-[0fr] opacity-0"}
                                `}
                              >

                                <div className="overflow-hidden">

                                  <div className="
                                    text-gray-400
                                    text-base
                                    leading-6
                                    space-y-6
                                  ">
                                    {item.answer}
                                  </div>

                                </div>

                              </div>

                            </div>
                          );
                        }
                      )}

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
 
 
  
}

export default GitHubFAQ
