import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, LineChart, Users } from "lucide-react";

const Finance = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageLayout
      title="Financial Services Solutions"
      subtitle="Powering Innovation and Security in Financial Markets"
      backgroundImage="https://images.unsplash.com/photo-1565514020179-026b92b2d70b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div
          className="lg:col-span-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="executive-heading mb-6">
            Transforming Financial Operations
          </h2>
          <p className="text-lg mb-6">
            Akoben Consulting delivers secure, innovative technology solutions
            that help financial institutions navigate complex regulatory
            environments, enhance customer experiences, and drive operational
            efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <Card className="border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Industry-leading security protocols and compliance frameworks
                  designed for the unique challenges of financial services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Digital Acceleration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Innovative solutions that accelerate digital transformation
                  while maintaining the highest standards of security and
                  compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <LineChart className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Advanced analytics capabilities that transform financial data
                  into actionable insights for better decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Customer Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Engaging digital platforms that enhance customer interactions
                  while streamlining operations.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6">
              Our Financial Services Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  Banking Solutions
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Core banking system modernization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Fraud detection and prevention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Digital banking platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Regulatory reporting automation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Capital Markets</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Trading platform optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Risk management systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Market data analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Compliance monitoring tools</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-4">Insurance</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Claims processing automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Policy management systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Underwriting analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Customer engagement platforms</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-4">Fintech</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Payment processing solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Digital wallet integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Blockchain application development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>API gateway and ecosystem integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="sticky top-32 space-y-8">
            <div className="bg-secondary text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Compliance Focus</h3>
              <p className="mb-4">
                Our solutions are designed with financial regulations in mind,
                ensuring your organization stays compliant with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Dodd-Frank</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Basel III/IV</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>GDPR/CCPA</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>KYC/AML Regulations</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>PCI DSS</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Client Impact</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Fraud Detection</span>
                    <span className="text-primary font-bold">67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                  <p className="text-sm mt-1">
                    Improvement in fraud detection rates
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Processing Speed</span>
                    <span className="text-primary font-bold">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                  <p className="text-sm mt-1">Faster transaction processing</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Operational Costs</span>
                    <span className="text-primary font-bold">41%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "41%" }}
                    ></div>
                  </div>
                  <p className="text-sm mt-1">Reduction in operational costs</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <blockquote className="italic">
                  "Akoben Consulting transformed our digital banking experience,
                  resulting in a 30% increase in customer engagement and a 25%
                  reduction in service costs."
                </blockquote>
                <p className="text-right mt-2 font-bold">
                  - CFO, Major Regional Bank
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Finance;
