import NavLinks from "./NavLinks";

const MobileMenu = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white/70 backdrop-blur-md z-40 px-6 py-8 flex flex-col items-center space-y-8 rounded-b-2xl shadow-lg">
      <NavLinks onClick={onClose} className="text-lg" />
      <a
        href="#contact"
        className="bg-mainBlue text-white text-base px-6 py-3 rounded-full font-display"
        onClick={onClose}
      >
        Get a Free Quote
      </a>
    </div>
  );
};

export default MobileMenu;
