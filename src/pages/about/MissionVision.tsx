import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { motion } from "framer-motion";

const MissionVision = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageLayout
      title="Mission, Vision & Values"
      subtitle="The Guiding Principles of Akoben Consulting"
      backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="mb-16">
            <h2 className="executive-heading mb-6">Our Mission</h2>
            <div className="p-8 bg-secondary text-white rounded-lg">
              <p className="text-xl italic">
                "At Akoben Consulting, we embody the spirit of the Akoben—a symbol of vigilance and a call to readiness. Our mission is to equip small and emerging businesses with the insight, strategy, and confidence to compete and thrive in government and donor-funded procurement. Grounded in nearly two decades of federal acquisition leadership, we guide our clients through every step of the procurement journey—ensuring compliance, building capacity, and unlocking pathways to sustainable growth. With Akoben, small businesses move from overlooked to opportunity-ready—poised to lead, deliver, and make lasting impact."
              </p>
            </div>
            <p className="mt-8 text-lg">
              At Akoben Consulting, we are committed to partnering with our
              clients to solve their most complex challenges through innovative
              technology solutions. We combine deep industry expertise with
              cutting-edge technical capabilities to deliver results that
              matter.
            </p>
          </div>

          <div>
            <h2 className="executive-heading mb-6">Our Vision</h2>
            <div className="p-8 bg-secondary text-white rounded-lg">
              <p className="text-xl italic">
                "To be the leading catalyst for small business success in public sector procurement—where readiness meets opportunity, and where every capable enterprise, no matter its size, can rise to deliver impact. At Akoben Consulting, we envision a world where small businesses are not just participants, but powerful leaders in shaping equitable, efficient, and mission-driven procurement outcomes across the U.S. and global markets."
              </p>
            </div>
            <p className="mt-8 text-lg">
              We envision a future where organizations of all sizes can harness
              the full potential of technology to drive meaningful outcomes.
              Through our work, we aim to set new standards of excellence and
              innovation in the industry while creating opportunities for our
              people to grow and thrive.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="executive-heading mb-6">Our Core Values</h2>

          <div className="space-y-8">
            <div className="p-6 border-l-4 border-primary bg-background shadow-md">
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p>
                We are committed to delivering the highest quality in everything
                we do. We set ambitious goals, pursue them with determination,
                and hold ourselves accountable for exceptional results.
              </p>
            </div>

            <div className="p-6 border-l-4 border-primary bg-background shadow-md">
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p>
                We conduct business with the highest ethical standards,
                maintaining transparency and honesty in all interactions. We do
                what is right, not what is easy.
              </p>
            </div>

            <div className="p-6 border-l-4 border-primary bg-background shadow-md">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>
                We embrace creative thinking and challenge the status quo to
                develop forward-looking solutions. We invest in emerging
                technologies and encourage our team to explore new ideas.
              </p>
            </div>

            <div className="p-6 border-l-4 border-primary bg-background shadow-md">
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p>
                We believe in the power of teamwork and partnership. We work
                closely with our clients and each other, combining diverse
                perspectives to achieve common goals.
              </p>
            </div>

            <div className="p-6 border-l-4 border-primary bg-background shadow-md">
              <h3 className="text-xl font-bold mb-2">Leadership</h3>
              <p>
                We lead by example in our industry and communities. We take
                initiative, inspire others, and accept responsibility for
                driving positive change.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="executive-heading mb-8">Our Commitment</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            At Akoben Consulting, we are dedicated to making a positive impact
            through our work. We believe that technology has the power to
            transform organizations and improve lives. Through our solutions, we
            aim to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-muted">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold mb-2">Drive Innovation</h3>
              <p>
                Helping organizations leverage emerging technologies to create
                new opportunities and stay ahead of the curve.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-muted">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold mb-2">Enhance Efficiency</h3>
              <p>
                Optimizing processes and systems to help our clients do more
                with less, reducing waste and improving outcomes.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-muted">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold mb-2">Enable Growth</h3>
              <p>
                Building scalable solutions that support our clients' strategic
                objectives and help them reach new heights.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default MissionVision;
