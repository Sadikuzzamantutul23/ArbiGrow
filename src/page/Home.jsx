import React from 'react'
import Navbar from '../component/Navbar'
import { Hero } from '../component/Hero'
import ExecutiveSummary from '../component/ExecutiveSummary'
import TechnicalArchitecture  from '../component/TechnicalArchitecture'
import CoreFeatures from '../component/CoreFeatures'
import SecurityAudit from '../component/SecurityAudit'
import Roadmap from './RoadMap'
import Legal from '../component/Legal'
import Founders from '../component/Founder'
import Privacy from '../component/Privachy'
import FAQ from '../component/FAQ'
import Footer from '../component/Footer'

const Home = () => {
  return (
<div className="relative z-10">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <ExecutiveSummary />
        <div id="architecture">
          <TechnicalArchitecture />
        </div>
        <div id="features">
          <CoreFeatures />
        </div>
        <div id="security">
          <SecurityAudit />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
        <Legal />
        <div id="about">
          <Founders />
        </div>
        <Privacy />
        <FAQ />
        <Footer />
      </div>
  )
}

export default Home
