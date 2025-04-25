import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";

const CertificationSupport = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageLayout
      title="Certification Support"
      subtitle="Navigating Federal Certification Programs for Small Businesses"
      backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="executive-heading mb-6">Unlocking Federal Opportunities</h2>
          <p className="text-lg mb-6">
            Akoben Consulting provides comprehensive support for small businesses seeking 
            to obtain and maintain federal certifications. These certifications can open 
            doors to set-aside contracts and provide competitive advantages in the federal 
            marketplace. Our team of experts guides you through the entire certification 
            process, from initial assessment to application submission and maintenance.
          </p>
          
          <div className="bg-primary/10 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">The Value We Deliver:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Expanded Contract Access:</strong> Gain access to $100+ billion in set-aside contracts annually</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Accelerated Certification:</strong> Reduce application time by up to 50% with expert guidance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Compliance Assurance:</strong> Maintain certification status with ongoing support and monitoring</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Certification Programs We Support:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>8(a) Business Development Program:</strong> For small disadvantaged businesses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>HUBZone Program:</strong> For businesses in Historically Underutilized Business Zones</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Service-Disabled Veteran-Owned Small Business (SDVOSB):</strong> For businesses owned by service-disabled veterans</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Women-Owned Small Business (WOSB):</strong> For businesses owned by women</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Disadvantaged Business Enterprise (DBE):</strong> For businesses owned by socially and economically disadvantaged individuals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Small Business Subcontracting Plans:</strong> For large businesses working with small business subcontractors</span>
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
            <h3 className="text-2xl font-bold mb-4">Why Certifications Matter</h3>
            <p className="mb-4">
              Federal certifications provide small businesses with access to set-aside contracts 
              and subcontracting opportunities that might otherwise be out of reach. These 
              programs are designed to help level the playing field and provide opportunities 
              for historically underrepresented groups in federal contracting.
            </p>
            <p>
              However, the certification process can be complex and time-consuming, with 
              strict eligibility requirements and documentation needs. Our team's expertise 
              helps you navigate these challenges efficiently and effectively, maximizing 
              your chances of successful certification.
            </p>
          </div>

          <div className="border border-primary p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Award className="h-10 w-10 text-primary mr-3" />
              <h3 className="text-xl font-bold">Our Approach</h3>
            </div>
            <p className="mb-4">
              We take a personalized approach to certification support, tailoring our services 
              to meet your specific needs and goals. We begin with a thorough assessment of 
              your eligibility for various certification programs, then develop a strategic 
              plan to pursue the most beneficial certifications for your business.
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
        <h2 className="executive-heading mb-8 text-center">Our Certification Support Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Assessment & Strategy</h3>
            <p>
              We evaluate your business against the eligibility criteria for various certification 
              programs and develop a strategic plan to pursue the most beneficial certifications 
              for your specific situation and goals.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Application Preparation</h3>
            <p>
              We guide you through the documentation requirements and application process, 
              ensuring all materials are complete, accurate, and presented in the most 
              favorable light to maximize your chances of approval.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
            <p>
              We provide continued support after certification, helping you maintain compliance 
              with program requirements, prepare for recertification, and leverage your 
              certifications to win contracts and grow your business.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services/acquisition-support"
            className="text-primary font-semibold hover:underline inline-flex items-center"
          >
            Explore our full range of services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default CertificationSupport;