import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  FileText,
  Target,
  DollarSign,
  ClipboardCheck,
  Building,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Government = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    {
      id: "compliance",
      title: "Compliance & Regulatory Guidance",
      icon: <Shield className="h-10 w-10 text-primary" />,
      items: [
        "Ensuring compliance with Federal Acquisition Regulations (FAR) and Defense Federal Acquisition Regulation Supplement (DFARS), and other Agency Supplements",
        "Helping businesses meet contract requirements",
      ],
    },
    {
      id: "capture",
      title: "Capture Management Guidance",
      icon: <Target className="h-10 w-10 text-primary" />,
      items: [
        "Assisting with Capture Plan",
        "Assisting with Target Identification & Screening",
      ],
    },
    {
      id: "proposal",
      title: "Proposal & Bidding Support",
      icon: <FileText className="h-10 w-10 text-primary" />,
      items: [
        "Assisting with proposal strategies and trade-offs",
        "Assisting with negotiating award terms and conditions",
      ],
    },
    {
      id: "pricing",
      title: "Cost & Pricing Analysis",
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      items: [
        "Assisting with developing cost proposal and indirect rate structure",
        "Assisting with audit preparations and defense of cost proposals during government reviews",
      ],
    },
    {
      id: "audit",
      title: "Audit & Risk Management",
      icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
      items: [
        "Assisting in preparation for Defense Contract Audit Agency (DCAA) Audits",
        "Identifying potential compliance risks and corrective actions",
      ],
    },
    {
      id: "contract",
      title: "Contract Management & Administration",
      icon: <Building className="h-10 w-10 text-primary" />,
      items: [
        "Providing hands on support on contract modifications, extensions and compliance reporting",
        "Providing guidance on sub/prime contractor management",
        "Assisting with Terminations Negotiations",
        "Assisting with contract close-outs and GFP disposition",
      ],
    },
    {
      id: "smallbusiness",
      title: "Small Business & Socioeconomic Programs",
      icon: <Award className="h-10 w-10 text-primary" />,
      items: [
        "Helping businesses obtain 8(a), HUBZone, SDVOSB, WOSB, and DBE certifications",
        "Ensuring compliance with Small Business Subcontracting Plans",
      ],
    },
  ];

  return (
    <PageLayout
      title="Akoben Consulting, LLC"
      subtitle="Capabilities Statement"
      backgroundImage="https://images.unsplash.com/photo-1476683874822-744764a2438f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="executive-heading mb-6">
            Government Procurement Excellence
          </h2>
          <p className="mb-4 text-lg">
            Akoben Solutions is a boutique consulting firm offering bespoke
            acquisition support to SMEs working with State and Federal
            Governments. Effective procurement management is crucial for
            organizations, requiring access to experienced teams for tailored
            guidance and strategic advice.
          </p>
          <p className="mb-6 text-lg">
            Organizations often renegotiate awards with Government Contracting
            Officers or Prime Contractor's procurement staff, where poor
            execution can lead to financial losses or damage to their
            reputation. Our advisors will assist you at each stage of your
            government contract process to achieve an optimal outcome.
          </p>

          <div className="mt-8 space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-secondary text-white">
                <CardTitle>About Akoben Consulting</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Akoben Consulting, LLC assists businesses and organizations
                  navigate the complexities of securing and managing contracts
                  with government entities at the federal, state and local
                  levels.
                </p>
                <div className="flex justify-center mt-6">
                  <Button asChild size="lg" className="presidential-button">
                    <Link to="/contact">Contact Our Team</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold mb-6">Our Services</h3>

          <Accordion type="single" collapsible className="w-full">
            {services.map((service) => (
              <AccordionItem
                key={service.id}
                value={service.id}
                className="border rounded-md mb-4"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    {service.icon}
                    <span className="font-medium">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  <ul className="space-y-2 pl-5">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-bold mb-4">Contract Vehicles</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-primary rounded-full mr-3"></span>
                GSA Multiple Award Schedule
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-primary rounded-full mr-3"></span>
                CIO-SP3 (Chief Information Officer – Solutions & Partners)
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-primary rounded-full mr-3"></span>
                SEWP (Solutions for Enterprise-Wide Procurement)
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-primary rounded-full mr-3"></span>
                Various agency-specific IDIQs and BPAs
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Government;
