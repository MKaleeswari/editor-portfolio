import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      <Navbar/>
      <Hero />
      <About />
      <Portfolio />
     <Testimonials />
      <Contact />
     <Footer />  
    </main>
  );
}
