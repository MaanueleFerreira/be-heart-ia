import StepCard from "./StepCard";

const MissionSection = () => {
  return (
    <section id="how" className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We believe healthcare professionals deserve tools that support fast and accurate decision-making.
          BeHeart uses clinical data and artificial intelligence to help cardiologists and doctors evaluate heart disease risk with precision and speed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <StepCard
          number="1"
          title="Enter patient data"
          text="Add clinical information such as age, blood pressure, cholesterol and more."
        />
        <StepCard
          number="2"
          title="Our model analyzes"
          text="AI trained on real medical datasets evaluates the probability of heart disease."
        />
        <StepCard
          number="3"
          title="View the prediction"
          text="Instantly see if the model classifies the patient as low, medium or high risk."
        />
        <StepCard
          number="4"
          title="Support medical decision"
          text="Use the result to complement clinical diagnosis and determine next steps."
        />
      </div>
    </section>
  );
};

export default MissionSection;
