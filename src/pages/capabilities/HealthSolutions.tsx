import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const HealthSolutions = () => {
  const solutions = [
    {
      title: "Digital Health Platforms",
      description:
        "Revolutionize patient care with our comprehensive digital health platforms that connect patients, providers, and payers.",
      features: [
        "Patient Portals",
        "Telehealth Integration",
        "Health Data Analytics",
        "Provider Collaboration Tools",
      ],
    },
    {
      title: "Healthcare Analytics",
      description:
        "Transform raw health data into actionable insights with our advanced analytics solutions.",
      features: [
        "Predictive Disease Modeling",
        "Population Health Management",
        "Cost Optimization Analysis",
        "Treatment Efficacy Tracking",
      ],
    },
    {
      title: "Clinical Decision Support",
      description:
        "Empower clinicians with AI-driven decision support tools that enhance diagnostic accuracy and treatment planning.",
      features: [
        "Evidence-Based Recommendations",
        "Risk Stratification",
        "Medical Imaging Analysis",
        "Treatment Optimization",
      ],
    },
  ];

  return (
    <PageLayout
      title="Health Solutions"
      subtitle="Transforming healthcare delivery through innovative technology solutions"
      backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="executive-subheading mb-6">
            Presidential-Grade Healthcare Innovation
          </h2>
          <p className="text-lg mb-6">
            In today's rapidly evolving healthcare landscape, organizations need
            technology partners who understand both clinical and operational
            challenges. Akoben Consulting delivers executive-caliber solutions
            that streamline processes, improve patient outcomes, and optimize
            resource allocation.
          </p>
          <p className="text-lg">
            Our deep healthcare expertise, combined with cutting-edge technology
            capabilities, enables us to develop tailored solutions that address
            your organization's unique challenges while meeting stringent
            regulatory requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-secondary text-white p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">
            Why Choose Our Health Solutions?
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold">
                  HIPAA Compliant Infrastructure
                </span>
                <p className="mt-1">
                  Secure solutions built on a foundation of regulatory
                  compliance
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold">Interoperability Focus</span>
                <p className="mt-1">
                  Seamless integration with existing healthcare IT ecosystems
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold">Clinician-Centered Design</span>
                <p className="mt-1">
                  Developed with direct input from healthcare professionals
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold">Outcomes-Driven Approach</span>
                <p className="mt-1">
                  Solutions measured by their impact on clinical and financial
                  results
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      <h2 className="executive-subheading text-center mb-12">
        Our Health Solution Portfolio
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-border p-8 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
            <p className="mb-6">{solution.description}</p>
            <ul className="space-y-2">
              {solution.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="text-primary mr-2">•</span> {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default HealthSolutions;
