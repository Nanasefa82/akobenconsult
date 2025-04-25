import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, BookOpen, Heart, Lightbulb, Clock, Globe } from "lucide-react";

const Career = () => {
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

  const benefitsData = [
    {
      title: "Competitive Compensation",
      description:
        "Industry-leading salary, performance bonuses, and equity opportunities.",
      icon: <User className="h-8 w-8 text-primary" />,
    },
    {
      title: "Comprehensive Healthcare",
      description:
        "Premium medical, dental, and vision coverage for you and your family.",
      icon: <Heart className="h-8 w-8 text-primary" />,
    },
    {
      title: "Continuous Learning",
      description:
        "Professional development stipend, training programs, and certification support.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Innovation Time",
      description:
        "Dedicated time to explore new ideas, technologies, and personal projects.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
    },
    {
      title: "Flexible Work",
      description:
        "Remote work options, flexible hours, and unlimited PTO policy.",
      icon: <Clock className="h-8 w-8 text-primary" />,
    },
    {
      title: "Global Opportunities",
      description:
        "Work with clients worldwide and potential for international assignments.",
      icon: <Globe className="h-8 w-8 text-primary" />,
    },
  ];

  const currentOpenings = [
    {
      title: "Senior Cloud Architect",
      location: "Washington, DC (Remote Option)",
      type: "Full-time",
      description:
        "Lead architecture design and implementation for complex cloud migrations and transformations. Experience with AWS, Azure, or GCP required.",
    },
    {
      title: "Healthcare IT Consultant",
      location: "Boston, MA (Remote Option)",
      type: "Full-time",
      description:
        "Provide strategic consulting and implementation services for healthcare organizations. Experience with EHR systems and healthcare regulations required.",
    },
    {
      title: "Data Scientist",
      location: "Remote",
      type: "Full-time",
      description:
        "Develop advanced analytics and machine learning solutions for clients across industries. Strong background in statistical analysis and predictive modeling required.",
    },
    {
      title: "UX/UI Designer",
      location: "San Francisco, CA (Remote Option)",
      type: "Full-time",
      description:
        "Create user-centered designs for web and mobile applications. Experience with design systems and user research methodologies required.",
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote",
      type: "Full-time",
      description:
        "Protect client systems and data through security assessments, implementation of security controls, and incident response. Relevant certifications preferred.",
    },
    {
      title: "Program Manager",
      location: "Washington, DC",
      type: "Full-time",
      description:
        "Oversee complex technology programs for government clients. Experience with federal contracting and program management methodologies required.",
    },
  ];

  return (
    <PageLayout
      title="Careers at Akoben Consulting"
      subtitle="Join Our Team of Innovators and Leaders"
      backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">Build Your Career With Us</h2>
        <p className="text-lg">
          At Akoben Consulting, we're looking for talented individuals who are
          passionate about technology and driven to make a difference. Join our
          team of innovators and problem-solvers to work on meaningful projects
          that impact organizations across industries.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-6">Why Akoben Consulting?</h3>
          <p className="mb-6">
            We believe that our success depends on the talent, dedication, and
            well-being of our people. That's why we've created a workplace
            environment that fosters growth, collaboration, and innovation.
          </p>

          <div className="aspect-w-16 aspect-h-9 mb-8">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
              alt="Akoben Consulting team collaborating"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Impactful Work</h4>
              <p>
                Work on challenging projects that solve real-world problems and
                drive meaningful outcomes for our clients across government,
                healthcare, finance, and enterprise sectors.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">Growth Opportunities</h4>
              <p>
                We're committed to your professional development with clear
                career paths, mentorship programs, and opportunities to expand
                your skills and expertise.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">Inclusive Culture</h4>
              <p>
                Join a diverse team where different perspectives are valued and
                everyone has the opportunity to contribute and make an impact.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">Work-Life Balance</h4>
              <p>
                We recognize the importance of balance in maintaining peak
                performance and satisfaction. Our policies and culture support
                your well-being both professionally and personally.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Benefits & Perks</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefitsData.map((benefit, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {benefit.icon}
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-secondary text-white rounded-lg">
            <h4 className="text-xl font-bold mb-4">Additional Benefits</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>401(k) with employer match</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>Financial planning services</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>Wellness program</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>Commuter benefits</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>Family leave program</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>Employee referral bonuses</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>Company-sponsored events</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                <span>Volunteer time off</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-8 text-center">
          Current Opportunities
        </h3>

        <div className="space-y-6">
          {currentOpenings.map((job, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h4 className="text-xl font-bold">{job.title}</h4>
                <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
              </div>
              <p className="mb-4">{job.description}</p>
              <div className="flex justify-end">
                <a href="/contact" className="presidential-button rounded">
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center"
      >
        <h3 className="text-2xl font-bold mb-6">Don't See the Right Fit?</h3>
        <p className="mb-8 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. Submit
          your resume for future opportunities or connect with our recruiting
          team to learn more about careers at Akoben Consulting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="presidential-button rounded">
            Submit Your Resume
          </a>
          <a
            href="/contact"
            className="border border-primary text-primary hover:bg-primary hover:text-white transition-colors px-6 py-2 rounded"
          >
            Connect with Recruiting
          </a>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Career;
