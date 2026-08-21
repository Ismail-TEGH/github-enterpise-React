 import React from 'react'
  import MostOut from './Mostout';

function MostOutSection() {
  return (
    <div>
         
         
           <section className="p-4 md:py-16 px-4">
      <div className="md:max-w-7xl m-auto  ">
        <div className=" text-3xl   md:text-4xl font-semibold tracking-tight text-white leading-tight">Get the most out of
          GitHub Enterprise</div>
        <div className=" py-16 grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-3">
           
           <MostOut 
            icon={ 
              <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"
                  stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  <path d="M12 7v14" />
                </svg>} 
            title="Get executive insights built for leaders and admins" 
            LinkText="Learn more"
            hRef="chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/html/site_status_block_page.html"
                  />

           <MostOut 
            icon={ 
               <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"
                  stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                  <path d="M16 5L9 9H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4l7 4V5z" />
                  <path d="M6 9v6" />
                  <path d="M19 8.5c1 1.3 1.5 2.5 1.5 3.5s-.5 2.2-1.5 3.5" />
                </svg>} 
            title="Stay ahead with our quarterly product roadmap webinar" 
            LinkText="See what's new"
            hRef="https://github.com/resources/events"
                  />

           <MostOut 
            icon={ 
              <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"
                  stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  <path d="M12 7v14" />
                </svg>} 
            title="                Accelerate adoption with proven guidance" 
            LinkText="Discover GitHub’s framework"
            hRef="https://github.com/resources"
                  />
           <MostOut 
            icon={ 
              <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"
                  stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  <path d="M12 7v14" />
                </svg>} 
            title="See the cost savings and ROI of GitHub Enterprise Cloud" 
            LinkText=" Get the Forrester® Total Economic Impact™ study"
            hRef="chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/html/site_status_block_page.html"
                  />
           <MostOut 
            icon={ 
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"
                  stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                  <path d="M16 5L9 9H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4l7 4V5z" />
                  <path d="M6 9v6" />
                  <path d="M19 8.5c1 1.3 1.5 2.5 1.5 3.5s-.5 2.2-1.5 3.5" />
                </svg>} 
            title="                Discover why GitHub leads the Forrester Wave™ for DevOps platforms" 
            LinkText="Read the report"
            hRef="chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/html/site_status_block_page.html"
                  />
           <MostOut 
            icon={ 
              <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"
                  stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  <path d="M12 7v14" />
                </svg>} 
            title="                Explore the full documentation for GitHub Enterprise Cloud" 
            LinkText=" View the docs"
            hRef="https://docs.github.com/en/get-started/onboarding/getting-started-with-github-enterprise-cloud"
                  />
           
          

          
        
        
         
        </div>
      </div>
     
    </section>
      
    </div>
  )
}

export default MostOutSection
