import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";

const AcquisitionSupport = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageLayout
      title="Acquisition Support"
      subtitle="Expert Guidance Through the Federal Acquisition Process"
      backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="executive-heading mb-6">Navigating Federal Acquisitions</h2>
          <p className="text-lg mb-6">
            At Akoben Consulting, we provide comprehensive acquisition support services 
            designed to help small and medium-sized businesses successfully navigate the 
            complex federal procurement landscape. With over 20 years of experience in 
            federal contracting, our team offers the expertise needed to secure and 
            manage government contracts effectively.
          </p>
          
          <div className="bg-primary/10 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">The Value We Deliver:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Reduced Procurement Time:</strong> Cut acquisition cycles by up to 30% with our streamlined processes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Increased Win Rates:</strong> Improve your contract win probability through expert guidance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Risk Mitigation:</strong> Identify and address compliance issues before they become costly problems</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Our Acquisition Support Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Federal Acquisition Regulation (FAR) compliance guidance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Contract requirements analysis and planning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Acquisition strategy development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Market research and competitive analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Solicitation review and response planning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Contract negotiation support</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bg-secondary text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose Akoben Consulting?</h3>
            <p className="mb-4">
              Our team brings over two decades of experience working within federal agencies, 
              giving us unique insight into government procurement processes and requirements. 
              We understand what agencies look for in contractors and how to position your 
              business for success.
            </p>
            <p>
              The name "Akoben" comes from the Adinkra symbol representing vigilance and 
              wariness. Just as this symbol signifies readiness, our acquisition support 
              services prepare your business to meet challenges and seize opportunities in 
              the federal marketplace.
            </p>
          </div>

          <div className="border border-primary p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="h-10 w-10 text-primary mr-3" />
              <h3 className="text-xl font-bold">Our Approach</h3>
            </div>
            <p className="mb-4">
              We take a personalized approach to acquisition support, tailoring our services 
              to meet your specific needs and goals. Whether you're new to government contracting 
              or looking to expand your federal footprint, we provide the guidance and support 
              needed to navigate the acquisition process successfully.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="presidential-button inline-flex items-center px-6 py-3 rounded"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="executive-heading mb-8 text-center">Our Acquisition Support Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Assessment</h3>
            <p>
              We begin by understanding your business capabilities, goals, and target agencies. 
              This assessment helps us identify the most suitable opportunities and develop a 
              tailored acquisition strategy.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Strategy Development</h3>
            <p>
              Based on our assessment, we develop a comprehensive acquisition strategy that 
              outlines the approach, timeline, resources, and key activities needed to pursue 
              and secure government contracts.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Implementation & Support</h3>
            <p>
              We provide ongoing support throughout the acquisition process, from opportunity 
              identification to contract award and beyond, ensuring compliance and maximizing 
              your chances of success.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services/capture-proposal"
            className="text-primary font-semibold hover:underline inline-flex items-center"
          >
            Learn about our Capture & Proposal Management services
            <FileText className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default AcquisitionSupport;