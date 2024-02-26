import Banner from "./components/banner"
import MissionSection from "./components/our-mission"
import ServicesSection from "./components/services"
export default function Home(){
  return(
    <div>
      <Banner/>
      <ServicesSection/>
      <MissionSection/>
    </div>
  )
}