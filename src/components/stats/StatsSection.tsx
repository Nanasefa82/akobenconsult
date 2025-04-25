import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const stats = [
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 150, suffix: "+", label: "Global Partnerships" },
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Successful Projects" },
];

// Define gold text style for consistency
const goldTextStyle = {
  color: "#D4AF37",
  fontWeight: "bold",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.5)",
  WebkitTextStroke: "0.5px #8B7500",
  letterSpacing: "1px",
};

const StatCounter: React.FC<StatProps> = ({ value, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(value / (duration / 16)); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [controls, isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: delay * 0.1 },
        },
      }}
      className="text-center"
    >
      <div className="flex justify-center items-end">
        <span className="font-playfair text-5xl font-bold text-primary">
          {count}
        </span>
        <span className="font-playfair text-5xl font-bold text-primary">
          {suffix}
        </span>
      </div>
      <p className="text-lg mt-2 text-gray-700">{label}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });
  const headingControls = useAnimation();

  useEffect(() => {
    if (isHeadingInView) {
      headingControls.start("visible");
    }
  }, [headingControls, isHeadingInView]);

  return (
    <section className="py-20 bg-white">
      <div className="presidential-container">
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="executive-heading smaller-capabilities-heading">
            Our Performance
            {/* <span style={goldTextStyle}>Performance</span> */}
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our world-class track record speaks for itself, with numbers that
            reflect our commitment to excellence and leadership. amend
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
