import React from 'react';
import Header from '@/src/app/components/nasus-integration/header';
import AboutPage from '@/src/app/components/nasus-integration/aboutpage';
import Counts from '@/src/app/components/nasus-integration/counts';
import Cta from '@/src/app/components/nasus-integration/cta';
import Footer from '@/src/app/components/nasus-integration/footer';
import Breadcrumbs from '@/src/app/components/nasus-integration/breadcrumbs';
// import './style.css'
// import '@/app/page.css'


export default function Home() {
  return (
    <>
      {/* <Header landing={false} /> */}
        <Breadcrumbs page="About"/>
        <AboutPage /> 
  
		<Footer />
    </>
  );
}