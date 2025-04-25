import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Settings, TrendingUp, Zap } from "lucide-react";

const BusinessOperations = () => {
  const capabilities = [
    {
      title: "Strategic Planning & Execution",
      description:
        "Transform vision into reality with our comprehensive strategic planning and execution services.",
      icon: TrendingUp,
    },
    {
      title: "Operational Excellence",
      description:
        "Optimize core business processes to enhance efficiency, quality, and customer satisfaction.",
      icon: Settings,
    },
    {
      title: "Business Acceleration",
      description:
        "Scale rapidly and enter new markets with our proven business acceleration methodologies.",
      icon: Zap,
    },
  ];

  return (
    <PageLayout
      title="Business & Mission Operations"
      subtitle="Elevating organizational performance with executive-grade operational solutions"
      backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="executive-subheading mb-6">
            Operational Excellence Redefined
          </h2>
          <p className="text-lg mb-6">
            In today's complex business environment, operational excellence is
            the foundation of sustainable success. Akoben Consulting delivers
            world-class solutions that optimize your core business functions,
            enhance mission effectiveness, and drive measurable performance
            improvements.
          </p>
          <p className="text-lg mb-6">
            Our comprehensive approach addresses all dimensions of operational
            performance—people, processes, technology, and governance—to create
            integrated solutions that deliver lasting value.
          </p>
          <p className="text-lg">
            With deep expertise across industries and functions, we help
            organizations achieve unprecedented levels of operational
            efficiency, agility, and resilience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-secondary text-white p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Why Akoben Consulting?</h3>
          <ul className="space-y-5">
            <li className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold">Executive-Level Expertise</span>
                <p className="mt-1">
                  Leadership team with C-suite experience across industries
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold">Integrated Approach</span>
                <p className="mt-1">
                  Holistic solutions that align strategy, operations, and
                  technology
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold">Measurable Outcomes</span>
                <p className="mt-1">
                  Results-focused methodologies with clear performance metrics
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold">Change Enablement</span>
                <p className="mt-1">
                  Expert guidance to ensure successful adoption of new ways of
                  working
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold">Implementation Excellence</span>
                <p className="mt-1">
                  Proven track record of delivering complex operational
                  transformations
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Core Capabilities */}
      <h2 className="executive-subheading text-center mb-12">
        Core Capabilities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-border p-8 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="bg-primary p-3 rounded-full inline-block mb-6">
              <capability.icon className="text-secondary h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
            <p>{capability.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Value Proposition */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-background border border-border p-12 rounded-lg mb-12"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            Transform Your Operations Today
          </h3>
          <p className="text-lg mb-8">
            Discover how Akoben Consulting can help your organization achieve
            unprecedented levels of operational excellence and mission success.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="presidential-button rounded px-8 py-4"
          >
            Request a Strategic Assessment
          </motion.button>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default BusinessOperations;
