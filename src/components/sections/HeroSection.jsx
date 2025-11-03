import EnquiryForm from "../form/EnquiryForm";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center px-6 py-12 lg:py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Hero Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Illustration */}
          <div className="mb-6 lg:mb-8">
            <img
              src="/images/women-in-tech.png"
              alt="Coming Soon"
              className="max-w-sm mx-auto lg:mx-0 w-full"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black/70 mb-6">
            Coming Soon
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4 lg:mb-6">
            UKRROFING PTY LTD
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-black max-w-2xl mx-auto lg:mx-0 mb-6 lg:mb-8 leading-relaxed">
            Professional roofing services in Sydney. While this site is under
            construction, we're available for{" "}
            <strong>free consultations</strong> and ready to help protect your
            home with quality workmanship. Let's connect!
          </p>

          {/* Or Call Directly */}
          <div className="mb-6 lg:mb-0">
            <p className="text-black mb-2 text-sm md:text-base">
              Or call us directly:
            </p>

            <a
              href="tel:+61477868730"
              className="text-xl md:text-2xl font-bold text-black hover:underline inline-block"
            >
              0477 868 7300
            </a>
          </div>
        </div>

        {/* Right Side - Enquiry Form */}
        <div className="order-1 lg:order-2">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
