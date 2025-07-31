'use client'; // This is a client component
import React from 'react';
import dynamic from 'next/dynamic';

// Import components that don't use browser APIs
import Footer from '@/src/app/components/nasus-integration/footer';

// Dynamically import components that might use browser APIs
const Header = dynamic(() => import('@/src/app/components/nasus-integration/header'), {
  ssr: false,
  loading: () => <div style={{ height: '80px', background: 'rgba(13, 24, 22, 1)' }}></div>
});

const AboutPage = dynamic(() => import('@/src/app/components/nasus-integration/aboutpage'), {
  ssr: false
});

const Breadcrumbs = dynamic(() => import('@/src/app/components/nasus-integration/breadcrumbs'), {
  ssr: false
});

export default function About() {
  return (
    <>
      <Header landing={false} />
      <Breadcrumbs page="About"/>
      <AboutPage /> 
      <Footer />
    </>
  );
}