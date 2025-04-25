import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Users, FileText, Handshake, ShieldCheck, MessageSquare, Gavel } from "lucide-react";

const features = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    emoji: "🤝",
    title: "Negotiation Preparation",
    description:
      "Prepare for pre-award and post-award negotiations with tailored strategies and data-driven insights.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    emoji: "📄",
    title: "Contract Terms Review",
    description:
      "Review and negotiate contract terms and clauses to reduce risk and enhance flexibility.",
  },
  {
    icon: <Gavel className="h-10 w-10 text-primary" />,
    emoji: "⚖️",
    title: "Equitable Adjustments & Change Orders",
    description:
      "Respond effectively to Requests for Equitable Adjustments (REAs), cure notices, or change orders.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    emoji: "🗣️",
    title: "Challenging Conversations",
    description:
      "Navigate tough discussions with government or prime contractor representatives with confidence and clarity.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    emoji: "🛡️",
    title: "Conflict Resolution",
    description:
      "Resolve conflicts before they escalate, preserving relationships and reputations.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const NegotiationsAdvisory = () => (
  <PageLayout
    title="Negotiation & Contract Advisory"
    subtitle="Where Confidence Meets Compliance."
    backgroundImage="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=1200&q=80"
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
          Navigating negotiations with federal Contracting Officers or large Prime Contractors requires more than technical know-how. It demands the ability to read the room, mitigate risk, and advocate effectively for your bottom line. With Akoben Consulting, you get seasoned negotiation support that blends deep acquisition experience with strategic foresight—ensuring your interests are protected and your agreements are built for success.
        </p>
        <p className="text-lg text-gray-700 mb-3">
          We prepare you to enter every negotiation with confidence, clarity, and a game plan. Whether you’re finalizing a new award, navigating a contract modification, or addressing a dispute, our team ensures your interests are protected and your value is clearly understood.
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
        className="mt-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-lg font-semibold mb-2">Bottom line:</p>
        <p className="mb-4">We help you speak the government's language — while staying true to your business goals.</p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark transition-colors text-lg"
        >
          Get Negotiation Support
        </a>
      </motion.div>
    </motion.div>
  </PageLayout>
);

export default NegotiationsAdvisory;
