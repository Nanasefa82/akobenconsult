import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { ClipboardList, FileText, Users, DollarSign, Eye, Image as ImageIcon } from "lucide-react";

const features = [
  {
    icon: <ClipboardList className="h-10 w-10 text-primary" />,
    emoji: "🗂️",
    title: "Proposal Strategy & Planning",
    description:
      "Map out your win strategy, compliance matrix, and response timeline to keep your team aligned and on track.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    emoji: "🔍",
    title: "RFP Analysis & Compliance Support",
    description:
      "Break down complex RFPs into actionable pieces — ensuring your response is complete, responsive, and regulation-ready.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    emoji: "✍️",
    title: "Technical & Management Volume Development",
    description:
      "Support your SMEs with writing, editing, and refining content that clearly communicates your strengths and solutions.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    emoji: "💲",
    title: "Cost & Pricing Narrative Guidance",
    description:
      "From price-to-win strategies to cost realism narratives, ensure your pricing story supports your technical solution and aligns with agency expectations.",
  },
  {
    icon: <Eye className="h-10 w-10 text-primary" />,
    emoji: "👁️",
    title: "Review Process Management (Pink/Red/Gold Teams)",
    description:
      "Organize and facilitate color team reviews, giving your proposal the polish and strategic alignment it needs before submission.",
  },
  {
    icon: <ImageIcon className="h-10 w-10 text-primary" />,
    emoji: "🖼️",
    title: "Graphics & Layout Support",
    description:
      "Clean, clear, and effective visuals enhance readability and reinforce your key messages — making your proposal visually stand out.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ProposalBidding = () => (
  <PageLayout
    title="Proposal & Bidding Support"
    subtitle="Compelling Proposals. Competitive Bids. Clear Wins."
    backgroundImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
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
          You’ve identified the right opportunity — now it’s time to deliver a proposal that not only checks every box but tells a winning story.<br/>
          At Akoben Consulting, we help businesses develop high-impact, fully compliant proposals that resonate with evaluators and stand out in crowded competitions. Whether you're a small business going after your first federal contract or a seasoned prime chasing a major award, we bring structure, strategy, and storytelling to your proposal process.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4 text-primary">Proposal Support That’s Built Around You</h2>
        <p className="text-lg text-gray-700 mb-3">
          Every bid is unique — different agencies, requirements, and evaluation criteria. That’s why our approach is always customized to your opportunity, your team, and your goals. We partner with you through every stage, ensuring your submission is not just compliant — but compelling.
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
        <p className="text-lg font-semibold mb-2">Ready to win your next bid?</p>
        <p className="mb-4">Let’s create a proposal that stands out and secures the contract.</p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark transition-colors text-lg"
        >
          Get Proposal Support
        </a>
      </motion.div>
    </motion.div>
  </PageLayout>
);

export default ProposalBidding;
