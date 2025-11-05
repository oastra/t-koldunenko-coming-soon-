import Head from "next/head";
import Header from "@/components/common/Header";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>T. Koldunenko | Artist & Designer - Coming Soon</title>
        <meta
          name="description"
          content="Artist, designer, and creative visionary based in Sydney. Portfolio website coming soon. Available for commissions, collaborations, and consultations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="T. Koldunenko | Artist & Designer" />
        <meta
          property="og:description"
          content="Artist and designer based in Sydney. Creating visual narratives through exhibitions, publications, and collaborative work."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="T. Koldunenko | Artist & Designer"
        />
        <meta
          name="twitter:description"
          content="Artist and designer based in Sydney. Portfolio coming soon."
        />

        {/* Additional SEO */}
        <meta
          name="keywords"
          content="artist Sydney, designer Sydney, contemporary art, visual artist, creative design, exhibitions, art commissions, collaborative art"
        />
        <meta name="author" content="T. Koldunenko" />
        <meta name="theme-color" content="#3e6947" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>

      <Header />

      <main>
        <HeroSection />
      </main>

      <Footer />
    </>
  );
}
