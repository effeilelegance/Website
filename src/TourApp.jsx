import TourNavbar from "./tour/TourNavbar";
import TourHero from "./tour/TourHero";
import TourStats from "./tour/TourStats";
import Itinerary from "./tour/Itinerary";
import Circuits from "./tour/Circuits";
import Includes from "./tour/Includes";
import Gallery from "./tour/Gallery";
import TourBooking from "./tour/TourBooking";
import TourTestimonials from "./tour/TourTestimonials";
import TourFaq from "./tour/TourFaq";
import TourFooter from "./tour/TourFooter";
import FloatingActions from "./components/FloatingActions";

function TourApp() {
  return (
    <main className="min-h-screen overflow-hidden bg-midnight text-white">
      <TourNavbar />

      <div className="relative z-10">
        <TourHero />
        <TourStats />
        <Itinerary />
        <Circuits />
        <Includes />
        <Gallery />
        <TourBooking />
        <TourTestimonials />
        <TourFaq />
        <TourFooter />
      </div>

      <FloatingActions />
    </main>
  );
}

export default TourApp;
