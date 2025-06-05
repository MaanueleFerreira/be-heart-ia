const StepCard = ({ number, title, text }) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
      <div className="text-4xl font-bold text-[#C1121F] mb-4">{number}</div>
      <h3 className="text-xl font-semibold text-[#003049] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
};

export default StepCard;
