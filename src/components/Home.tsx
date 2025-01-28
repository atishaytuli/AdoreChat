import Nav from "./Navbar"
import Footer from "./Footer"
import Testimonial from "./Testimonial"
import Faq from "./Faq"
import PartnerLogo from "./PartnerLogo"
import Hero from "./Hero"

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <PartnerLogo />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  )
}

export default Home