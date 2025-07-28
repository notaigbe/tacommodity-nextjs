import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "./style.css"
// import "./main.js"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'NASUS Integration Limited | Engineering, Procurement & Logistics Experts in Nigeria',
  description:
    'NASUS Integration Limited delivers professional engineering, procurement, logistics, and project management solutions across Nigeria. Trusted by oil & gas companies, government agencies, and private organizations.',
  keywords: [
    'NASUS Integration Limited',
    'Engineering Services Nigeria',
    'Logistics Company Port Harcourt',
    'Procurement Services Nigeria',
    'Oil and Gas Support',
    'Infrastructure Projects Nigeria',
    'Civil Engineering Nigeria',
    'Construction Services Port Harcourt',
    'Haulage and Equipment Leasing',
    'Borehole and Water Treatment Nigeria'
  ],
   icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://tacommodity-nextjs.vercel.app/nasus-integration',
    title: 'NASUS Integration Limited',
    description:
      'Expert solutions in engineering, procurement, and logistics for infrastructure and oil & gas sectors in Nigeria.',
    siteName: 'NASUS Integration Limited',
    locale: 'en_NG',
    images: [
      {
        url: 'https://tacommodity-nextjs.vercel.app/assets/nasus-integration/img/nasus-integration logo.jpg', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'NASUS Integration Limited',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASUS Integration Limited',
    description: 'Engineering. Procurement. Logistics. Project Excellence.',
    site: '', // Replace if you have a Twitter handle
    images: ['https://tacommodity-nextjs.vercel.app/assets/nasus-integration/img/nasus-integration logo.jpg'] // Same as above
  },
  authors: [{ name: 'NASUS Integration Limited', url: 'https://tacommodity-nextjs.vercel.app/nasus-integration' }],
  creator: 'Gnotable Technologies',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: 'https://tacommodity-nextjs.vercel.app/nasus-integration',
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        
        <title>NASUS Integration Limited | Engineering, Procurement & Logistics Experts in Nigeria</title>
        <meta content="NASUS Integration Limited helps businesses in Nigeria optimize their operations through expert engineering, procurement, and logistics solutions." name="description" />
        <meta content="engineering, procurement, logistics, project management, supply chain, infrastructure, oil and gas, Nigeria" name="keywords" />
        <meta name="author" content="NASUS Integration Limited" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="NASUS Integration Limited - Engineering, Procurement & Logistics Experts in Nigeria" />
        <meta property="og:description" content="Helping businesses in Nigeria optimize their operations through expert engineering, procurement, and logistics solutions." />
        <meta property="og:image" content="https://tacommodity-nextjs.vercel.app/assets/nasus-integration/img/logo.png" />
        <meta property="og:url" content="https://tacommodity-nextjs.vercel.app/nasus-integration" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NASUS Integration Limited" />
        <meta name="twitter:description" content="Connecting businesses in Nigeria with expert engineering, procurement, and logistics solutions." />
        <meta name="twitter:image" content="https://tacommodity-nextjs.vercel.app/assets/nasus-integration/img/logo.png" />
        <link href="/favicon.ico" rel="icon" />
        <link href="https://tacommodity-nextjs.vercel.app/assets/nasus-integration/img/nasus-integration-logo.png" rel="apple-touch-icon" />


      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
