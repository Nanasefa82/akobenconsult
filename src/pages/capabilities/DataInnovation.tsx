import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Database, BarChart3, Brain, Shield } from "lucide-react";

const DataInnovation = () => {
  const services = [
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Build scalable data pipelines and architectures that transform raw data into valuable business assets",
      features: [
        "Cloud Data Warehouse Implementation",
        "ETL/ELT Pipeline Development",
        "Real-time Data Processing",
        "Data Governance Frameworks",
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Unlock actionable insights with sophisticated analytical techniques and visualization",
      features: [
        "Predictive Analytics Models",
        "Prescriptive Analytics Solutions",
        "Custom Dashboard Development",
        "Decision Support Systems",
      ],
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Implement AI solutions that drive automation, personalization, and innovation",
      features: [
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "AI Strategy & Implementation",
      ],
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Protect your most valuable data assets with advanced security solutions",
      features: [
        "Data Privacy Compliance",
        "Encryption & Access Control",
        "Threat Detection & Prevention",
        "Security Audit & Monitoring",
      ],
    },
  ];

  return (
    <PageLayout
      title="Data Innovation"
      subtitle="Transforming raw data into strategic advantages with presidential-grade analytics"
      backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="executive-subheading mb-6"
        >
          Unlock the Power of Your Data
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg"
        >
          In today's data-driven business environment, your organization's
          ability to leverage data effectively can be the difference between
          market leadership and obsolescence. Akoben Consulting delivers
          executive-caliber data solutions that transform information into
          intelligence, enabling smarter decisions, enhanced operational
          efficiency, and competitive advantage.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary p-3 rounded-full mr-4">
                <service.icon className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </div>
            <p className="mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-primary mr-2">•</span> {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-secondary text-white p-10 rounded-lg mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Our Data Innovation Approach
            </h3>
            <p className="mb-6">
              We recognize that effective data innovation requires more than
              just technical expertise—it demands a strategic, business-focused
              approach that aligns data initiatives with organizational goals.
            </p>
            <p>
              Our executive-grade methodology combines deep industry knowledge,
              advanced technical capabilities, and proven implementation
              strategies to deliver measurable business impact.
            </p>
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">01</span>
                <div>
                  <h4 className="font-bold text-white">Strategic Assessment</h4>
                  <p className="text-sm mt-1">
                    Evaluate your data maturity and identify high-value
                    opportunities
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">02</span>
                <div>
                  <h4 className="font-bold text-white">Architecture Design</h4>
                  <p className="text-sm mt-1">
                    Create scalable, secure data platforms aligned with business
                    needs
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">03</span>
                <div>
                  <h4 className="font-bold text-white">Implementation</h4>
                  <p className="text-sm mt-1">
                    Build and deploy solutions using agile, iterative
                    methodologies
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">04</span>
                <div>
                  <h4 className="font-bold text-white">Enablement</h4>
                  <p className="text-sm mt-1">
                    Empower your teams with the skills to maximize value from
                    data assets
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="text-center">
        <h3 className="executive-subheading mb-8">
          Ready to Transform Your Data Strategy?
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="presidential-button rounded px-8 py-4"
        >
          Schedule a Data Strategy Session
        </motion.button>
      </div>
    </PageLayout>
  );
};

export default DataInnovation;
