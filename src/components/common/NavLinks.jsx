import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Roofing Services" },
  { href: "#reviews", label: "Our Reviews" },
  { href: "#contact", label: "Contact" },
];

const NavLinks = ({ onClick = () => {}, className = "" }) => {
  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onClick}
          className={`font-text ${className} hover:underline`}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
