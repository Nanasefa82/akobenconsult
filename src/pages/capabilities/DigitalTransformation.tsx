import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { TrendingUp, Code, Gauge, Network } from "lucide-react";

const DigitalTransformation = () => {
  return (
    <PageLayout
      title="Digital Transformation"
      subtitle="Revolutionizing organizational capabilities with executive-grade technology solutions"
      backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="executive-subheading mb-6">
            The Akoben Consulting Advantage
          </h2>
          <p className="text-lg mb-6">
            Digital transformation isn't just about implementing new
            technologies—it's about fundamentally changing how your organization
            operates and delivers value. At Akoben Consulting, we understand
            that successful transformation requires a strategic blend of
            leadership vision, cultural evolution, and technological innovation.
          </p>
          <p className="text-lg">
            Our executive-caliber approach ensures your digital initiatives
            align with business goals, drive measurable outcomes, and position
            your organization for long-term success in an increasingly digital
            world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[300px] md:h-full rounded-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
            alt="Digital Transformation Strategy Session"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary opacity-30"></div>
        </motion.div>
      </div>

      <h2 className="executive-subheading text-center mb-12">
        Our Digital Transformation Framework
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-background p-8 rounded-lg border border-border"
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary p-3 rounded-full mr-4">
              <TrendingUp className="text-secondary h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Strategic Vision</h3>
          </div>
          <p className="mb-4">
            We begin by developing a comprehensive digital strategy aligned with
            your business objectives, identifying opportunities for innovation
            and competitive advantage.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> Digital Maturity
              Assessment
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> Transformation
              Roadmap Development
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> ROI Modeling &
              Business Case Creation
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-background p-8 rounded-lg border border-border"
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary p-3 rounded-full mr-4">
              <Code className="text-secondary h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Technical Excellence</h3>
          </div>
          <p className="mb-4">
            Our world-class engineering teams implement cutting-edge solutions
            using modern architectures and development practices to deliver
            scalable, secure digital platforms.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> Cloud Migration &
              Modernization
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> API-First
              Architecture Development
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> DevOps & Continuous
              Delivery Implementation
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-background p-8 rounded-lg border border-border"
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary p-3 rounded-full mr-4">
              <Gauge className="text-secondary h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Operational Transformation</h3>
          </div>
          <p className="mb-4">
            We help you redesign business processes, optimize workflows, and
            implement digital tools that drive efficiency and enhance customer
            experiences.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> Process Digitization
              & Automation
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> Digital Workplace
              Implementation
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> Data-Driven Decision
              Making Enablement
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-background p-8 rounded-lg border border-border"
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary p-3 rounded-full mr-4">
              <Network className="text-secondary h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Cultural Evolution</h3>
          </div>
          <p className="mb-4">
            Successful digital transformation requires organizational change. We
            provide the leadership coaching, training, and change management
            support needed for sustainable transformation.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> Digital Skills
              Development Programs
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> Change Leadership
              Coaching
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span> Innovation Culture
              Enablement
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="bg-secondary text-white p-8 md:p-12 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Digital Transformation?
          </h2>
          <p className="text-lg mb-8">
            Connect with our digital transformation experts to discuss how
            Akoben Consulting can help your organization achieve its digital
            ambitions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="presidential-button rounded px-8 py-4"
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </div>
    </PageLayout>
  );
};

export default DigitalTransformation;
