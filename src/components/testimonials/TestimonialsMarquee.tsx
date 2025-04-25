import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Their Akoben approach to digital transformation has completely revolutionized our operations. World-class results.",
    name: "Jonathan Reynolds",
    title: "CEO",
    company: "Global Innovations Inc.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    quote:
      "The executive-level insights delivered by their team have been transformative for our organization's strategic direction.",
    name: "Alexandra Chen",
    title: "COO",
    company: "Nexus Healthcare",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    quote:
      "Akoben Consulting brings a level of excellence and precision that truly sets the gold standard in the industry.",
    name: "Michael Thompson",
    title: "CTO",
    company: "Tech Enterprises",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    quote:
      "Their world-class approach to data innovation has delivered insights that drive meaningful business outcomes.",
    name: "Sarah Williams",
    title: "Chief Data Officer",
    company: "Data Dynamics",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    quote:
      "Working with Akoben Consulting has been a transformative experience for our entire leadership team.",
    name: "Robert Keller",
    title: "President",
    company: "Meridian Group",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
  },
];

const goldTextStyle = {
  color: "#D4AF37",
  fontWeight: "bold",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.5)",
  WebkitTextStroke: "0.5px #8B7500",
  letterSpacing: "1px",
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="bg-secondary rounded-xl p-6 shadow-lg min-w-[350px] max-w-md mx-4 flex flex-col h-full">
      <div className="mb-4">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.667 13.333H5.33366V8.00001H10.667V13.333ZM10.667 24H5.33366V18.667H10.667V24ZM21.3337 24H16.0003V18.667H21.3337V24ZM21.3337 13.333H16.0003V8.00001H21.3337V13.333ZM10.667 13.333H16.0003V18.667H10.667V13.333ZM16.0003 13.333H21.3337V18.667H16.0003V13.333ZM26.667 13.333V8.00001H21.3337V13.333H26.667ZM26.667 24V18.667H21.3337V24H26.667ZM26.667 13.333V18.667H21.3337V13.333H26.667Z"
            fill="#D4AF37"
          />
        </svg>
      </div>
      <p className="text-white text-lg italic mb-6">{testimonial.quote}</p>
      <div className="mt-auto flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-primary font-semibold">{testimonial.name}</h4>
          <p className="text-white text-sm">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  // Start or resume the continuous marquee animation
  const startMarquee = () => {
    controls.start({
      x: [0, -1500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  };

  // Pause the marquee animation
  const pauseMarquee = () => {
    controls.stop();
  };

  // Start the continuous marquee animation when component mounts
  useEffect(() => {
    startMarquee();
  }, []);

  // Handle hover events
  const handleMouseEnter = () => {
    setIsPaused(true);
    pauseMarquee();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startMarquee();
  };

  return (
    <section
      className="py-20 bg-muted overflow-hidden"
      ref={containerRef}
      id="testimonials"
    >
      <div className="presidential-container mb-12">
        <h2 className="executive-heading smaller-capabilities-heading text-center">
          {/* <span style={goldTextStyle}>What Our</span> */}
          What Our Clients Say
        </h2>
      </div>

      {/* Single row with continuous marquee effect that pauses on hover */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div className="flex py-8" animate={controls}>
          {/* Duplicate testimonials to create a seamless loop */}
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <TestimonialCard
                key={`marquee-${testimonial.id}-${index}`}
                testimonial={testimonial}
              />
            )
          )}
        </motion.div>

        {/* Pause indicator */}
        {isPaused && (
          <div className="absolute top-2 right-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            Paused
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
