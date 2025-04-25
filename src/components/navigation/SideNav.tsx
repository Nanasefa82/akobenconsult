import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Navigation items with their corresponding section IDs
  const navItems: NavItem[] = [
    {
      id: 'hero',
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    {
      id: 'services',
      label: 'Capabilities',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2H2v10h10V2Z"></path>
          <path d="M22 12h-4v10h4V12Z"></path>
          <path d="M14 18h-4v4h4v-4Z"></path>
          <path d="M14 8h-2v6h2V8Z"></path>
          <path d="M22 2h-8v6h8V2Z"></path>
        </svg>
      ),
    },
    {
      id: 'stats',
      label: 'Performance',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 21H3"></path>
          <path d="M21 9V3h-6"></path>
          <path d="m15 9 6-6"></path>
          <path d="M6 9v12"></path>
          <path d="M12 12v9"></path>
          <path d="M18 14v7"></path>
        </svg>
      ),
    },
    {
      id: 'testimonials',
      label: 'Testimonials',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      ),
    },
    {
      id: 'cta',
      label: 'Contact',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
  ];

  // Handle scroll events to determine active section and nav visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide the navigation when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && isVisible) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && !isVisible) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      
      // Determine which section is currently in view
      const sections = navItems.map(item => document.getElementById(item.id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isVisible, navItems]);

  // Scroll to the selected section with smooth animation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <motion.div
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0.3, 
        x: isVisible ? 0 : 10,
        scale: isVisible ? 1 : 0.9
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsVisible(true)}
    >
      <div className="flex flex-col items-center space-y-6 bg-black/20 backdrop-blur-md p-3 rounded-full">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="relative group"
            onClick={() => scrollToSection(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.div
              className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-primary text-black'
                  : 'bg-white/10 text-white hover:bg-white/30'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.div>
            
            {/* Label that appears only on hover */}
            <motion.div
              className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ 
                opacity: hoveredItem === item.id ? 1 : 0, 
                x: hoveredItem === item.id ? 0 : 10,
                scale: hoveredItem === item.id ? 1 : 0.8
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-black/80 text-white px-3 py-1 rounded-md text-sm font-medium">
                {item.label}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SideNav;
