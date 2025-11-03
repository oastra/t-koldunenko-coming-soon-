const Footer = () => {
  return (
    <footer className="bg-black/90 text-white text-sm py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Business Info */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3">Ukrrofing </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-90">
            <p>📍 Sylvania, Sydney, NSW 2224</p>
            <p>
              📧{" "}
              <a
                href="mailto:info@ukrrofing.com.au"
                className="hover:underline"
              >
                ukrrofing@gmail.com
              </a>
            </p>
            <p>
              📞{" "}
              <a href="tel:+61404631472" className="hover:underline">
                0404 631 472
              </a>
            </p>
          </div>
          <p className="mt-2 text-xs opacity-75">
            Licensed Roof Plumber | NSW Contractor Licence: 459989C
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-4"></div>

        {/* Credits & Copyright */}
        <div className="flex flex-wrap justify-between items-center gap-4 text-xs opacity-80">
          <p>© {new Date().getFullYear()} Ukrrofing. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://olhachernysh.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-medium"
            >
              Olha Chernysh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
