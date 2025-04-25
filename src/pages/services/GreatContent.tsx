import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { FileSearch, FileText, Users, Handshake, Award, RefreshCcw, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <FileSearch className="h-10 w-10 text-primary" />,
    emoji: "🎯",
    title: "Smart Pre-Award Strategy",
    description:
      "Zero in on the right opportunities, build your capture plan, and get proposal-ready — before the solicitation even drops.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    emoji: "📑",
    title: "RFP Deep Dives",
    description:
      "We break down government solicitations, highlighting what matters most so you can respond with confidence and compliance.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    emoji: "🏆",
    title: "Proposal Development That Wins",
    description:
      "We help you stand out. From compliance checklists to persuasive technical volumes, we shape proposals that speak to both the letter and spirit of the RFP.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    emoji: "🤝",
    title: "Negotiation Coaching & Support",
    description:
      "We prepare you with the strategy, data, and insights you need to protect your interests and secure favorable terms.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    emoji: "📝",
    title: "Teaming & Subcontracting Agreements",
    description:
      "We review, negotiate, and structure teaming and subcontract agreements that work for your business — not against it.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    emoji: "🎉",
    title: "Award & Post-Award Support",
    description:
      "From Evaluation Notices to debriefs, we guide you through the critical early moments of contract award and beyond, helping you start strong and stay compliant.",
  },
  {
    icon: <RefreshCcw className="h-10 w-10 text-primary" />,
    emoji: "🔄",
    title: "Contract Modifications & Admin Help",
    description:
      "Whether it’s a funding shift, scope change, or new compliance requirement, we help you manage modifications smoothly and strategically.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    emoji: "🛡️",
    title: "Risk & Dispute Mitigation",
    description:
      "We step in early to help resolve problems before they escalate — keeping your reputation and contract intact.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const GreatContent = () => (
  <PageLayout
    title="Great Content"
    subtitle="Content that sets you apart"
    backgroundImage="https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=1200&q=80"
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
          At Akoben Consulting, we know that effective procurement management isn’t just about processes — it’s about people, strategy, and precision. As a boutique consulting firm, we specialize in delivering bespoke acquisition support to small and mid-sized businesses working with State and Federal Governments.
        </p>
        <p className="text-lg text-gray-700 mb-3">
          In the world of government contracting, one misstep during negotiations or execution can cost you more than just revenue — it can impact your reputation and future opportunities. Whether you’re dealing directly with Contracting Officers or negotiating with a Prime Contractor’s procurement team, you need a seasoned partner at your side.
        </p>
        <p className="font-semibold text-primary mb-4">That’s where we come in.</p>
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
        <p className="text-lg font-semibold mb-2">📞 Ready to elevate your content and win more contracts?</p>
        <p className="mb-4">Let’s partner to create proposals and strategies that set you apart.</p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark transition-colors text-lg"
        >
          Start Your Content Journey
        </a>
      </motion.div>
    </motion.div>
  </PageLayout>
);

export default GreatContent;
