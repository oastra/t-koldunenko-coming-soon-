import Head from "next/head";
import Header from "@/components/common/Header";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ukrrofing | Professional Roofing Services Sydney - Coming Soon
        </title>
        <meta
          name="description"
          content="Licensed roofing contractor in Sydney NSW. Expert roof plumbing, installation, repair and maintenance. Free consultations available. Contractor Licence: 459989C"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Social Media */}
        <meta
          property="og:title"
          content="Ukrrofing | Professional Roofing Services Sydney"
        />
        <meta
          property="og:description"
          content="Licensed roofing contractor in Sydney. Expert roof plumbing and installation services."
        />
        <meta property="og:type" content="website" />

        {/* Additional SEO */}
        <meta
          name="keywords"
          content="roofing Sydney, roof plumber, roof repair, roof installation, Sylvania roofing, NSW roofing contractor"
        />
        <meta name="author" content="Ukrrofing Pty Ltd" />

        {/* Favicon - Optional */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
