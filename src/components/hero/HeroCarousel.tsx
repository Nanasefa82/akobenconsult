import React, { useState, useEffect, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SlideProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  cta: string[];
  link: string[];
}

const slides: SlideProps[] = [
  {
    imageSrc: "/images/hero-1.jpg",
    title: "Empowering Small Businesses to Compete in the Federal Marketplace",
    subtitle:
      "Akoben Consulting provides expert guidance through the federal acquisition process, helping small businesses navigate complex regulations and win government contracts.",
    cta: ["Get Started", "Schedule a Consultation"],
    link: ["/services/acquisition-support", "/contact"],
  },
  {
    imageSrc: "/images/hero-2.jpg",
    title: "Akoben Consulting Innovation",
    subtitle: "Setting the gold standard in digital transformation",
    cta: ["View Our Solutions"],
    link: ["/capabilities/digital-transformation"],
  },
  {
    imageSrc: "/images/hero-3.jpg",
    title: "Legacy of Excellence",
    subtitle: "Building tomorrow's success stories today",
    cta: ["See Our Impact"],
    link: ["/case-studies"],
  },
  {
    imageSrc: "/images/hero-4.jpg",
    title: "Healthcare Solutions",
    subtitle: "Innovative approaches to modern healthcare challenges",
    cta: ["Discover Healthcare Solutions"],
    link: ["/markets/healthcare"],
  },
  {
    imageSrc: "/images/hero-5.jpg",
    title: "Data-Driven Decision Making",
    subtitle: "Empowering your business with actionable insights",
    cta: ["Explore Data Services"],
    link: ["/capabilities/data-innovation"],
  },
];

// Define button style for consistency
const buttonStyle: CSSProperties = {
  backgroundColor: "#D4AF37",
  color: "#000",
  fontWeight: "bold",
  padding: "0.75rem 1.5rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  transition: "all 0.2s ease",
  cursor: "pointer",
  position: "relative",
  zIndex: 20,
};

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(slides.length).fill(false));
  const [allImagesPreloaded, setAllImagesPreloaded] = useState(false);

  // Preload all images when component mounts
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = slides.map((slide, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = slide.imageSrc;
          img.onload = () => {
            setImagesLoaded(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${slide.imageSrc}`);
            resolve(); // Resolve anyway to not block other images
          };
        });
      });

      Promise.all(imagePromises).then(() => {
        setAllImagesPreloaded(true);
        console.log("All carousel images preloaded successfully");
      });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoPlaying && allImagesPreloaded) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000); // Increased from 5000ms to 8000ms to slow down the carousel
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, allImagesPreloaded]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  // Create a background style with preloaded images
  const getBackgroundStyle = (index: number): CSSProperties => {
    return {
      backgroundImage: `url(${slides[index].imageSrc})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      filter: "brightness(1.05) contrast(1.05)",
      WebkitBackfaceVisibility: "hidden",
      MozBackfaceVisibility: "hidden",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Preload all images by rendering them with opacity 0 */}
      <div className="hidden">
        {slides.map((slide, index) => (
          <img 
            key={`preload-${index}`} 
            src={slide.imageSrc} 
            alt="" 
            aria-hidden="true"
            onLoad={() => {
              setImagesLoaded(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }}
          />
        ))}
      </div>
      
      {/* Background layer that's always present */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={getBackgroundStyle(currentSlide)}
      />
      
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
              >
                <div
                  className="w-full h-full"
                  style={getBackgroundStyle(index)}
                >
                  {/* Darker overlay for better text contrast */}
                  <div className="absolute inset-0 bg-black bg-opacity-55" />
                  <div className="presidential-container h-full flex items-center relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-white max-w-3xl ml-4 md:ml-16 mt-16"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        <h1 className="executive-heading smaller-capabilities-heading text-white font-bold drop-shadow-lg">
                          {slide.title}
                        </h1>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                      >
                        <p className="text-xl md:text-2xl mb-8 text-white font-medium drop-shadow-lg">
                          {slide.subtitle}
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 relative z-20"
                      >
                        {slide.cta.map((ctaText, ctaIndex) => (
                          <Link
                            key={ctaIndex}
                            to={slide.link[ctaIndex]}
                            className="presidential-button inline-block text-center hover:bg-yellow-500 active:bg-yellow-600 transition-all"
                            style={buttonStyle}
                            onClick={(e) => {
                              // This ensures the click event is captured
                              e.stopPropagation();
                              console.log(`Clicked on: ${ctaText}`);
                            }}
                          >
                            {ctaText}
                          </Link>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 z-30 cursor-pointer"
        aria-label="Previous slide"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 z-30 cursor-pointer"
        aria-label="Next slide"
      >
        <ArrowRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? "bg-primary w-10" : "bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
