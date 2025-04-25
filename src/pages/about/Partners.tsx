import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Rocket, Users, Globe } from "lucide-react";

const Partners = () => {
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

  const strategicPartners = [
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      description:
        "Advanced Consulting Partner providing cloud infrastructure and services.",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      description:
        "Gold Partner for Azure cloud, Office 365, and Power Platform solutions.",
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      description:
        "Premier Partner for Google Cloud Platform services and solutions.",
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      description:
        "Platinum Consulting Partner for CRM and customer experience solutions.",
    },
    {
      name: "ServiceNow",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg",
      description:
        "Elite Partner for digital workflow and IT service management solutions.",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      description:
        "Platinum Partner for database, ERP, and cloud infrastructure solutions.",
    },
  ];

  const technologyPartners = [
    "Adobe",
    "Atlassian",
    "Cisco",
    "Dell Technologies",
    "HPE",
    "IBM",
    "Informatica",
    "MongoDB",
    "MuleSoft",
    "Palo Alto Networks",
    "Red Hat",
    "SAP",
    "Snowflake",
    "Splunk",
    "Tableau",
    "VMware",
  ];

  return (
    <PageLayout
      title="Strategic Partners"
      subtitle="Collaborating for Client Success"
      backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">Our Partner Ecosystem</h2>
        <p className="text-lg">
          Akoben Consulting has built a robust network of strategic partnerships
          with industry-leading technology providers. These alliances enable us
          to deliver comprehensive, best-in-class solutions that leverage the
          latest innovations to address our clients' most complex challenges.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="lg:col-span-1"
        >
          <div className="sticky top-32 space-y-8">
            <div className="p-6 bg-secondary text-white rounded-lg">
              <Handshake className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Partnership Approach</h3>
              <p>
                We believe that meaningful partnerships are built on mutual
                trust, shared values, and a commitment to excellence. Our
                partnership strategy focuses on collaboration that creates value
                for our clients, our partners, and our organization.
              </p>
            </div>

            <div className="p-6 bg-muted rounded-lg">
              <Rocket className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Partner Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Joint solution development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Technical enablement</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Business development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Professional certifications</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-muted rounded-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Become a Partner</h3>
              <p className="mb-4">
                Interested in partnering with Akoben Consulting? We're always
                looking to expand our ecosystem with organizations that share
                our commitment to excellence and innovation.
              </p>
              <a
                href="/work-with-us/partners"
                className="presidential-button rounded inline-block"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <h3 className="text-2xl font-bold mb-6">
            Strategic Technology Partners
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {strategicPartners.map((partner, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="h-20 flex items-center justify-center p-4 bg-white">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-[80%] object-contain"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{partner.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-secondary text-white p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold">
                  Technology Partner Network
                </h3>
              </div>

              <p className="mb-6">
                In addition to our strategic partners, we maintain relationships
                with many leading technology providers to ensure we can deliver
                the right solutions for our clients' unique needs.
              </p>

              <div className="flex flex-wrap gap-4">
                {technologyPartners.map((partner, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary-foreground/10 rounded-full text-sm"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-6">Partner Success Stories</h3>

            <div className="space-y-6">
              <div className="p-6 border-l-4 border-primary rounded-r-lg shadow-sm">
                <h4 className="text-xl font-bold mb-2">
                  Healthcare Innovation Alliance
                </h4>
                <p className="mb-4">
                  In partnership with Microsoft and leading healthcare
                  organizations, we developed an interoperable health data
                  platform that improved patient outcomes and reduced
                  administrative costs by 35%.
                </p>
                <p className="text-sm text-gray-600">
                  Technology Partners: Microsoft, Oracle, Salesforce
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary rounded-r-lg shadow-sm">
                <h4 className="text-xl font-bold mb-2">
                  Government Cloud Transformation
                </h4>
                <p className="mb-4">
                  Working with AWS and security partners, we helped a federal
                  agency migrate to a FedRAMP-compliant cloud environment,
                  enhancing security while reducing infrastructure costs by 42%.
                </p>
                <p className="text-sm text-gray-600">
                  Technology Partners: AWS, Palo Alto Networks, Red Hat
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary rounded-r-lg shadow-sm">
                <h4 className="text-xl font-bold mb-2">
                  Financial Services Analytics Platform
                </h4>
                <p className="mb-4">
                  In collaboration with Google Cloud and data partners, we built
                  an advanced analytics platform for a financial institution
                  that improved fraud detection by 67% and enhanced customer
                  insights.
                </p>
                <p className="text-sm text-gray-600">
                  Technology Partners: Google Cloud, Snowflake, Tableau
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Partners;
