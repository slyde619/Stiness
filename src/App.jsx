import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


// import Footer from "./components/Footer";
// import FloatingWhatsApp from "./components/FloatingWhatsApp";
// import MobileCTA from "./components/MobileCTA";
// import Lightbox from "./components/Lightbox";
// import Toast from "./components/Toast";

function App() {
  // Global state for the application
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "" });

  // Handle preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show preloader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Global function to show toast messages
  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 3000);
  };

  // Global function to open lightbox
  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  // Global function to close lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="font-manrope min-h-screen scroll-smooth bg-white
     text-slate-800 antialiased selection:bg-[#FFC0CB]/40">
      {/* Skip to content link for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 
        focus:left-3 focus:z-[100] rounded-md bg-white/90 px-3 py-2 
        text-sm text-slate-800 shadow outline-1 outline-slate-200"
      >
        Skip to content
      </a>

      {/* Preloader */}
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>

      {/* Main Application */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main>
              <Hero />
              <About />
              <Services showToast={showToast} />
              <Gallery openLightbox={openLightbox} />
              <Booking showToast={showToast} />
              <Testimonials />
              <Contact showToast={showToast} />
            </main>

            {/* Footer */}
            {/* <Footer /> */}

            {/* Fixed/Floating Elements */}
            {/* <FloatingWhatsApp /> */}
            {/* <MobileCTA /> */}

            {/* Modals & Overlays */}
            {/* <Lightbox imageSrc={lightboxImage} onClose={closeLightbox} /> */}
            {/* <Toast show={toast.show} message={toast.message} /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
