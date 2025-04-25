import React from "react";
import { motion } from "framer-motion";
import PageLayout from "../../components/layout/PageLayout";

const Story = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageLayout
      title="Our Story"
      subtitle="The Journey of Akoben Consulting"
      backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="executive-heading mb-6">The Akoben Story</h2>
          <p className="text-lg mb-6">
            Akoben Consulting was founded with a clear mission: to empower small and 
            medium-sized businesses to successfully compete in the federal marketplace. 
            Drawing on over two decades of experience working within federal agencies, 
            our founder recognized the challenges that many businesses face when trying 
            to navigate the complex world of government contracting.
          </p>
          
          <p className="text-lg mb-6">
            What began as a small consultancy has grown into a trusted partner for 
            businesses seeking to secure and manage government contracts. Our journey 
            has been defined by a commitment to excellence, integrity, and client success.
          </p>
          
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Our Founding Principles:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span><strong>Excellence:</strong> Delivering the highest quality service in everything we do</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span><strong>Integrity:</strong> Operating with honesty and transparency in all interactions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span><strong>Knowledge:</strong> Leveraging deep expertise in federal procurement</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span><strong>Partnership:</strong> Building lasting relationships with our clients</span>
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
          <h3 className="text-2xl font-bold mb-6">The Meaning of Akoben</h3>
          <div className="bg-secondary text-white p-8 rounded-lg mb-8">
            <p className="mb-4">
              The name "Akoben" comes from the Adinkra symbols of West Africa, specifically 
              from the Akan people of Ghana. Akoben is a war horn symbol that represents 
              vigilance, wariness, and readiness.
            </p>
            <p>
              Just as the war horn calls people to attention and readiness, Akoben Consulting 
              stands ready to help businesses navigate the challenges of government contracting, 
              remaining vigilant about opportunities and potential pitfalls in the federal 
              marketplace.
            </p>
          </div>

          <div className="border border-primary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Growth and Evolution</h3>
            <p className="mb-4">
              Over the years, Akoben Consulting has expanded its service offerings to meet 
              the evolving needs of our clients. What began with a focus on acquisition 
              support has grown to include capture and proposal management, cost and pricing 
              analysis, compliance and risk management, and certification support.
            </p>
            <p>
              Throughout this evolution, our commitment to helping small businesses succeed 
              in the federal marketplace has remained constant. We take pride in the success 
              stories of our clients and the positive impact we've had on their growth and 
              development.
            </p>
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
        <h2 className="executive-heading mb-8 text-center">Our Journey</h2>
        
        <div className="relative border-l-4 border-primary ml-6 pl-10 space-y-12">
          <div className="relative">
            <div className="absolute -left-14 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Foundation</h3>
            <p className="text-lg">
              Akoben Consulting was established with a vision to bridge the gap between small 
              businesses and federal contracting opportunities, drawing on our founder's extensive 
              experience in federal agencies.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-14 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Growth</h3>
            <p className="text-lg">
              As our reputation for excellence grew, so did our team and service offerings. 
              We expanded to provide comprehensive support across the entire government 
              contracting lifecycle.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-14 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Today</h3>
            <p className="text-lg">
              Today, Akoben Consulting stands as a trusted partner for businesses seeking to 
              navigate the federal marketplace. Our team of experts brings decades of combined 
              experience and a passion for helping our clients succeed.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-14 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <h3 className="text-xl font-bold mb-3">Looking Forward</h3>
            <p className="text-lg">
              As we look to the future, we remain committed to our mission of empowering small 
              businesses to compete and succeed in the federal marketplace, adapting our services 
              to meet the evolving needs of our clients and the changing landscape of government 
              contracting.
            </p>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Story;