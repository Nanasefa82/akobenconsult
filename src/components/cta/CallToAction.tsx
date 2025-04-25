import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Define gold text style for consistency
const goldTextStyle = {
  color: "#D4AF37",
  fontWeight: "bold",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.5)",
  WebkitTextStroke: "0.5px #8B7500",
  letterSpacing: "1px",
};

const CallToAction: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80)",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-secondary bg-opacity-90" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="presidential-container relative z-10 text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className="executive-heading smaller-capabilities-heading text-white">
              Experience Akoben Consulting{" "}
              {/* <span style={goldTextStyle}> Consulting</span> */}
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl mb-8">
              Join the ranks of world-class organizations that have transformed
              their operations and achieved executive-level results with our
              solutions.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="presidential-button inline-flex items-center px-8 py-4 rounded"
            >
              Begin Your Transformation{" "}
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
