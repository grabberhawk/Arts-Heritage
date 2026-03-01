import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import Heritage from "./components/sections/Hero/Heritage";
import Featured from "./components/sections/Hero/Featured";
import Empower from "./components/sections/Hero/Empower";
import HowItWorks from "./components/sections/Hero/HowItWorks";
import FinalCTA from "./components/sections/Hero/FinalCTA";
import Footer from "./components/sections/Hero/Footer";

function App() {
  return (
    <div className="bg-[#F5EFE6] min-h-screen">
      <Navbar />
      <Hero/>
      <Heritage/>
      <Featured/>
      <Empower/>
      <HowItWorks/>
      <FinalCTA/>
      <Footer/>
    </div>
  );
}

export default App;