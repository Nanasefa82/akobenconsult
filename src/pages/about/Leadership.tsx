import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Leadership = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const executives = [
    {
      name: "Alexander Pierce",
      title: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      bio: "Alexander brings over 25 years of leadership experience in technology and consulting. Prior to founding Akoben Consulting, he held executive positions at several Fortune 500 companies where he led digital transformation initiatives and global technology strategy.",
      linkedin: "#",
    },
    {
      name: "Sophia Reynolds",
      title: "Chief Operating Officer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      bio: "With extensive experience in operations management and organizational development, Sophia oversees our day-to-day operations and drives operational excellence across the company. Her focus on process optimization and talent development has been instrumental in our growth.",
      linkedin: "#",
    },
    {
      name: "Marcus Chen",
      title: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      bio: "Marcus leads our technology strategy and innovation initiatives. With a background in computer science and AI, he has led the development of groundbreaking solutions across healthcare, finance, and government sectors. He holds multiple patents and is a recognized thought leader.",
      linkedin: "#",
    },
    {
      name: "Gabriela Martinez",
      title: "Chief Client Officer",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      bio: "Gabriela oversees our client relationships and ensures exceptional service delivery. Her client-centric approach and deep understanding of industry challenges have been key to building long-lasting partnerships and delivering transformative results for our clients.",
      linkedin: "#",
    },
  ];

  const leadership = [
    {
      name: "Jonathan Taylor",
      title: "VP, Health Solutions",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      bio: "Jonathan leads our Health Solutions practice, bringing extensive experience in healthcare technology and regulatory compliance. His team delivers innovative solutions that improve patient outcomes and operational efficiency for healthcare organizations.",
    },
    {
      name: "Rebecca Washington",
      title: "VP, Digital Transformation",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      bio: "Rebecca heads our Digital Transformation practice, helping clients reimagine their business models and customer experiences through technology. She specializes in change management and digital strategy development.",
    },
    {
      name: "David Kim",
      title: "VP, Data Innovation",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      bio: "David leads our Data Innovation practice, focusing on advanced analytics, AI, and machine learning solutions. His team helps clients transform data into actionable insights and competitive advantage.",
    },
    {
      name: "Natalie Rodriguez",
      title: "VP, Business Operations",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      bio: "Natalie directs our Business Operations practice, specializing in process optimization, enterprise resource planning, and workflow automation. Her expertise helps clients achieve operational excellence and efficiency.",
    },
    {
      name: "Michael Johnson",
      title: "VP, Government Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      bio: "Michael heads our Government Solutions practice, bringing deep experience in public sector technology and compliance requirements. His team delivers secure, efficient solutions for federal, state, and local government agencies.",
    },
    {
      name: "Sarah Williams",
      title: "VP, Finance Solutions",
      image:
        "https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      bio: "Sarah leads our Finance Solutions practice, specializing in technology for banking, capital markets, and insurance. Her team delivers secure, compliant solutions that drive innovation in financial services.",
    },
  ];

  return (
    <PageLayout
      title="Leadership Team"
      subtitle="Meet the Visionaries Behind Akoben Consulting"
      backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">Executive Leadership</h2>
        <p className="text-lg">
          Our executive team brings decades of combined experience in
          technology, consulting, and industry-specific expertise. With a shared
          commitment to excellence and innovation, they lead our organization in
          delivering exceptional value to our clients.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {executives.map((executive, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={executive.image}
                  alt={executive.name}
                  className="object-cover w-full h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{executive.name}</h3>
                  <p className="text-lg">{executive.title}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-4">{executive.bio}</p>
                <div className="flex justify-end">
                  <a
                    href={executive.linkedin}
                    className="p-2 text-primary hover:text-primary-dark transition-colors"
                    aria-label={`${executive.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${executive.name
                      .toLowerCase()
                      .replace(" ", ".")}@presidentialpower.com`}
                    className="p-2 text-primary hover:text-primary-dark transition-colors"
                    aria-label={`Email ${executive.name}`}
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">Practice Leadership</h2>
        <p className="text-lg">
          Our practice leaders are experts in their respective fields, bringing
          specialized knowledge and experience to drive innovation and
          excellence across our service offerings.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leadership.map((leader, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-sm text-gray-600">{leader.title}</p>
                  </div>
                </div>
                <p className="text-sm">{leader.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mt-20 p-8 bg-secondary text-white rounded-lg text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Join Our Leadership Team</h2>
        <p className="mb-6">
          We're always looking for exceptional talent to join our growing team.
          Explore career opportunities at Akoben Consulting and be part of our
          mission to deliver world-class technology solutions.
        </p>
        <a
          href="/work-with-us/career"
          className="presidential-button rounded inline-block"
        >
          Explore Careers
        </a>
      </motion.div>
    </PageLayout>
  );
};

export default Leadership;
