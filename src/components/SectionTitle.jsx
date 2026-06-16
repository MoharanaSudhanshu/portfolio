function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-wider">
        {title}
      </h2>

      <div className="w-32 h-1 bg-yellow-500 mx-auto mt-3"></div>

      <p className="text-gray-400 mt-6 text-lg">{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
