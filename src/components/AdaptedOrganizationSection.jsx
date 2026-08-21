import React from 'react'
import  Card1 from '../assets/cardImage1.png';
import  Card2 from '../assets/cardImage2.png';
import  Card3 from '../assets/cardImage3.png';
 import AdapptedOrganizations from './AdapptedOrganizations';


function AdaptedOrganizationSection() {
  return (
      <div>
           <section className="p-4 md:py-16 px-4">
          <div className="md:max-w-7xl m-auto  ">
            <div className=" text-3xl   md:text-4xl font-semibold tracking-tight text-white leading-tight">
              Adopted by the  world's leading organizations</div>
            <div className=" py-16 grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-3">
                
             <AdapptedOrganizations 
            //  href={}
             image={Card1} 
             title="Mercado Libre developers code 50% faster with GitHub Copilot"
             hRef="https://github.com/customer-stories/mercado-libre?locale=en-US"
             />
             < AdapptedOrganizations 
            //  href={}
             image={Card2} 
             title="Mercado Libre developers code 50% faster with GitHub Copilot"
             hRef="https://github.com/resources/insights/wayfair-enterprise-scale-migration"

             />
             <AdapptedOrganizations  
            //  href={}
             image={Card3} 
             title="Mercado Libre developers code 50% faster with GitHub Copilot"
              hRef="https://github.com/customer-stories/telus?locale=en-US"

             />
          
            </div>
          </div>
        </section>
        </div>
  )
}

export default AdaptedOrganizationSection
