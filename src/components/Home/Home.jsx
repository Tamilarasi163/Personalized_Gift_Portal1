

import Testimonals from "../Home/HomeComponents/Testimonals/Testimonals"
import Footer from "../HeaderFooter/Footer/Footer"
import Navbar from "../HeaderFooter/Navbar/Navbar"
import Hero from "../Home/HomeComponents/Hero/Hero"

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Testimonals/>
    <Footer/>
    </div>
  )
}
export default Home