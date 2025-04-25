import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star, Calendar } from "lucide-react";

const Awards = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const companyAwards = [
    {
      year: 2023,
      awards: [
        {
          name: "Forbes America's Best Management Consulting Firms",
          description:
            "Recognized for excellence in IT, technology, and digital transformation consulting services.",
          icon: <Trophy className="h-8 w-8 text-primary" />,
        },
        {
          name: "Fast Company's Most Innovative Companies",
          description:
            "Named among the top 10 most innovative companies in the enterprise technology sector.",
          icon: <Star className="h-8 w-8 text-primary" />,
        },
        {
          name: "Inc. 5000 Fastest-Growing Private Companies",
          description:
            "Ranked #127 on the prestigious list of America's fastest-growing private companies.",
          icon: <Award className="h-8 w-8 text-primary" />,
        },
      ],
    },
    {
      year: 2022,
      awards: [
        {
          name: "Deloitte Technology Fast 500",
          description:
            "Recognized as one of the 500 fastest-growing technology companies in North America.",
          icon: <Trophy className="h-8 w-8 text-primary" />,
        },
        {
          name: "CIO 100 Award",
          description:
            "Honored for excellence in digital healthcare innovation and transformation projects.",
          icon: <Award className="h-8 w-8 text-primary" />,
        },
        {
          name: "Best Places to Work in IT",
          description:
            "Named one of the top workplaces for technology professionals by Computerworld.",
          icon: <Star className="h-8 w-8 text-primary" />,
        },
      ],
    },
    {
      year: 2021,
      awards: [
        {
          name: "Partner of the Year - Microsoft",
          description:
            "Recognized as Microsoft's Government Solutions Partner of the Year for exceptional service.",
          icon: <Trophy className="h-8 w-8 text-primary" />,
        },
        {
          name: "FedHealthIT Innovation Award",
          description:
            "Honored for our innovative health information exchange solution for federal agencies.",
          icon: <Award className="h-8 w-8 text-primary" />,
        },
      ],
    },
  ];

  const partnerRecognitions = [
    {
      partner: "AWS",
      status: "Premier Consulting Partner",
      specializations: ["Healthcare", "Government", "Financial Services"],
    },
    {
      partner: "Microsoft",
      status: "Gold Partner",
      specializations: [
        "Cloud Platform",
        "Data Analytics",
        "Application Development",
      ],
    },
    {
      partner: "Salesforce",
      status: "Platinum Consulting Partner",
      specializations: [
        "Health Cloud",
        "Government Cloud",
        "Financial Services Cloud",
      ],
    },
    {
      partner: "ServiceNow",
      status: "Elite Partner",
      specializations: ["Healthcare", "Financial Services", "Public Sector"],
    },
  ];

  return (
    <PageLayout
      title="Awards & Recognition"
      subtitle="Excellence Recognized by Industry Leaders"
      backgroundImage="https://images.unsplash.com/photo-1514820720301-4c4790309f46?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">Industry Recognition</h2>
        <p className="text-lg">
          Akoben Consulting has been honored with numerous awards and
          recognitions for our commitment to excellence, innovation, and client
          success. These accolades reflect our team's dedication to delivering
          exceptional results and driving positive change through technology.
        </p>
      </motion.div>

      <div className="space-y-16 mb-20">
        {companyAwards.map((yearGroup, yearIndex) => (
          <motion.div
            key={yearIndex}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-center mb-8">
              <Calendar className="h-8 w-8 text-primary mr-4" />
              <h3 className="text-2xl font-bold">{yearGroup.year} Awards</h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {yearGroup.awards.map((award, awardIndex) => (
                <motion.div key={awardIndex} variants={fadeIn}>
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                      {award.icon}
                      <CardTitle className="text-xl">{award.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{award.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
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
        <h2 className="executive-heading mb-6">Partner Recognitions</h2>
        <p className="text-lg">
          Our strategic technology partners have recognized Akoben Advisory
          Services for our expertise, innovation, and successful client
          implementations across industries.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        {partnerRecognitions.map((recognition, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  {recognition.partner} - {recognition.status}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Specializations:</p>
                <div className="flex flex-wrap gap-2">
                  {recognition.specializations.map(
                    (specialization, spIndex) => (
                      <span
                        key={spIndex}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {specialization}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-secondary text-white p-8 rounded-lg"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Client Satisfaction Excellence
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">95%</p>
              <p>Client Satisfaction Rating</p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">92%</p>
              <p>Client Retention Rate</p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">9.3/10</p>
              <p>Average NPS Score</p>
            </div>
          </div>

          <div className="text-center">
            <p className="italic">
              "These metrics reflect our unwavering commitment to client success
              and our client-centric approach to everything we do."
            </p>
            <p className="mt-2 font-bold">- Alexander Pierce, CEO</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold mb-6">
          Community Impact Recognition
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-muted rounded-lg">
            <Star className="h-8 w-8 text-primary mx-auto mb-4" />
            <h4 className="font-bold mb-2">Tech for Good Award</h4>
            <p>
              Recognized for our pro bono technology solutions for nonprofit
              organizations.
            </p>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <Star className="h-8 w-8 text-primary mx-auto mb-4" />
            <h4 className="font-bold mb-2">Diversity & Inclusion Leadership</h4>
            <p>
              Honored for our commitment to building a diverse and inclusive
              workplace.
            </p>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <Star className="h-8 w-8 text-primary mx-auto mb-4" />
            <h4 className="font-bold mb-2">STEM Education Champion</h4>
            <p>
              Recognized for our initiatives to promote technology education in
              underserved communities.
            </p>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <Star className="h-8 w-8 text-primary mx-auto mb-4" />
            <h4 className="font-bold mb-2">Sustainability Excellence</h4>
            <p>
              Awarded for our environmental sustainability initiatives and green
              technology solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Awards;
