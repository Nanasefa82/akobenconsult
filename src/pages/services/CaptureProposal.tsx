import React from "react";
import { motion } from "framer-motion";
import { Target, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";

const CaptureProposal = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageLayout
      title="Capture & Proposal Management"
      subtitle="Strategic Guidance to Win Federal Contracts"
      backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="executive-heading mb-6">Winning Government Contracts</h2>
          <p className="text-lg mb-6">
            Akoben Consulting provides comprehensive capture and proposal management 
            services designed to position your business for success in the federal 
            marketplace. Our experienced team guides you through every step of the 
            process, from opportunity identification to proposal submission and beyond.
          </p>
          
          <div className="bg-primary/10 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">The Value We Deliver:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Higher Win Rates:</strong> Our clients experience up to 40% higher win rates on competitive proposals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Efficient Resource Utilization:</strong> Focus your team's efforts on the most winnable opportunities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Competitive Edge:</strong> Develop compelling value propositions that differentiate your business</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Our Capture Management Services:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Opportunity assessment and qualification</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Capture plan development and execution</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Target identification and screening</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Competitive analysis and positioning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Win strategy development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Customer relationship management</span>
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
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Our Proposal Management Services:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Proposal planning and strategy development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>RFP analysis and compliance matrix development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Proposal writing and content development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Graphics and visual presentation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Review and quality control</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Proposal production and submission</span>
              </li>
            </ul>
          </div>

          <div className="border border-primary p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="h-10 w-10 text-primary mr-3" />
              <h3 className="text-xl font-bold">Strategic Approach</h3>
            </div>
            <p className="mb-4">
              Our approach to capture and proposal management is built on a foundation of 
              strategic thinking, thorough planning, and meticulous execution. We leverage 
              our deep understanding of federal procurement processes and agency needs to 
              develop compelling proposals that stand out from the competition.
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
        <h2 className="executive-heading mb-8 text-center">Our Proven Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Opportunity Identification</h3>
            <p>
              We help you identify and qualify opportunities that align with your capabilities, 
              experience, and strategic goals, focusing on those where you have the highest 
              probability of winning.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Capture Planning</h3>
            <p>
              We develop and execute a comprehensive capture plan that includes customer 
              engagement, competitive analysis, teaming arrangements, and win strategy 
              development.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Proposal Development</h3>
            <p>
              We manage the entire proposal development process, from planning and content 
              creation to review and production, ensuring compliance with all requirements 
              and deadlines.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-bold mb-3">Post-Submission Support</h3>
            <p>
              We provide support for oral presentations, negotiations, and debriefings, 
              helping you maximize your chances of winning and learning valuable lessons 
              for future opportunities.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services/cost-pricing"
            className="text-primary font-semibold hover:underline inline-flex items-center"
          >
            Learn about our Cost & Pricing Analysis services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default CaptureProposal;