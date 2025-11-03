const Button = ({ href, children, variant = "primary" }) => {
  const base =
    "inline-block text-sm px-6 py-3 rounded-full font-medium transition-colors duration-300";

  const variants = {
    primary: `${base} bg-mainBlue text-white hover:bg-opacity-90`,
    secondary: `${base} border border-mainBlue text-mainBlue hover:bg-mainBlue hover:text-white`,
  };

  return (
    <a href={href} className={variants[variant]}>
      {children}
    </a>
  );
};

export default Button;
