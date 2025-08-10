
import BlackShadeSection from "./components/homepage/Slider";
import WhyChooseUs from "./components/homepage/Whychooseus"
import FeaturedTemples from "./components/homepage/Feature"
import TempleItinerary from "./components/homepage/TempleItinerary"
import LimitedOffer from "./components/homepage/LimitedOffer"
import FAQ from "./components/homepage/FAQ"
import NewsletterSignup from "./components/homepage/NewsletterSignup"

import BookingForm from "./components/homepage/BookingForm"
import Testimonials from "./components/homepage/Testimonials"

export default function Home() {
  return (
    <>
      <BlackShadeSection />
      <WhyChooseUs />
      <TempleItinerary />
      <FeaturedTemples />
      <LimitedOffer />
      <Testimonials />
      <FAQ />
      <NewsletterSignup />
      <BookingForm />
      {/* <StickyCTA /> */}

    </>
  );
}
