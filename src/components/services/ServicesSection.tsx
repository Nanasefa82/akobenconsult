import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Check,
  BarChart3,
  Briefcase,
  Globe,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  link: string;
}

const services = [
  {
    title: "Acquisition Strategy & Capture Management",
    description:
      "Expert guidance to help you plan, position, and win in the federal marketplace with proven capture strategies.",
    icon: <Briefcase size={36} className="text-primary" />,
    link: "/services/acquisition-strategy-capture",
  },
  {
    title: "Proposal and Bidding",
    description:
      "Comprehensive support for developing, pricing, and submitting competitive, compliant proposals that win contracts.",
    icon: <Check size={36} className="text-primary" />,
    link: "/services/proposal-bidding",
  },
  {
    title: "Compliance & Regulatory Guidance",
    description:
      "Stay audit-ready and compliant with evolving federal regulations, certifications, and reporting requirements.",
    icon: <ShieldCheck size={36} className="text-primary" />,
    link: "/services/compliance-regulatory",
  },
  {
    title: "Great Content",
    description:
      "Engaging, persuasive content creation for proposals, marketing, and communications that set you apart.",
    icon: <BarChart3 size={36} className="text-primary" />,
    link: "/services/great-content",
  },
  {
    title: "Negotiations & Contract Advisory",
    description:
      "Strategic negotiation and advisory services to maximize contract value and minimize risk.",
    icon: <Users size={36} className="text-primary" />,
    link: "/services/negotiations-advisory",
  },
  {
    title: "Contract Administration & Lifecycle Support",
    description:
      "End-to-end support for managing contracts, ensuring compliance, and driving successful project delivery.",
    icon: <Globe size={36} className="text-primary" />,
    link: "/services/contract-admin-lifecycle",
  },
];

// Define gold text style for consistency
const goldTextStyle = {
  color: "#D4AF37",
  fontWeight: "bold",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.5)",
  WebkitTextStroke: "0.5px #8B7500",
  letterSpacing: "1px",
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  delay,
  link,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: delay * 0.1 },
        },
      }}
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 font-playfair">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mt-auto">
        <Link
          to={link}
          className="inline-flex items-center text-primary font-semibold hover:underline"
        >
          Learn More <Check size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });
  const headingControls = useAnimation();

  useEffect(() => {
    if (isHeadingInView) {
      headingControls.start("visible");
    }
  }, [headingControls, isHeadingInView]);

  return (
    <section className="py-20 bg-muted">
      <div className="presidential-container">
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="text-center mb-16"
        >
          <h2 className="executive-heading smaller-capabilities-heading">
            {/* <span style={goldTextStyle}>Akobens</span>  */}
            Akobens Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Expert solutions designed to deliver transformative results
            with executive precision and uncompromising excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
