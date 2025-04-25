import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Lightbulb, Users, Handshake, ClipboardList } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />, // Opportunity Assessment
    title: "Opportunity Assessment",
    emoji: "🧠",
    description:
      "Focus your efforts where it counts. We help qualify leads based on fit, risk, and win probability — so your team spends time only on what matters.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />, // Agency & Competitor Intelligence
    title: "Agency & Competitor Intelligence",
    emoji: "🕵️‍♀️",
    description:
      "Know the landscape. We gather and analyze intel on agency priorities, procurement history, and likely competitors to shape your approach.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />, // Teaming & Partnering Strategy
    title: "Teaming & Partnering Strategy",
    emoji: "🤝",
    description:
      "Strengthen your positioning. We help you identify the right primes or subs, build meaningful relationships, and negotiate strong teaming agreements.",
  },
  {
    icon: <ClipboardList className="h-10 w-10 text-primary" />, // Capture Planning & Execution
    title: "Capture Planning & Execution",
    emoji: "📋",
    description:
      "Turn strategy into action. From call plans to win themes, we support the full capture lifecycle — aligning your team around a clear, actionable plan.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AcquisitionStrategyCapture = () => (
  <PageLayout
    title="Acquisition Strategy & Capture Management"
    subtitle="Win Smarter. Compete Stronger."
    backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
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
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-primary drop-shadow-sm">
          Capture Management
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          At Akoben Consulting, we don’t just help you chase contracts — we help you position to win them.<br />
          In federal contracting, success doesn’t start with the proposal — it starts with a strategy. Our Capture Management services give your business the competitive edge it needs to identify the right opportunities, build relationships, and develop winning strategies before the RFP even drops.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
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
        <h3 className="text-lg font-bold mb-2 text-primary">With Akoben, You Get:</h3>
        <ul className="list-disc ml-8 space-y-1 text-gray-700">
          <li>Higher-quality, better-targeted pursuits</li>
          <li>Deeper insight into agency buying behavior</li>
          <li>A repeatable framework for pre-RFP success</li>
          <li>A clear path from interest to award</li>
        </ul>
      </motion.div>
      <motion.div
        className="mt-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-lg font-semibold mb-2">📞 Ready to capture more — and win more?</p>
        <p className="mb-4">Let’s talk about how Akoben can help you shape your next win.</p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark transition-colors text-lg"
        >
          Schedule a Consultation
        </a>
      </motion.div>
    </motion.div>
  </PageLayout>
);

export default AcquisitionStrategyCapture;
