import React, { useEffect } from "react";
import NavBar from "../navigation/NavBar";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Banner */}
      <div
        className="relative pt-32 pb-20 md:pb-28"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-secondary bg-opacity-80"></div>
        <div className="presidential-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white mb-10"
          >
            <h1 className="executive-heading text-white">{title}</h1>
            {subtitle && <p className="text-xl md:text-2xl mt-4">{subtitle}</p>}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 md:py-24">
        <div className="presidential-container">{children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default PageLayout;
