import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Rocket, FileText, RefreshCcw, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    emoji: "🚀",
    title: "Contract Onboarding",
    description:
      "Start strong, stay aligned. We guide you through kick-off activities, internal readiness, and coordination with your government or prime partners to ensure a smooth launch.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    emoji: "💳",
    title: "Invoicing & Documentation",
    description:
      "Bill accurately, get paid faster. We help you establish compliant invoicing processes, backup documentation, and audit-ready files to keep cash flow steady and error-free.",
  },
  {
    icon: <RefreshCcw className="h-10 w-10 text-primary" />,
    emoji: "🔄",
    title: "Change Management",
    description:
      "Handle contract modifications with ease. From scope adjustments to funding changes, we help manage and document modifications while maintaining compliance and performance integrity.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    emoji: "📊",
    title: "Performance Monitoring & Reporting",
    description:
      "Stay ahead of reporting requirements. We support your team in tracking deliverables, meeting milestones, and preparing status reports that reflect your success — and keep you in good standing.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ContractAdminLifecycle = () => (
  <PageLayout
    title="Contract Administration & Lifecycle Support"
    subtitle="Because Winning the Contract Is Just the Beginning."
    backgroundImage="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
  >
    <motion.div
      className="p-8 max-w-4xl mx-auto space-y-8"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Once the contract is awarded, the real work begins — and we’re with you every step of the way. At Akoben Consulting, we help you manage performance, stay compliant, and adapt to changes without missing a beat.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow border border-primary/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            whileHover={{ scale: 1.04 }}
          >
            <span className="text-4xl mb-2" role="img" aria-label={feature.title}>{feature.emoji}</span>
            {feature.icon}
            <h3 className="font-bold text-xl text-primary mt-2 mb-1">{feature.title}</h3>
            <p className="text-gray-600 text-base">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="bg-primary/10 rounded-lg p-8 mt-6 shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h3 className="text-lg font-bold mb-2 text-primary">Ongoing Support. Proactive Oversight. Reliable Results.</h3>
        <ul className="list-disc ml-8 space-y-1 text-gray-700">
          <li>Streamlined administration</li>
          <li>Fewer compliance risks</li>
          <li>Better visibility into contract health</li>
          <li>Stronger relationships with agency counterparts</li>
        </ul>
      </motion.div>
      <motion.div
        className="mt-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-lg font-semibold mb-2">📞 Need support managing your government contract?</p>
        <p className="mb-4">Talk to our team today — and take the guesswork out of performance.</p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark transition-colors text-lg"
        >
          Get Contract Support
        </a>
      </motion.div>
    </motion.div>
  </PageLayout>
);

export default ContractAdminLifecycle;
