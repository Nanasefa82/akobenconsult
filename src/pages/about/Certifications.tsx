import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileCheck, Award, Briefcase } from "lucide-react";

const Certifications = () => {
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

  const companyCertifications = [
    {
      name: "ISO 9001:2015",
      description:
        "Quality Management System certification demonstrating our commitment to delivering consistent, high-quality services.",
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    },
    {
      name: "ISO/IEC 27001:2013",
      description:
        "Information Security Management System certification validating our robust security practices for handling client data.",
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    },
    {
      name: "CMMI Level 5",
      description:
        "Highest level of the Capability Maturity Model Integration, demonstrating our advanced process optimization capabilities.",
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    },
    {
      name: "SOC 2 Type II",
      description:
        "Service Organization Control certification confirming our adherence to strict information security policies.",
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    },
    {
      name: "HiTRUST CSF",
      description:
        "Certification demonstrating compliance with healthcare-specific security, privacy, and regulatory requirements.",
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    },
    {
      name: "FedRAMP Authorized",
      description:
        "Federal Risk and Authorization Management Program authorization for cloud services offered to government agencies.",
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    },
  ];

  const contractVehicles = [
    {
      name: "GSA Multiple Award Schedule",
      description:
        "Long-term government-wide contracts for commercial and non-commercial products and services.",
      category: "Federal",
    },
    {
      name: "CIO-SP3",
      description:
        "Chief Information Officer – Solutions and Partners 3, a government-wide acquisition contract for IT solutions.",
      category: "Federal",
    },
    {
      name: "SEWP V",
      description:
        "Solutions for Enterprise-Wide Procurement, providing IT products and services for NASA and other federal agencies.",
      category: "Federal",
    },
    {
      name: "Department of Health IDIQ",
      description:
        "Indefinite Delivery/Indefinite Quantity contract for healthcare technology services.",
      category: "Federal",
    },
    {
      name: "State of California MSA",
      description:
        "Master Services Agreement for IT consulting and implementation services.",
      category: "State",
    },
    {
      name: "Texas DIR",
      description:
        "Department of Information Resources contract for streamlined procurement of technology solutions.",
      category: "State",
    },
    {
      name: "New York ECAT",
      description:
        "Enterprise Cloud Acquisition Team contract for cloud migration and management services.",
      category: "State",
    },
    {
      name: "Florida IT Services",
      description:
        "State-wide contract for information technology consulting and implementation services.",
      category: "State",
    },
  ];

  return (
    <PageLayout
      title="Certifications & Contract Vehicles"
      subtitle="Our Commitment to Excellence and Compliance"
      backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">Company Certifications</h2>
        <p className="text-lg">
          Akoben Consulting maintains the highest industry standards and
          certifications, demonstrating our commitment to quality, security, and
          excellence in service delivery across all our operations.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
      >
        {companyCertifications.map((certification, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                {certification.icon}
                <CardTitle>{certification.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{certification.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">Contract Vehicles</h2>
        <p className="text-lg">
          We maintain an extensive portfolio of contract vehicles that simplify
          the procurement process for government agencies and provide a
          streamlined path to accessing our services.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center mb-6">
            <Briefcase className="h-8 w-8 text-primary mr-4" />
            <h3 className="text-2xl font-bold">Federal Contract Vehicles</h3>
          </div>

          <div className="space-y-6">
            {contractVehicles
              .filter((vehicle) => vehicle.category === "Federal")
              .map((vehicle, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-xl font-bold mb-2">{vehicle.name}</h4>
                  <p>{vehicle.description}</p>
                </div>
              ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center mb-6">
            <FileCheck className="h-8 w-8 text-primary mr-4" />
            <h3 className="text-2xl font-bold">State Contract Vehicles</h3>
          </div>

          <div className="space-y-6">
            {contractVehicles
              .filter((vehicle) => vehicle.category === "State")
              .map((vehicle, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-xl font-bold mb-2">{vehicle.name}</h4>
                  <p>{vehicle.description}</p>
                </div>
              ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="bg-muted p-8 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-primary mr-4" />
              <h3 className="text-2xl font-bold">Business Designations</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">Small Business</h4>
                <p>
                  Certified Small Business Enterprise with the Small Business
                  Administration.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">8(a) Business</h4>
                <p>
                  Participant in the SBA's 8(a) Business Development Program.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">Veteran-Owned</h4>
                <p>
                  Verified Service-Disabled Veteran-Owned Small Business
                  (SDVOSB).
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">HUBZone</h4>
                <p>
                  Certified Historically Underutilized Business Zone enterprise.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-semibold">
                For more information about our certifications or contract
                vehicles, please contact our procurement team.
              </p>
              <a
                href="/contact"
                className="presidential-button rounded inline-block mt-4"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Certifications;
