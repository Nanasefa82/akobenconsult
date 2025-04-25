import React from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight, BookOpen, FileText, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
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

  const blogPosts = [
    {
      title: "5 Key Strategies for Small Businesses Entering Federal Contracting",
      excerpt:
        "Discover proven approaches that can help small businesses successfully navigate the complex world of government contracting and secure their first federal contracts.",
      date: "June 15, 2023",
      category: "Government Contracting",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      slug: "strategies-for-small-businesses",
    },
    {
      title: "Understanding Recent FAR Changes and Their Impact on Contractors",
      excerpt:
        "A comprehensive breakdown of the latest Federal Acquisition Regulation updates and how they affect your compliance requirements and contracting opportunities.",
      date: "August 22, 2023",
      category: "FAR Updates",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      slug: "far-changes-impact",
    },
    {
      title: "The Complete Guide to WOSB Certification",
      excerpt:
        "Learn everything you need to know about obtaining and maintaining Women-Owned Small Business certification, including eligibility requirements and application processes.",
      date: "September 10, 2023",
      category: "Certifications",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      slug: "wosb-certification-guide",
    },
    {
      title: "How to Develop a Winning Capture Strategy",
      excerpt:
        "Explore the essential elements of an effective capture strategy that positions your business to win competitive government contracts consistently.",
      date: "October 5, 2023",
      category: "Capture Management",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      slug: "winning-capture-strategy",
    },
    {
      title: "Navigating the GSA Schedule Application Process",
      excerpt:
        "A step-by-step walkthrough of the GSA Schedule application process, with expert tips to help you avoid common pitfalls and expedite approval.",
      date: "November 12, 2023",
      category: "Contract Vehicles",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      slug: "gsa-schedule-application",
    },
    {
      title: "Cybersecurity Requirements for Federal Contractors: CMMC 2.0 Explained",
      excerpt:
        "An in-depth look at the Cybersecurity Maturity Model Certification 2.0 requirements and what your business needs to do to achieve and maintain compliance.",
      date: "December 8, 2023",
      category: "Compliance",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      slug: "cmmc-requirements",
    },
  ];

  const resourceCategories = [
    {
      title: "Government Contracting Guides",
      description: "Essential resources for navigating the federal marketplace",
      icon: BookOpen,
      link: "/resources/category/government-contracting",
    },
    {
      title: "FAR Updates & Analysis",
      description: "Stay current with regulatory changes and their implications",
      icon: RefreshCw,
      link: "/resources/category/far-updates",
    },
    {
      title: "Certification Resources",
      description: "Guidance for obtaining and maintaining federal certifications",
      icon: FileText,
      link: "/resources/category/certifications",
    },
  ];

  return (
    <PageLayout
      title="Resources & Insights"
      subtitle="Expert Guidance for Government Contracting Success"
      backgroundImage="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="executive-heading mb-6">Knowledge Center</h2>
        <p className="text-lg">
          Welcome to the Akoben Consulting Knowledge Center, your source for expert insights, practical guidance, and the latest updates on government contracting. Our resources are designed to help businesses of all sizes navigate the federal marketplace successfully.
        </p>
      </motion.div>

      {/* Resource Categories */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {resourceCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="bg-muted rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <category.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="mb-4 text-muted-foreground">{category.description}</p>
              <Link
                to={category.link}
                className="text-primary hover:text-primary-dark flex items-center"
              >
                Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Articles */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex flex-col h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <Link
                    to={`/resources/${post.slug}`}
                    className="text-primary hover:text-primary-dark flex items-center text-sm font-medium"
                  >
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-secondary text-white p-8 rounded-lg text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest insights, resources, and updates on government contracting directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 rounded text-black"
          />
          <button className="presidential-button rounded whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Blog;