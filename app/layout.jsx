import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Sriram Chaitanya – Full Stack Web Developer | MERN & App Developer",
  description:
    "Sriram Chaitanya is a Full Stack Web Developer from Hyderabad, India, and a 2025 Computer Science graduate from Vellore Institute of Technology. He builds fast, clean, and responsive web apps using React, Node.js, Express, MongoDB, NestJS, and TypeScript and learning Flutter.",
  keywords: [
    "Sriram",
    "Sriram Chaitanya",
    "thesriramchaitanya",
    "Sriram Chaitanya web developer",
    "Sriram Chaitanya full stack developer",
    "Sriram Chaitanya MERN developer",
    "Sriram Chaitanya NestJS",
    "Sriram Chaitanya JavaScript",
    "Sriram Chaitanya React",
    "Sriram Chaitanya Flutter",
    "Sriram Chaitanya portfolio",
    "Full Stack Developer India",
    "MERN Stack Developer Hyderabad",
    "JavaScript Developer India",
    "React Node Developer",
  ],
  authors: [
    { name: "Sriram Chaitanya" },
    { name: "Sriram Chaitanya", url: "https://thesriramchaitanya.in" },
  ],
  creator: "Sriram Chaitanya",
  publisher: "Sriram Chaitanya",
  category: "Technology",
  metadataBase: new URL("https://thesriramchaitanya.in"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sriram Chaitanya – Full Stack Developer | React, Node, MongoDB, Flutter, DJango",
    description:
      "Explore the portfolio of Sriram Chaitanya, a Full Stack Developer skilled in MERN stack, TypeScript, Java, and more. Based in Hyderabad, India – building modern web apps with React, Node.js, and MongoDB.",
    url: "https://thesriramchaitanya.in",
    siteName: "Sriram Chaitanya",
    images: [
      {
        url: "/sriramchaitanya/sriram.jpg",
        width: 600,
        height: 600,
      },
      {
        url: "/sriramchaitanya/sriram.jpg",
        width: 500,
        height: 600,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sriram Chaitanya – Full Stack Developer | React & Node.js & Flutter",
    description:
      "Sriram Chaitanya is a Full Stack Web Developer from Hyderabad, India. Skilled in JavaScript, React, Node.js, MongoDB, NestJS, and more. Visit portfolio to know more.",
    siteId: "",
    creator: "@thesriramchaitanya",
    creatorId: "@thesriramchaitanya",
    images: ["/sriramchaitanya/sriram.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    // other: {
    //   me: ['my-email', 'my-link'],
    // },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
