import React from "react";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";

const ComplianceRisk = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageLayout
      title="Compliance & Risk Management"
      subtitle="Navigating Regulatory Requirements in Federal Contracting"
      backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="executive-heading mb-6">Ensuring Federal Compliance</h2>
          <p className="text-lg mb-6">
            At Akoben Consulting, we help businesses navigate the complex regulatory 
            landscape of government contracting. Our compliance and risk management 
            services ensure that your business meets all federal requirements while 
            minimizing exposure to potential risks and penalties.
          </p>
          
          <div className="bg-primary/10 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">The Value We Deliver:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Risk Reduction:</strong> Minimize compliance violations and potential penalties by up to 90%</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Audit Readiness:</strong> Confidently face government audits with properly maintained documentation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Competitive Advantage:</strong> Leverage compliance as a differentiator in your proposals</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Our Compliance Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Federal Acquisition Regulation (FAR) compliance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Defense Federal Acquisition Regulation Supplement (DFARS) compliance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Agency-specific regulatory compliance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Contract clause analysis and compliance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Compliance program development and implementation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Compliance training and education</span>
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
            <h3 className="text-xl font-bold mb-4">Our Risk Management Services:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Risk assessment and mitigation planning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>DCAA audit preparation and support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Internal control system development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Compliance monitoring and reporting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Corrective action plan development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Regulatory change management</span>
              </li>
            </ul>
          </div>

          <div className="border border-primary p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="h-10 w-10 text-primary mr-3" />
              <h3 className="text-xl font-bold">Proactive Protection</h3>
            </div>
            <p className="mb-4">
              Our approach to compliance and risk management is proactive rather than 
              reactive. We help you identify and address potential compliance issues 
              before they become problems, saving you time, money, and reputation.
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
        <h2 className="executive-heading mb-8 text-center">Our Compliance & Risk Approach</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Assessment</h3>
            <p>
              We conduct a comprehensive assessment of your current compliance posture, 
              identifying areas of strength and potential vulnerability in relation to 
              federal contracting requirements.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Planning</h3>
            <p>
              Based on our assessment, we develop a tailored compliance and risk management 
              plan that addresses your specific needs and aligns with your business objectives.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Implementation</h3>
            <p>
              We assist with implementing the compliance and risk management plan, providing 
              guidance, training, and support to ensure successful adoption throughout your 
              organization.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-bold mb-3">Monitoring & Improvement</h3>
            <p>
              We provide ongoing monitoring and support to ensure continued compliance and 
              risk management effectiveness, making adjustments as needed to address changing 
              requirements and business conditions.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services/certification-support"
            className="text-primary font-semibold hover:underline inline-flex items-center"
          >
            Learn about our Certification Support services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default ComplianceRisk;