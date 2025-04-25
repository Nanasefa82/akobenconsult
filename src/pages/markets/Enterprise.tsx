import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const Enterprise = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const industries = [
    {
      name: "Retail & Consumer Goods",
      solutions: [
        "Omnichannel customer experience platforms",
        "Supply chain optimization",
        "Inventory management systems",
        "Customer analytics and insights",
      ],
    },
    {
      name: "Manufacturing",
      solutions: [
        "IoT and smart factory solutions",
        "Predictive maintenance systems",
        "Quality assurance automation",
        "Supply chain visibility platforms",
      ],
    },
    {
      name: "Energy & Utilities",
      solutions: [
        "Grid modernization solutions",
        "Energy management systems",
        "Customer engagement platforms",
        "Regulatory compliance tools",
      ],
    },
    {
      name: "Transportation & Logistics",
      solutions: [
        "Fleet management systems",
        "Route optimization platforms",
        "Supply chain visibility solutions",
        "Warehouse automation technologies",
      ],
    },
  ];

  return (
    <PageLayout
      title="Enterprise Solutions"
      subtitle="Strategic Technology for Business Transformation"
      backgroundImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">
          Driving Enterprise Excellence
        </h2>
        <p className="text-lg">
          Akoben Consulting delivers strategic technology solutions that enhance
          operational efficiency, drive innovation, and create competitive
          advantage for enterprises across industries.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-6">Enterprise Transformation</h3>
          <p className="mb-6">
            Our comprehensive enterprise solutions address the unique challenges
            faced by large organizations seeking to modernize legacy systems,
            optimize operations, and leverage data for strategic advantage.
          </p>

          <div className="space-y-6">
            <div className="flex">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold">Assessment & Strategy</h4>
                <p className="mt-2">
                  Comprehensive evaluation of your current technology landscape
                  and development of a strategic roadmap aligned with your
                  business objectives.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold">Architecture & Design</h4>
                <p className="mt-2">
                  Creation of scalable, secure, and adaptable technology
                  architectures that support your enterprise needs today and in
                  the future.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Implementation & Integration
                </h4>
                <p className="mt-2">
                  Seamless deployment of solutions that integrate with your
                  existing systems while minimizing disruption to your
                  operations.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                4
              </div>
              <div>
                <h4 className="text-xl font-bold">Optimization & Support</h4>
                <p className="mt-2">
                  Continuous improvement and support to ensure your technology
                  investments deliver maximum value over time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-muted p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Our Enterprise Solutions</h3>

          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <Checkbox id="digital" />
                <label htmlFor="digital" className="ml-2 font-bold">
                  Digital Transformation
                </label>
              </div>
              <p className="ml-6">
                End-to-end modernization of enterprise applications, processes,
                and customer experiences.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Checkbox id="cloud" />
                <label htmlFor="cloud" className="ml-2 font-bold">
                  Cloud Strategy & Migration
                </label>
              </div>
              <p className="ml-6">
                Secure, efficient migration to cloud platforms with optimized
                architectures for performance and cost.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Checkbox id="data" />
                <label htmlFor="data" className="ml-2 font-bold">
                  Data & Analytics
                </label>
              </div>
              <p className="ml-6">
                Enterprise data platforms that transform information into
                actionable business intelligence.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Checkbox id="automation" />
                <label htmlFor="automation" className="ml-2 font-bold">
                  Intelligent Automation
                </label>
              </div>
              <p className="ml-6">
                RPA, AI, and workflow automation solutions that enhance
                efficiency and reduce manual processes.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Checkbox id="cyber" />
                <label htmlFor="cyber" className="ml-2 font-bold">
                  Cybersecurity
                </label>
              </div>
              <p className="ml-6">
                Comprehensive security frameworks that protect your enterprise
                from evolving threats.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Checkbox id="customer" />
                <label htmlFor="customer" className="ml-2 font-bold">
                  Customer Experience Platforms
                </label>
              </div>
              <p className="ml-6">
                Digital solutions that enhance customer engagement and loyalty
                across all touchpoints.
              </p>
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
        <h3 className="text-2xl font-bold mb-8 text-center">
          Industry-Specific Enterprise Solutions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="bg-secondary text-white">
                <CardTitle>{industry.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {industry.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mt-16 p-8 bg-secondary text-white rounded-lg"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Enterprise Success Metrics
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">40%</p>
              <p>Average reduction in operational costs</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary mb-2">60%</p>
              <p>Faster time-to-market for new products</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary mb-2">85%</p>
              <p>Improvement in data processing efficiency</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
              <p>System availability for mission-critical applications</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="italic">
              "Akoben Consulting delivered a digital transformation program that
              exceeded our expectations, resulting in significant operational
              improvements and enhanced customer satisfaction."
            </p>
            <p className="mt-2 font-bold">
              - CIO, Fortune 500 Manufacturing Company
            </p>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Enterprise;
