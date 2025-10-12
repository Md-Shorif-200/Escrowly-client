
import Banner from './Home/Banner'
import OurServices from './Home/OurServices'
import Statistics from './Home/Statistics'
import HowItWorks from './Home/HowItWorks'
import WhyChooseUs from './Home/WhyChooseUs'
import TopSeller from './Home/TopSeller'

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
