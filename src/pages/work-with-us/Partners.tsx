import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Briefcase, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const WorkWithUsPartners = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const partnerTypes = [
    {
      title: "Technology Partners",
      description:
        "Join our ecosystem of technology providers to create integrated solutions that deliver exceptional value to our clients.",
      benefits: [
        "Joint solution development and integration",
        "Co-marketing and co-selling opportunities",
        "Technical enablement and training",
        "Access to our client base across industries",
      ],
      icon: <Zap className="h-12 w-12 text-primary mb-4" />,
    },
    {
      title: "Services Partners",
      description:
        "Collaborate with us to extend service capabilities and deliver comprehensive solutions to clients.",
      benefits: [
        "Complementary service offerings",
        "Expanded geographic reach",
        "Joint delivery models",
        "Knowledge sharing and best practices",
      ],
      icon: <Briefcase className="h-12 w-12 text-primary mb-4" />,
    },
    {
      title: "Channel Partners",
      description:
        "Resell or refer our solutions to your clients and earn competitive commissions while adding value to your portfolio.",
      benefits: [
        "Competitive commission structure",
        "Sales and marketing support",
        "Technical training and certification",
        "Dedicated partner manager",
      ],
      icon: <Handshake className="h-12 w-12 text-primary mb-4" />,
    },
  ];

  return (
    <PageLayout
      title="Partner With Us"
      subtitle="Join Our Partner Ecosystem for Mutual Growth and Client Success"
      backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">Growing Together</h2>
        <p className="text-lg">
          Akoben Consulting believes in the power of partnerships to deliver
          exceptional value to our clients. Our partner program is designed to
          foster collaboration, innovation, and mutual success. We invite
          organizations that share our commitment to excellence to join our
          ecosystem and explore the possibilities of what we can achieve
          together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {partnerTypes.map((type, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center">{type.icon}</div>
                <CardTitle>{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">{type.description}</p>
                <h4 className="font-bold mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <motion.div
          className="lg:col-span-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-6">Partner Program Benefits</h3>

          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h4 className="text-xl font-bold mb-4">Business Growth</h4>
              <p className="mb-4">
                Expand your market reach and unlock new revenue streams through
                joint go-to-market strategies, co-selling opportunities, and
                access to our established client base across industries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>New revenue streams</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Expanded market reach</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Joint business planning</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Cross-selling opportunities</span>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="text-xl font-bold mb-4">Innovation & Expertise</h4>
              <p className="mb-4">
                Collaborate on cutting-edge solutions that address complex
                market challenges. Gain access to our technical expertise,
                industry knowledge, and thought leadership.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Joint solution development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Technical enablement</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Knowledge sharing</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Industry insights</span>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="text-xl font-bold mb-4">Marketing & Visibility</h4>
              <p className="mb-4">
                Enhance your market presence through co-branded marketing
                initiatives, case studies, joint events, and thought leadership
                content.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Co-branded content</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Joint webinars and events</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Case study development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                  <span>Partner showcase</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="sticky top-32 space-y-8">
            <div className="bg-secondary text-white p-8 rounded-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
              <p className="mb-6">
                Join our growing ecosystem of partners and collaborate with us
                to create innovative solutions that drive meaningful impact for
                our clients.
              </p>
              <ol className="space-y-4 mb-8">
                <li className="flex">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">
                    1
                  </span>
                  <span>
                    Submit your application through our partner portal
                  </span>
                </li>
                <li className="flex">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">
                    2
                  </span>
                  <span>Connect with our partnership team for evaluation</span>
                </li>
                <li className="flex">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">
                    3
                  </span>
                  <span>
                    Develop a joint business plan with defined objectives
                  </span>
                </li>
                <li className="flex">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">
                    4
                  </span>
                  <span>
                    Launch partnership with enablement and go-to-market support
                  </span>
                </li>
              </ol>
              <a
                href="/contact"
                className="presidential-button rounded w-full flex justify-center"
              >
                Contact Our Partner Team
              </a>
            </div>

            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-bold mb-4">Partner Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <Link to="#" className="text-primary hover:underline">
                    Partner Program Guide
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <Link to="#" className="text-primary hover:underline">
                    Technical Documentation
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <Link to="#" className="text-primary hover:underline">
                    Marketing Toolkit
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <Link to="#" className="text-primary hover:underline">
                    Training & Certification
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                  <Link to="#" className="text-primary hover:underline">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="p-8 bg-muted rounded-lg">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Featured Partner Success Stories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Cloud Transformation Alliance</h4>
              <p className="mb-4">
                Our partnership with AWS and ServiceNow enabled a healthcare
                organization to migrate legacy systems to the cloud, reducing
                costs by 40% and improving service delivery.
              </p>
              <p className="text-sm text-gray-600">Partners: AWS, ServiceNow</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Data Innovation Consortium</h4>
              <p className="mb-4">
                Collaborating with Microsoft and Snowflake, we developed a data
                analytics platform for a financial institution that enhanced
                fraud detection and customer insights.
              </p>
              <p className="text-sm text-gray-600">
                Partners: Microsoft, Snowflake
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">
                Digital Experience Collaboration
              </h4>
              <p className="mb-4">
                Our partnership with Salesforce and Adobe created an omnichannel
                customer experience solution that increased engagement by 35%
                for a retail client.
              </p>
              <p className="text-sm text-gray-600">
                Partners: Salesforce, Adobe
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default WorkWithUsPartners;
