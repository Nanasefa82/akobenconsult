import React from "react";
import { motion } from "framer-motion";
import { DollarSign, BarChart, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";

const CostPricing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageLayout
      title="Cost & Pricing Analysis"
      subtitle="Strategic Financial Solutions for Government Contracts"
      backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="executive-heading mb-6">Optimizing Your Contract Pricing</h2>
          <p className="text-lg mb-6">
            Akoben Consulting provides expert cost and pricing analysis services to help 
            businesses develop competitive yet profitable pricing strategies for government 
            contracts. Our team brings over 20 years of experience in federal pricing 
            requirements, ensuring your proposals meet all compliance standards while 
            maximizing your competitive position.
          </p>
          
          <div className="bg-primary/10 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">The Value We Deliver:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Optimized Pricing:</strong> Balance competitiveness with profitability to maximize contract value</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Audit-Ready Documentation:</strong> Reduce risk with compliant, defensible pricing strategies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span><strong>Cost Savings:</strong> Identify and eliminate unnecessary costs to improve margins</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Our Cost & Pricing Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Cost proposal development and review</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Indirect rate structure development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Price-to-win analysis and strategy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Cost volume preparation for proposals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Audit preparation and defense</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                <span>Cost accounting system setup and compliance</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bg-secondary text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Cost & Pricing Matters</h3>
            <p className="mb-4">
              In government contracting, pricing is about more than just being competitive. 
              It's about developing a pricing strategy that meets strict regulatory requirements, 
              covers all your costs, provides a reasonable profit, and positions you to win. 
              Our experts help you navigate this complex landscape to achieve optimal results.
            </p>
            <p>
              With the scrutiny that government agencies apply to contract pricing, having 
              experienced guidance is essential. Our team helps you avoid common pitfalls 
              and develop pricing strategies that stand up to government review while 
              maintaining your competitive edge.
            </p>
          </div>

          <div className="border border-primary p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <DollarSign className="h-10 w-10 text-primary mr-3" />
              <h3 className="text-xl font-bold">Our Approach</h3>
            </div>
            <p className="mb-4">
              We take a comprehensive approach to cost and pricing analysis, considering all 
              aspects of your business operations, contract requirements, and competitive 
              landscape. Our goal is to help you develop pricing strategies that are compliant, 
              competitive, and profitable.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="presidential-button inline-flex items-center px-6 py-3 rounded"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="executive-heading mb-8 text-center">Our Cost & Pricing Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Assessment & Analysis</h3>
            <p>
              We begin by understanding your business operations, cost structure, and pricing 
              objectives. We analyze your current pricing approach and identify opportunities 
              for improvement and compliance enhancement.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Strategy Development</h3>
            <p>
              Based on our assessment, we develop a comprehensive pricing strategy that aligns 
              with your business goals, contract requirements, and competitive landscape, 
              ensuring compliance with all applicable regulations.
            </p>
          </div>
          
          <div className="p-6 bg-background shadow-lg rounded-lg border-t-4 border-primary">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Implementation & Support</h3>
            <p>
              We assist with implementing the pricing strategy, preparing cost volumes for 
              proposals, and providing ongoing support for audit preparation and defense, 
              ensuring your pricing approach remains effective and compliant.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services/compliance-risk"
            className="text-primary font-semibold hover:underline inline-flex items-center"
          >
            Learn about our Compliance & Risk services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default CostPricing;