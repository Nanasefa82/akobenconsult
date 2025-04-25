import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Healthcare = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <PageLayout
      title="Healthcare Solutions"
      subtitle="Advanced Technology Solutions for Modern Healthcare Challenges"
      backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">
          Transforming Healthcare Delivery
        </h2>
        <p className="text-lg mb-8">
          Akoben Consulting partners with healthcare organizations to navigate
          complex regulatory landscapes, improve patient outcomes, and optimize
          operational efficiency through innovative technology solutions.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        <motion.div variants={fadeIn}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
            <CardHeader>
              <CardTitle>Provider Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Electronic Health Record (EHR) optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Telehealth integration platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Clinical decision support systems</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Revenue cycle management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
            <CardHeader>
              <CardTitle>Payer Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Claims processing automation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Fraud detection and prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Member engagement platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Value-based care analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
            <CardHeader>
              <CardTitle>Life Sciences</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Clinical trial management</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Regulatory compliance solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Supply chain optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Research data analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-6">Our Healthcare Expertise</h3>
          <p className="mb-4">
            With decades of combined experience in healthcare IT, our team
            brings deep domain knowledge to every project. We understand the
            unique challenges of the healthcare ecosystem and develop solutions
            that drive meaningful improvements in care delivery, patient
            experience, and operational efficiency.
          </p>
          <p className="mb-4">
            Our healthcare solutions are built with security and compliance at
            the core, ensuring adherence to HIPAA, HITECH, and other relevant
            regulations while promoting interoperability through standards like
            HL7 FHIR.
          </p>
          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h4 className="font-bold mb-4">Key Regulatory Expertise:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>HIPAA/HITECH</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>21 CFR Part 11</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>GDPR</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>CMS Regulations</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>ONC Requirements</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>FDA Regulations</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative"
        >
          <div className="sticky top-32">
            <h3 className="text-2xl font-bold mb-6">Healthcare Outcomes</h3>
            <div className="space-y-6">
              <div className="p-6 bg-secondary text-white rounded-lg">
                <h4 className="text-xl font-bold mb-2">50%</h4>
                <p>
                  Reduction in administrative overhead for healthcare providers
                  through our automated workflow solutions
                </p>
              </div>
              <div className="p-6 bg-secondary text-white rounded-lg">
                <h4 className="text-xl font-bold mb-2">35%</h4>
                <p>
                  Improvement in patient engagement metrics with our digital
                  health platforms
                </p>
              </div>
              <div className="p-6 bg-secondary text-white rounded-lg">
                <h4 className="text-xl font-bold mb-2">$4.2M</h4>
                <p>
                  Average annual cost savings for health plans implementing our
                  analytics solutions
                </p>
              </div>
              <div className="p-6 bg-secondary text-white rounded-lg">
                <h4 className="text-xl font-bold mb-2">99.9%</h4>
                <p>
                  Uptime for mission-critical healthcare applications maintained
                  by our managed services team
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Healthcare;
