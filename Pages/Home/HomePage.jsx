import Container from '@/components/Shared/Container'
import React from 'react'
import Banner from './Banner'
import OurServices from './OurServices'
import Statistics from './Statistics'
import HowItWorks from './HowItWorks'
import WhyChooseUs from './WhyChooseUs'
import TopSeller from './TopSeller'

export default function HomePage() {
  return (
        <main>
             <Banner></Banner>
     
                  <HowItWorks></HowItWorks>
                  <OurServices></OurServices>
                   <WhyChooseUs></WhyChooseUs>
                    <TopSeller></TopSeller>
                  <Statistics></Statistics>

        </main>
  )
}
