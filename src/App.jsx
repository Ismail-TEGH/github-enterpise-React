import { useState } from 'react'
import {securityFeatures,governanceFeatures } from './components/config';

import Header from './components/Header'
import MainBg from './components/MainBg'
import DescAfterMArquee from './components/DescAfterMArquee'
import Marquee from './components/Marquee'
 import FeatureSection  from './components/FeatureSection'
 import Description from './components/Description'
import './App.css'
import Footer from './components/Footer'
import ImageComponents from './components/ImageComponents'
import MediaSection from './components/MediaSection';
import YoutubePlayer from './components/YoutubePlayer';
import CopilotCard from './components/CopilotCard';
import OctoverseCard from './components/OctoverseCard';
import IntegrationsGrid from './components/IntegrationGrid';
import  GithubDashboard from './components/GithubDashboard';
import  AdaptedOrganizatonsSection from './components/AdaptedOrganizationSection';
import  MostOutSection from './components/MostOutSection';
import   GitHubFAQ from './components/GitHubFAQ';
import GithubErrorImg from './components/GithubErrorImg'
import  Unsplash from './assets/unsplash.png';
import  GithubDashboardImg from './assets/githubDashboardImage.png';
import  Octoverse from './assets/octoverse.png';
import  BrandNames from './assets/brandImage2.png';
 
 



 

  
 
 function App() {
   return (
     <div className='bg-black'>
      <Header/>
      <MainBg
       title="The AI-powered developer platform for the agent-ready enterprise"
  description= "Bring your DevOps together on one secure platform built for speed, scale, and the agent-driven future of software."
  primaryBtnHref = "https://github.com/account/enterprises/new?experience=control&locale=en-US"
  secondaryBtnHref = "https://github.com/enterprise/contact?ref_cta=Contact+Sales&ref_loc=hero&ref_page=%2Fenterprise&scid=&utm_campaign=Enterprise&utm_content=Enterprise&utm_medium=referral&utm_source=github&experience=control"
   />
      <Marquee/>
      <DescAfterMArquee
             title="Enterprise-grade by design" 
        description="A centrally governed foundation that provides the control and visibility you need to innovate securely at scale."  
      />
      <GithubErrorImg/>
         <FeatureSection 
        headingText="Security built into every stage of the software lifecycle."
        subHeadingText="GitHub integrates automated, developer-first security that keeps teams moving fast."
        featuresList={securityFeatures}
      />
       <DescAfterMArquee
             title={<>Built for your most valuable asset:<br/> your developers</>}
        description="GitHub transforms your engineering team into a high-performing, AI-powered force for innovation and growth."  
      />
      
         <MediaSection
        title="The complete development workflow, end to end"
        description="Bring every stage of the software management lifecycle together onto a unified, secure platform layer."
        linkText="Explore all features"
        linkUrl="https://github.com/marketplace?locale=en-US"
      >
        <YoutubePlayer 
          videoId="Hpx4Zlu8ujk"
          videoTitle="How to use GitHub for end-to-end development"
          thumbnailUrl={Unsplash}
        />
      </MediaSection> 
         <MediaSection
        title="Scale your talent with GitHub Copilot"
        description="Go beyond code completion with AI that improves quality and problem-solving and fuels innovation."
        linkText="Explore Copilot for Business"
        linkUrl="https://github.com/features"
      >
        <CopilotCard/>
        </MediaSection>

         <MediaSection
        title="  Hit the ground coding"
        description="Skip the ramp-up and accelerate impact with the platform trusted by over 180 million developers."
        linkText="Read the Octoverse 2025 report"
        linkUrl="https://github.com/features/copilot/copilot-business"
      >
        <OctoverseCard  image={Octoverse}/>

      </MediaSection>

         <MediaSection
        title="Flexibility to build your way"
        description="Tap into our ecosystem of apps, actions, and models to accelerate innovation."
        linkText="Explore the GitHub Marketplace"
        linkUrl="https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/"
      >
        <IntegrationsGrid image={BrandNames}/>
       </MediaSection>
     

       <GithubDashboard image={GithubDashboardImg}/>
        <FeatureSection 
        headingText="From reactive administration to strategic platform leadership."
        subHeadingText="Take control with centralized governance and automation that scales with your enterprise."
        featuresList={governanceFeatures}
        
      />
      <AdaptedOrganizatonsSection/>
      <MostOutSection/>
         <div className="max-w-7xl mx-auto  md:py-6 px-4">
        <MainBg 
          title="Start your journey with GitHub"
          description="Whether you’re a startup or Fortune 500, GitHub Enterprise gives you everything you need to innovate securely on the platform developers love."
          primaryBtnHref = "https://github.com/account/enterprises/new?experience=control&locale=en-US"
  secondaryBtnHref = "https://github.com/enterprise/contact?ref_cta=Contact+Sales&ref_loc=hero&ref_page=%2Fenterprise&scid=&utm_campaign=Enterprise&utm_content=Enterprise&utm_medium=referral&utm_source=github&experience=control"
          bgClass="bg-[#111615] " // Custom Dark Grayish color scheme override
          paddingClass="py-20"
        />
      </div>
      <GitHubFAQ />
    
  
      <Description/>
      <Footer/>

       
     </div>
   )
 }
 
 
 

export default App
