import Image from "next/image";
import EnquiryForm from "../form/EnquiryForm";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-10 via-white to-badge-mint flex items-center justify-center px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop py-12 lg:py-20">
      {/* 1 col by default; 2 cols only on XL and up */}
      <div className="max-w-7xl w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16">
        {/* LEFT: portrait + headings + text + email (always first on mobile/tablet) */}
        <div className="text-center xl:text-left">
          {/* Portrait */}
          <div className="relative mb-8 xl:mb-12">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className=" bg-gradient-to-br mt-3 from-primary-20 to-primary-40 opacity-20 blur-3xl" />
            </div>
            <div className="relative mx-auto xl:mx-0 w-80 h-80 mt-[80px] lg:mt-0 sm:w-100 sm:h-100 rounded-full overflow-hidden shadow-md">
              <Image
                src="/images/tetiana-koldunenko-artist-designer-portrait.webp"
                alt="Tetiana Koldunenko - Artist & Designer"
                fill
                sizes="224px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Headings */}
          <h1 className="font-display text-4xl md:text-5xl font-normal text-grey-100 mb-3 tracking-wider">
            Coming Soon
          </h1>
          <h2 className="font-text text-xl md:text-2xl font-light text-primary-80 mb-6">
            Tetiana Koldunenko
          </h2>

          {/* Description */}
          <div className="max-w-2xl mx-auto xl:mx-0 mb-8">
            <p className="font-text text-base md:text-lg text-grey-80 leading-relaxed mb-4">
              I’m thrilled to announce that my website is getting a major
              facelift — a fresh new look is on the way! Very soon, it will be
              back in full capacity with updated galleries, news, and more about
              my artistic journey. In the meantime, feel free to reach out — I’d
              love to hear from you:
            </p>
            <p className="font-text text-sm md:text-base text-grey-60 leading-relaxed">
              While the full portfolio is under construction, I'm available for
              <strong className="text-primary-80"> commissions</strong>,
              <strong className="text-primary-80"> collaborations</strong>, and
              <strong className="text-primary-80"> consultations</strong>. Let's
              create something beautiful together.
            </p>
          </div>

          {/* “Reach out directly” stays under text on all sizes */}
          <div className="space-y-3">
            <p className="font-text text-grey-80 text-sm md:text-base">
              Reach out directly:
            </p>
            <a
              href="mailto:t.koldunenko@gmail.com"
              className="font-text text-base md:text-lg font-medium text-primary-60 hover:text-primary-80 transition-colors inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              t.koldunenko@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT: form — stacks BELOW on mobile/tablet, moves RIGHT at xl+ */}
        <div className="w-full xl:w-auto">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
