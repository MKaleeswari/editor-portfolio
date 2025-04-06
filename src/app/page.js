import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
