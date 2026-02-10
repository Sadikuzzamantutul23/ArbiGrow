import React from 'react'
import Navbar from '../component/Navbar'
import { Hero } from '../component/Hero'
import ExecutiveSummary from '../component/ExecutiveSummary'
import SecurityAudit from '../component/TechnicalArchitecture'

const Home = () => {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <ExecutiveSummary />
      <SecurityAudit />
    </div>
  )
}

export default Home
