import React, { useEffect } from 'react';
import HeroCarousel from '../components/hero/HeroCarousel';
import NavBar from '../components/navigation/NavBar';
import SideNav from '../components/navigation/SideNav';
import ServicesSection from '../components/services/ServicesSection';
import StatsSection from '../components/stats/StatsSection';
import TestimonialsMarquee from '../components/testimonials/TestimonialsMarquee';
import CallToAction from '../components/cta/CallToAction';
import Footer from '../components/footer/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <SideNav />
      <section id="hero">
        <HeroCarousel />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="stats">
        <StatsSection />
      </section>
      <section id="testimonials">
        <TestimonialsMarquee />
      </section>
      <section id="cta">
        <CallToAction />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
