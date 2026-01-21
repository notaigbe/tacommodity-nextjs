import { Geist, Geist_Mono, Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure global bootstrap
import "./styles/style.css"; // Your custom styles

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"] });
const opensans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });

export const metadata = {
  title: {
    default: "TA Commodity Producers Co Nig Ltd",
    template: "%s | TA Commodity Group",
  },
  description: "Connecting Smallholder Farmers to Global Markets through sustainable and fair trade practices.",
  keywords: ["smallholder farmers", "agricultural commodity trading", "exporting Nigerian produce", "BFG Capital", "PHAGRO"],
  authors: [{ name: "TA Commodity Producers Co Nig Ltd" }],
  robots: "index, follow",
  icons: {
    icon: "/assets/img/ta_commodity_logo.png",
    apple: "/assets/img/ta_logo.png",
  },
  openGraph: {
    title: "TA Commodity Producers Co Nig Ltd",
    description: "Helping smallholder farmers in Nigeria access global markets.",
    url: "https://tacommodity.com",
    siteName: "TA Commodity",
    images: [{ url: "https://tacommodity.com/assets/img/ta_commodity_logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TA Commodity Producers Co Nig Ltd",
    description: "Connecting smallholder farmers with buyers in global markets.",
    images: ["https://tacommodity.com/assets/img/ta_commodity_logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${raleway.variable} 
          ${opensans.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}