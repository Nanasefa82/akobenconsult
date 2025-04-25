import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const goldTextStyle = {
  color: "#D4AF37",
  fontWeight: "bold",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.5)",
  WebkitTextStroke: "0.5px #8B7500",
  letterSpacing: "1px",
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="presidential-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">
              <span style={goldTextStyle}>AKOBEN</span> CONSULTING
            </h3>
            <p className="mb-4">
              Setting the gold standard in digital transformation, healthcare
              innovation, and executive leadership.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-playfair">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about/mission-vision"
                  className="hover:text-primary transition-colors"
                >
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/about/federal-background"
                  className="hover:text-primary transition-colors"
                >
                  Federal Background
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-playfair">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/acquisition-strategy-capture"
                  className="hover:text-primary transition-colors"
                >
                  Acquisition Strategy & Capture Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/proposal-bidding"
                  className="hover:text-primary transition-colors"
                >
                  Proposal and Bidding
                </Link>
              </li>
              <li>
                <Link
                  to="/services/compliance-regulatory"
                  className="hover:text-primary transition-colors"
                >
                  Compliance & Regulatory Guidance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/great-content"
                  className="hover:text-primary transition-colors"
                >
                  Great Content
                </Link>
              </li>
              <li>
                <Link
                  to="/services/negotiations-advisory"
                  className="hover:text-primary transition-colors"
                >
                  Negotiations & Contract Advisory
                </Link>
              </li>
              <li>
                <Link
                  to="/services/contract-admin-lifecycle"
                  className="hover:text-primary transition-colors"
                >
                  Contract Administration & Lifecycle Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-playfair">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-primary mr-2 mt-1 flex-shrink-0"
                />
                <span>1600 Presidential Avenue, Washington DC, 20500</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-2 flex-shrink-0" />
                <span>+1 (202) 555-0123</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-2 flex-shrink-0" />
                <span>info@akobenconsulting.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Akoben Consulting. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="hover:text-primary transition-colors"
              >
                Sitemap
              </Link>
              <Link
                to="/admin/login"
                className="hover:text-primary transition-colors"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
