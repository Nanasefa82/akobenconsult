import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle, Calendar, MessageSquare } from "lucide-react";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/footer/Footer";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send message to API
      const response = await axios.post(
        import.meta.env.PROD 
          ? "https://aquabconsult-api.onrender.com/api/messages"
          : "http://localhost:3000/api/messages",
        formData
      );

      // Show success toast
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. We'll be in touch soon!",
        variant: "default",
        action: (
          <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
        ),
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <NavBar />
      <div className="pt-32 pb-16 bg-muted">
        <div className="presidential-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <motion.h1 variants={itemVariants} className="executive-heading">
              Contact <span className="gold-gradient">Akoben Consulting</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg">
              Reach out to our world-class team to discuss how we can deliver
              executive-level solutions for your organization.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 font-playfair">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 border"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`presidential-button rounded flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Sending...</span>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-secondary text-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 font-playfair">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p>1600 Presidential Avenue</p>
                    <p>Washington DC, 20500</p>
                    <p>United States</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p>+1 (202) 555-0123</p>
                    <p>+1 (202) 555-0124</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={24} className="text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p>info@Akobenadvisoryservices.com</p>
                    <p>support@Akobenadvisoryservices.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-bold mb-3">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold mb-3">Schedule a Consultation</h3>
                <p className="mb-4">Book a time with our experts to discuss your federal contracting needs.</p>
                <a 
                  href="https://calendly.com/akobenconsulting/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Calendar size={18} className="mr-2" /> Schedule Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
