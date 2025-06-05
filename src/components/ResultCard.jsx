const getRiskColor = (risk) => {
  switch (risk.toLowerCase()) {
    case "low":
      return "bg-green-100 text-green-800 border-green-300";
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "high":
      return "bg-red-100 text-red-800 border-red-300";
    default:
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
};

const ResultCard = ({ risk, accuracy }) => {
  const colorClass = getRiskColor(risk);

  return (
    <div className={`border rounded-lg p-6 mt-10 text-center ${colorClass}`}>
      <h3 className="text-2xl font-bold mb-2">Prediction Result</h3>
      <p className="text-lg mb-1">
        <strong>Your risk is:</strong> {risk}
      </p>
      <p className="text-sm">
        <strong>Model accuracy:</strong> {accuracy}%
      </p>
    </div>
  );
};

export default ResultCard;
