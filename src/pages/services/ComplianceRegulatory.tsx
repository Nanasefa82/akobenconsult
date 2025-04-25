import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { BadgeCheck, FileText, ShieldCheck, BookOpen, Users } from "lucide-react";

const services = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    emoji: "📚",
    title: "FAR Navigation",
    description:
      "In-depth support with FAR, DFARS, and agency supplements to ensure your policies and procedures align with government expectations.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    emoji: "📄",
    title: "Contract Compliance Assessments",
    description:
      "Comprehensive reviews of your contracts, internal controls, and performance to identify gaps and recommend corrective actions.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    emoji: "🛡️",
    title: "Audit Readiness & Support",
    description:
      "Prepare for DCAA, DCMA, and IG audits. Implement controls, respond to findings, and demonstrate compliance with cost principles and billing requirements.",
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    emoji: "✅",
    title: "Policy & Procedure Development",
    description:
      "Craft procurement, subcontracting, ethics, and reporting policies that are both compliant and practical for your operations.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    emoji: "🎓",
    title: "Training & Advisory",
    description:
      "Empower your team with targeted training, regulatory updates, and compliance briefings tailored to their roles and responsibilities.",
  },
];

const whyAkoben = [
  {
    emoji: "🌟",
    title: "Expertise You Can Trust",
    description:
      "Led by a former federal Contracting Officer with nearly 20 years of experience, Akoben brings unmatched insight into agency expectations and regulatory nuance.",
  },
  {
    emoji: "🔎",
    title: "Practical, Actionable Guidance",
    description:
      "We don’t just quote the FAR — we interpret it for your business and provide solutions that are realistic, scalable, and aligned with your goals.",
  },
  {
    emoji: "🤝",
    title: "Ongoing Partnership",
    description:
      "Compliance isn’t a one-time task. We offer ongoing advisory services to keep you ahead of changes in policy, best practices, and emerging risks.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ComplianceRegulatory = () => (
  <PageLayout
    title="Compliance & Regulatory Guidance"
    subtitle="Tailored Strategies. Confident Compliance."
    backgroundImage="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
  >
    <motion.div
      className="p-8 max-w-4xl mx-auto space-y-10"
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
          At Akoben Consulting, we understand that compliance isn’t just about checking boxes — it’s about building trust, reducing risk, and positioning your business for long-term success in the federal marketplace. With evolving regulations, stringent requirements, and diverse agency expectations, staying compliant can feel overwhelming. That’s where we come in.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow border border-primary/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            whileHover={{ scale: 1.04 }}
          >
            <span className="text-4xl mb-2" role="img" aria-label={service.title}>{service.emoji}</span>
            {service.icon}
            <h3 className="font-bold text-xl text-primary mt-2 mb-1">{service.title}</h3>
            <p className="text-gray-600 text-base">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h3 className="text-lg font-bold mb-4 text-primary text-center">Why Akoben?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyAkoben.map((item) => (
            <div key={item.title} className="bg-primary/10 rounded-lg p-6 shadow text-center">
              <span className="text-3xl mb-2 block">{item.emoji}</span>
              <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="mt-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-dark transition-colors text-lg"
        >
          Book a Compliance Consultation
        </a>
      </motion.div>
    </motion.div>
  </PageLayout>
);

export default ComplianceRegulatory;
