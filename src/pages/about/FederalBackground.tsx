import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Building, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";

const FederalBackground = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageLayout
      title="Federal Background"
      subtitle="Our Deep Roots in Government Contracting"
      backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="executive-heading mb-6">Our Federal Experience</h2>
          <p className="text-lg mb-6">
            Akoben Consulting was founded by professionals with over two decades of 
            experience working within federal agencies. This firsthand experience 
            gives us unique insights into the inner workings of government procurement 
            processes, agency priorities, and the specific challenges that contractors 
            face when doing business with the federal government.
          </p>
          
          <p className="text-lg mb-6">
            Our team includes former federal contracting officers, program managers, 
            and acquisition specialists who have managed multi-million dollar 
            procurements across various agencies. This deep understanding of both 
            sides of the procurement process allows us to provide our clients with 
            strategic guidance that is grounded in practical experience.
          </p>
          
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Agency Experience:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Building className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Department of Defense (DoD)</strong> - Procurement and acquisition support across multiple defense agencies</span>
              </li>
              <li className="flex items-start">
                <Building className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Department of Homeland Security (DHS)</strong> - Security and technology procurement</span>
              </li>
              <li className="flex items-start">
                <Building className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>General Services Administration (GSA)</strong> - Multiple award schedule management</span>
              </li>
              <li className="flex items-start">
                <Building className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Department of Health and Human Services (HHS)</strong> - Healthcare and IT procurement</span>
              </li>
              <li className="flex items-start">
                <Building className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Small Business Administration (SBA)</strong> - Small business program implementation</span>
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
            <h3 className="text-2xl font-bold mb-4 font-playfair">How Our Federal Background Benefits You</h3>
            <p className="mb-4">
              Our extensive experience within the federal government provides our clients 
              with a significant competitive advantage. We understand the unwritten rules, 
              cultural nuances, and decision-making processes that influence contract awards.
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Insider Perspective:</strong> We know how contracting officers evaluate proposals and what they're really looking for beyond the RFP requirements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Regulatory Navigation:</strong> We help you navigate complex federal regulations with confidence and compliance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Strategic Positioning:</strong> We position your capabilities in ways that resonate with federal decision-makers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Risk Mitigation:</strong> We identify and address potential compliance issues before they become problems</span>
              </li>
            </ul>
          </div>

          <div className="border border-primary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Commitment to Small Businesses</h3>
            <p className="mb-4">
              Having worked extensively with federal small business programs, we are 
              particularly passionate about helping small and disadvantaged businesses 
              succeed in the federal marketplace. We understand the unique challenges 
              these businesses face and the specific programs designed to support them.
            </p>
            <p>
              Our team has helped numerous small businesses obtain critical certifications, 
              navigate set-aside programs, and compete successfully for federal contracts. 
              We are committed to leveling the playing field and ensuring that small 
              businesses have the knowledge and tools they need to thrive in government 
              contracting.
            </p>
            <div className="mt-6">
              <Link
                to="/services/certification-support"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Learn about our Certification Support services <Award className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mt-16 text-center"
      >
        <h2 className="executive-heading mb-6">Ready to Leverage Our Federal Expertise?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Let our team of federal contracting experts help your business navigate the 
          complex world of government procurement and position you for success.
        </p>
        <Link to="/contact" className="presidential-button rounded inline-block">
          Schedule a Consultation
        </Link>
      </motion.div>
    </PageLayout>
  );
};

export default FederalBackground;