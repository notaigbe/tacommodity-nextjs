'use client'; 
import React from 'react';
import dynamic from 'next/dynamic';

// Import components that don't use browser APIs normally
import Footer from '@/src/app/components/nasus-integration/footer';

// Dynamically import components that might use browser APIs
const Header = dynamic(() => import('@/src/app/components/nasus-integration/header'), {
  ssr: false,
  loading: () => <div style={{ height: '120px' }}></div> // placeholder
});

const Hero = dynamic(() => import('@/src/app/components/nasus-integration/hero'), {
  ssr: false
});

const About = dynamic(() => import('@/src/app/components/nasus-integration/about'), {
  ssr: false
});

const Services = dynamic(() => import('@/src/app/components/nasus-integration/services'), {
  ssr: false
});

const Counts = dynamic(() => import('@/src/app/components/nasus-integration/counts'), {
  ssr: false
});

const Cta = dynamic(() => import('@/src/app/components/nasus-integration/cta'), {
  ssr: false
});

const Portfolio = dynamic(() => import('@/src/app/components/nasus-integration/portfolio'), {
  ssr: false
});

const Testimonials = dynamic(() => import('@/src/app/components/nasus-integration/testimonials'), {
  ssr: false
});

const Team = dynamic(() => import('@/src/app/components/nasus-integration/team'), {
  ssr: false
});

const Contact = dynamic(() => import('@/src/app/components/nasus-integration/contact'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <Header landing={true} />
      <Hero />
      <main id="main" className='main'>
        <About />
        <Services />
        <Counts />
        <Cta />
        <Portfolio />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}