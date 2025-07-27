import React from 'react';
import Header from '@/src/app/components/nasus-integration/header';
import Hero from '@/src/app/components/nasus-integration/hero';
import About from '@/src/app/components/nasus-integration/about';
import Services from '@/src/app/components/nasus-integration/services';
import Counts from '@/src/app/components/nasus-integration/counts';
import Cta from '@/src/app/components/nasus-integration/cta';
import Portfolio from '@/src/app/components/nasus-integration/portfolio';
import Testimonials from '@/src/app/components/nasus-integration/testimonials';
import Team from '@/src/app/components/nasus-integration/team';
import Contact from '@/src/app/components/nasus-integration/contact';
import Footer from '@/src/app/components/nasus-integration/footer';
// import './style.css'
// import '@/app/page.css'


export default function Home() {
  return (
    <>
      <Header />
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