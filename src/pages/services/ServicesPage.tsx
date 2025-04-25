import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, FileText, CheckCircle } from "lucide-react";
import PageLayout from "../../components/layout/PageLayout";

const ServicesPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    {
      title: "Acquisition Strategy & Capture Management",
      description: "Strategic guidance for acquisition and capture management.",
      icon: <Shield className="h-12 w-12 text-primary" />,
      link: "/services/acquisition-strategy-capture",
    },
    {
      title: "Proposal and Bidding",
      description: "Winning proposals and strategic bidding support.",
      icon: <FileText className="h-12 w-12 text-primary" />,
      link: "/services/proposal-bidding",
    },
    {
      title: "Compliance & Regulatory Guidance",
      description: "Navigate compliance and regulatory requirements with confidence.",
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      link: "/services/compliance-regulatory",
    },
    {
      title: "Great Content",
      description: "Content that sets you apart in federal contracting.",
      icon: <FileText className="h-12 w-12 text-primary" />,
      link: "/services/great-content",
    },
    {
      title: "Negotiations & Contract Advisory",
      description: "Expert negotiation and contract advisory for your business.",
      icon: <FileText className="h-12 w-12 text-primary" />,
      link: "/services/negotiations-advisory",
    },
    {
      title: "Contract Administration & Lifecycle Support",
      description: "Comprehensive contract administration and lifecycle support services.",
      icon: <FileText className="h-12 w-12 text-primary" />,
      link: "/services/contract-admin-lifecycle",
    },
  ];

  return (
    <PageLayout
      title="Our Services"
      subtitle="Comprehensive Solutions for Federal Contracting Success"
      backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="executive-heading mb-6">Empowering Small Businesses in the Federal Marketplace</h2>
          <p className="text-lg mb-8">
            At Akoben Consulting, we provide a comprehensive suite of services designed to help small and medium-sized businesses successfully navigate the complex federal procurement landscape. With over two decades of experience in federal contracting, our team offers the expertise needed to secure and manage government contracts effectively.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-primary"
          >
            <div className="p-8">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 font-playfair">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Learn More <FileText size={16} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-secondary text-white p-8 rounded-lg mb-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 font-playfair">Why Choose Akoben Consulting?</h3>
          <p className="mb-6">
            Our team brings over two decades of experience working within federal agencies, giving us unique insight into government procurement processes and requirements. We understand what agencies look for in contractors and how to position your business for success.
          </p>
          <p className="mb-6">
            The name "Akoben" comes from the Adinkra symbol representing vigilance and wariness. Just as this symbol signifies readiness, our services prepare your business to meet challenges and seize opportunities in the federal marketplace.
          </p>
          <Link
            to="/contact"
            className="presidential-button rounded inline-block mt-4"
          >
            Schedule a Consultation
          </Link>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default ServicesPage;