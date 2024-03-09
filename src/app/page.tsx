import Banner from "./components/banner"
import MissionSection from "./components/our-mission"
import ServicesSection from "./components/services"
import Marketing from "./components/marketing"
export default function Home(){
  return(
    <div>
      <Banner/>
      <ServicesSection/>
      <Marketing/>
      <MissionSection/>
    </div>
  )
}