const SectionWrapper = ({ id, children, className = "", bg = "" }) => {
  return (
    <section id={id} className={`${bg} w-full py-20 px-4 md:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
