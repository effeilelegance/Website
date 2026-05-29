import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Pricing from "./components/Pricing";
import BookingEstimator from "./components/BookingEstimator";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Zones from "./components/Zones";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      {/* Lueurs dorées d'ambiance, fixées en fond */}
      <div className="pointer-events-none fixed inset-0 bg-luxe-radial" />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Fleet />
        <Pricing />
        <BookingEstimator />
        <Process />
        <Testimonials />
        <Zones />
        <Faq />
        <Footer />
      </div>

      <FloatingActions />
    </main>
  );
}

export default App;
