import Banner from "./components/banner"
import MissionSection from "./components/our-mission"
import ServicesSection from "./components/services"
import Footer from "./components/footer"
export default function Home(){
  return(
    <div>
      <Banner/>
      <ServicesSection/>
      <MissionSection/>
    </div>
  )
}