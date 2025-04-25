import React from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowLeft, Share2, Bookmark, Printer } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real implementation, you would fetch the blog post data based on the slug
  // This is mock data for demonstration purposes
  const post = {
    title: "5 Key Strategies for Small Businesses Entering Federal Contracting",
    date: "June 15, 2023",
    author: "Alexander Pierce",
    authorTitle: "Chief Executive Officer",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    category: "Government Contracting",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    content: [
      {
        type: "paragraph",
        content: "Breaking into the federal marketplace can be challenging for small businesses, but with the right approach, it can be a significant growth opportunity. The federal government is the world's largest customer, spending over $650 billion annually on contracts. Moreover, it has goals to award a certain percentage of contracts to small businesses, creating a substantial opportunity for those who know how to navigate the system."
      },
      {
        type: "heading",
        content: "1. Understand Federal Acquisition Regulations (FAR)"
      },
      {
        type: "paragraph",
        content: "The Federal Acquisition Regulation (FAR) is the primary rulebook for government procurement. Understanding these regulations is crucial for any business looking to secure federal contracts. The FAR outlines the rules, procedures, and requirements that govern the acquisition process, from solicitation to contract award and performance."
      },
      {
        type: "paragraph",
        content: "Key areas to focus on include contract types, competition requirements, socioeconomic programs, and compliance obligations. While the FAR can be complex, investing time in understanding its basics will give you a significant advantage in the federal marketplace."
      },
      {
        type: "callout",
        content: "Pro Tip: Start with FAR Parts 1-18, which cover the general aspects of federal contracting, before diving into the more specialized sections."
      },
      {
        type: "heading",
        content: "2. Obtain Necessary Registrations and Certifications"
      },
      {
        type: "paragraph",
        content: "Before you can bid on federal contracts, you need to complete several registrations. These include obtaining a DUNS number, registering in the System for Award Management (SAM), and potentially getting certified in socioeconomic programs if you qualify."
      },
      {
        type: "paragraph",
        content: "Socioeconomic certifications such as 8(a) Business Development, HUBZone, Women-Owned Small Business (WOSB), and Service-Disabled Veteran-Owned Small Business (SDVOSB) can provide access to set-aside contracts and sole-source opportunities, significantly increasing your chances of winning federal business."
      },
      {
        type: "heading",
        content: "3. Develop a Strategic Marketing Approach"
      },
      {
        type: "paragraph",
        content: "Federal agencies are not just looking for the lowest price; they want contractors who understand their mission and can deliver value. Develop a targeted marketing strategy that focuses on specific agencies and contracting opportunities that align with your capabilities."
      },
      {
        type: "paragraph",
        content: "Research agency procurement forecasts, attend industry days, and network with contracting officers and prime contractors. Position your company as a solution provider that understands the agency's challenges and can deliver results efficiently and effectively."
      },
      {
        type: "heading",
        content: "4. Start Small and Build Past Performance"
      },
      {
        type: "paragraph",
        content: "Past performance is a critical evaluation factor in federal contracting. Without it, winning significant contracts can be challenging. Consider starting with smaller opportunities such as simplified acquisitions (under $250,000), subcontracting with established prime contractors, or pursuing opportunities through government-wide acquisition contracts (GWACs) and multiple award schedules."
      },
      {
        type: "paragraph",
        content: "Each successful project builds your past performance record, making you more competitive for larger opportunities in the future. Document your performance meticulously, including customer satisfaction, on-time delivery, and quality metrics."
      },
      {
        type: "heading",
        content: "5. Invest in Capture and Proposal Management"
      },
      {
        type: "paragraph",
        content: "Winning federal contracts requires a disciplined approach to opportunity identification, capture planning, and proposal development. Develop a systematic process for evaluating opportunities, gathering intelligence, and creating compelling proposals that address the government's requirements and evaluation criteria."
      },
      {
        type: "paragraph",
        content: "Consider investing in training or consulting support to develop these capabilities within your organization. The return on investment can be substantial when you start winning competitive contracts."
      },
      {
        type: "callout",
        content: "Remember: The federal contracting process can be lengthy. Plan for 12-18 months from initial market entry to your first significant contract award."
      },
    ],
    relatedPosts: [
      {
        title: "Understanding Recent FAR Changes and Their Impact on Contractors",
        slug: "far-changes-impact",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      },
      {
        title: "How to Develop a Winning Capture Strategy",
        slug: "winning-capture-strategy",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      },
      {
        title: "Navigating the GSA Schedule Application Process",
        slug: "gsa-schedule-application",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      },
    ]
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageLayout
      title={post.title}
      subtitle={`Published on ${post.date} | ${post.category}`}
      backgroundImage={post.image}
    >
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog Link */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-8"
        >
          <Link 
            to="/resources/blog" 
            className="flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
        >
          {/* Featured Image */}
          <div className="aspect-w-16 aspect-h-9 relative">
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-64 md:h-96"
            />
            <div className="absolute top-0 right-0 bg-primary text-white text-sm font-bold px-4 py-2 m-4 rounded">
              {post.category}
            </div>
          </div>

          {/* Article Header */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{post.author}</h4>
                  <p className="text-sm text-muted-foreground">{post.authorTitle}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
            </div>

            {/* Social Sharing */}
            <div className="flex justify-end space-x-4 mb-6">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Bookmark className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Printer className="h-5 w-5" />
              </button>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {post.content.map((section, index) => {
                if (section.type === "heading") {
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>;
                } else if (section.type === "paragraph") {
                  return <p key={index} className="mb-6">{section.content}</p>;
                } else if (section.type === "callout") {
                  return (
                    <div key={index} className="bg-muted p-6 rounded-lg my-6 border-l-4 border-primary">
                      <p className="italic">{section.content}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center text-sm text-muted-foreground mr-2">
                  <Tag className="h-4 w-4 mr-1" /> Tags:
                </span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Federal Contracting</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Small Business</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Strategy</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Government</span>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Articles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedPost, index) => (
              <Link 
                key={index} 
                to={`/resources/${relatedPost.slug}`}
                className="group"
              >
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="object-cover w-full h-40 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default BlogPost;