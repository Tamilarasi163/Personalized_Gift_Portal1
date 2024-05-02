import Hero from "../HomeComponents/Hero/Hero"
import Testimonals from "../HomeComponents/Testimonals/Testimonals"
import Footer from "../../HeaderFooter/Footer/Footer"
import UserNav from "../../HeaderFooter/Navbar/UserNav"


const UserHome = () => {
  return (
    <div>
    <UserNav/>
    <Hero/>
    <Testimonals/>
    <Footer/>
    </div>
  )
}
export default UserHome