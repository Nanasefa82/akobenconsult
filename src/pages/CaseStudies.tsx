import React from "react";
import PageLayout from "../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudies = () => {
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

  const caseStudies = [
    {
      title: "Federal Healthcare Agency Modernization",
      category: "Government",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      summary:
        "Transformed legacy systems into a modern, interoperable health information exchange platform, improving data access while ensuring security and compliance.",
      results: [
        "45% reduction in system maintenance costs",
        "68% improvement in data exchange efficiency",
        "HIPAA and HITECH compliant architecture",
        "Seamless integration with partner systems",
      ],
    },
    {
      title: "Global Financial Institution Digital Transformation",
      category: "Finance",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      summary:
        "Implemented an enterprise-wide digital transformation program, modernizing core banking systems and enhancing customer-facing digital platforms.",
      results: [
        "38% increase in digital customer engagement",
        "67% improvement in fraud detection capabilities",
        "25% reduction in transaction processing time",
        "Enhanced regulatory compliance and reporting",
      ],
    },
    {
      title: "Healthcare Provider Data Analytics Platform",
      category: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      summary:
        "Developed a comprehensive data analytics platform that transformed clinical and operational data into actionable insights, improving patient outcomes and operational efficiency.",
      results: [
        "32% reduction in average length of stay",
        "18% decrease in readmission rates",
        "$4.2M annual cost savings from optimized operations",
        "Real-time clinical decision support capabilities",
      ],
    },
    {
      title: "Manufacturing Enterprise IoT Implementation",
      category: "Enterprise",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      summary:
        "Designed and implemented an IoT-enabled smart factory solution, connecting production equipment and systems for real-time monitoring and predictive maintenance.",
      results: [
        "42% reduction in unplanned downtime",
        "23% improvement in overall equipment effectiveness",
        "15% increase in production throughput",
        "Enhanced quality control and defect detection",
      ],
    },
    {
      title: "State Government Cloud Migration",
      category: "Government",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      summary:
        "Led a comprehensive cloud migration strategy for a state government agency, transitioning legacy applications to a secure, scalable cloud environment.",
      results: [
        "$6.8M annual infrastructure cost savings",
        "99.99% system availability",
        "Enhanced disaster recovery capabilities",
        "FedRAMP and state security compliance",
      ],
    },
    {
      title: "Retail Chain Digital Customer Experience",
      category: "Enterprise",
      image:
        "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      summary:
        "Created an omnichannel customer experience platform that unified online and in-store shopping experiences while providing personalized recommendations and engagement.",
      results: [
        "28% increase in online conversion rate",
        "35% growth in repeat customer purchases",
        "46% improvement in customer satisfaction scores",
        "Seamless integration of online and in-store data",
      ],
    },
  ];

  return (
    <PageLayout
      title="Case Studies"
      subtitle="Real-World Success Stories and Client Transformations"
      backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">Client Success Stories</h2>
        <p className="text-lg">
          Explore how Akoben Consulting has partnered with organizations across
          industries to solve complex challenges, drive innovation, and deliver
          measurable results through technology-enabled transformation.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {caseStudies.map((study, index) => (
          <motion.div key={index} variants={fadeIn} className="group">
            <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-secondary text-white px-3 py-1">
                  {study.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">{study.summary}</p>
                <h4 className="font-bold mb-2">Key Results:</h4>
                <ul className="space-y-1">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t flex justify-end">
                  <button className="text-primary hover:underline font-medium">
                    Read Full Case Study
                  </button>
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
        className="bg-secondary text-white p-8 rounded-lg mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Client Impact by the Numbers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p>Successful digital transformations</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary mb-2">$480M</p>
              <p>Client cost savings generated</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary mb-2">38%</p>
              <p>Average efficiency improvement</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary mb-2">42</p>
              <p>Industry awards for client projects</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Our Approach to Client Success
            </h3>
            <p className="mb-6">
              At Akoben Consulting, we believe that successful outcomes require
              more than just technical expertise. Our approach combines deep
              industry knowledge, innovative thinking, and a collaborative
              partnership with our clients.
            </p>

            <div className="space-y-6">
              <div className="p-4 border-l-4 border-primary">
                <h4 className="font-bold mb-2">Strategic Focus</h4>
                <p>
                  We align technology initiatives with business objectives to
                  ensure measurable impact on what matters most to your
                  organization.
                </p>
              </div>

              <div className="p-4 border-l-4 border-primary">
                <h4 className="font-bold mb-2">User-Centered Design</h4>
                <p>
                  We prioritize user needs and experiences throughout the
                  development process to ensure adoption and satisfaction.
                </p>
              </div>

              <div className="p-4 border-l-4 border-primary">
                <h4 className="font-bold mb-2">Agile Delivery</h4>
                <p>
                  Our iterative approach allows for flexibility, continuous
                  improvement, and faster time-to-value.
                </p>
              </div>

              <div className="p-4 border-l-4 border-primary">
                <h4 className="font-bold mb-2">Knowledge Transfer</h4>
                <p>
                  We ensure your team has the skills and understanding to
                  maintain and build upon the solutions we deliver.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Client Testimonials</h3>

            <div className="space-y-6">
              <div className="p-6 bg-muted rounded-lg">
                <p className="italic mb-4">
                  "Akoben Consulting's team brought not only technical expertise
                  but also a deep understanding of our industry challenges.
                  Their strategic approach transformed our operations and
                  positioned us for future growth."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Michael Roberts</p>
                    <p className="text-sm">CIO, Federal Healthcare Agency</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-muted rounded-lg">
                <p className="italic mb-4">
                  "The data analytics platform developed by Akoben Advisory
                  Services has transformed how we deliver care. We now have
                  real-time insights that improve patient outcomes while
                  optimizing our operational efficiency."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Dr. Sarah Johnson</p>
                    <p className="text-sm">
                      Chief Medical Officer, Regional Healthcare Network
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-muted rounded-lg">
                <p className="italic mb-4">
                  "Working with Akoben Consulting on our digital transformation
                  initiative exceeded our expectations. Their team's expertise
                  and commitment to our success resulted in a solution that has
                  revolutionized our customer experience."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">David Williams</p>
                    <p className="text-sm">
                      SVP of Technology, Global Financial Institution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default CaseStudies;
