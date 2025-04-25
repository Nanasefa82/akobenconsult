import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  BookOpen,
  Award,
  Building,
  FileCheck,
} from "lucide-react";
import PageLayout from "../../components/layout/PageLayout";

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const aboutSections = [
    {
      title: "Mission, Vision & Values",
      description:
        "Discover our guiding principles and the vision that drives our commitment to excellence in federal consulting.",
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      link: "/about/mission-vision",
    },
    {
      title: "Leadership",
      description:
        "Meet our experienced leadership team with decades of combined experience in federal contracting and business consulting.",
      icon: <Users className="h-12 w-12 text-primary" />,
      link: "/about/leadership",
    },
    // {
    //   title: "Story of Akoben",
    //   description:
    //     "Learn about our journey and the meaning behind our name, which symbolizes vigilance and readiness.",
    //   icon: <BookOpen className="h-12 w-12 text-primary" />,
    //   link: "/about/story",
    // },
    {
      title: "Federal Background",
      description:
        "Understand our deep roots in federal contracting and how our experience benefits your business.",
      icon: <Building className="h-12 w-12 text-primary" />,
      link: "/about/federal-background",
    },
    {
      title: "Certifications & Contract Vehicles",
      description:
        "Review our qualifications and the contract vehicles we utilize to serve our clients efficiently.",
      icon: <FileCheck className="h-12 w-12 text-primary" />,
      link: "/about/certifications",
    },
  ];

  return (
    <PageLayout
      title="About Akoben Consulting"
      subtitle="Empowering Small Businesses in the Federal Marketplace"
      backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      {/* Animated Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative flex flex-col items-center justify-center min-h-[380px] md:min-h-[480px] bg-gradient-to-br from-primary/80 to-secondary/90 rounded-2xl shadow-xl mb-16 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-black/30 z-0 rounded-2xl"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          }}
        />
        <div className="relative z-10 text-center px-6 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg font-playfair mb-4 animate-fadeInDown">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto animate-fadeInUp">
            Akoben Consulting LLC is a strategic advisory firm dedicated to
            helping small businesses grow and succeed in the highly competitive
            government contracting space.
          </p>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <motion.div
        className="max-w-4xl mx-auto space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Company Story */}
        <div className="bg-white/90 rounded-2xl shadow-lg p-8 md:p-12 border-l-8 border-primary/70 animate-fadeInUp">
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            <span className="font-bold text-primary">
              Akoben Consulting LLC
            </span>{" "}
            is a strategic advisory firm dedicated to helping small businesses
            grow and succeed in the highly competitive government contracting
            space. Founded by a former Contracting Officer with over 20 years of
            federal acquisition experience—including leadership roles at the
            Department of Defense, United States Agency for International
            Development, and the Peace Corps—Akoben Consulting offers clients
            insider knowledge, strategic insight, and hands-on support across
            every phase of the acquisition lifecycle.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            We provide specialized services in acquisition strategy, compliance
            guidance, capture management, proposal development, pricing
            analysis, audit and risk mitigation, contract administration, and
            small business certification. Whether you're looking to break into
            the federal market or scale your existing footprint, we are your
            trusted partner in building capability, increasing competitiveness,
            and achieving sustainable success. From acquisition strategy and
            proposal development to compliance, pricing, and contract
            management—we provide the insight and support you need to grow with
            confidence.
          </p>
        </div>
        {/* Akoben Symbol Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-2xl shadow-lg p-8 md:p-12 animate-fadeInUp">
          <div className="mb-4 md:mb-0 flex-shrink-0 flex items-center justify-center">
            <img
              src="/logo/logo2.jpg"
              alt="Akoben Symbol Logo"
              className="h-32 w-32 md:h-40 md:w-40 rounded-full shadow-lg object-cover border-4 border-white"
            />
          </div>
          <div className="flex-1 text-white">
            <h3 className="text-2xl font-bold mb-3 font-playfair">
              The Akoben Symbol
            </h3>
            <p className="mb-3 text-lg md:text-xl">
              At the heart of our brand is the{" "}
              <span className="font-bold">Akoben symbol</span>—an Adinkra symbol
              of a war horn, representing vigilance, readiness, and strategic
              preparedness. In Akan culture, the Akoben is a call to action, a
              signal that commands attention, strength, and resolve. For us, it
              symbolizes our unwavering commitment to protecting our clients’
              interests, staying alert to opportunities and risks, and preparing
              them to respond decisively in high-stakes contracting
              environments.
            </p>
            <p className="mb-2 text-lg md:text-xl">
              The Akoben is not just a symbol—it’s our guiding principle. It
              reflects how we show up for our clients: alert, informed,
              strategic, and ready to lead from the front. Just as the war horn
              rallies warriors to position, we rally small businesses to take
              their rightful place in the federal marketplace.
            </p>
            <p className="text-lg md:text-xl font-semibold text-yellow-200">
              At Akoben Consulting, we don’t just advise—we empower.
            </p>
          </div>
        </div>
        {/* Animated About Sections Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeInUp"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-primary/70 flex flex-col items-center p-8 hover:scale-[1.03] transition-transform"
            >
              <div className="mb-4">{section.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-playfair">
                {section.title}
              </h3>
              <p className="text-gray-700 mb-6">{section.description}</p>
              <Link
                to={section.link}
                className="inline-block px-5 py-2 bg-primary text-white rounded-full font-semibold shadow hover:bg-primary-dark transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default AboutPage;
