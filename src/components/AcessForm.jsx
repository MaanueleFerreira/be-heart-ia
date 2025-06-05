import { useState } from "react";
import ResultCard from "./ResultCard";
import InputTypeNumber from "./InputTypeNumber";

const initialState = {
  age: "",
  sex: "",
  cp: "",
  trtbps: "",
  chol: "",
  fbs: "",
  restecg: "",
  thalachh: "",
  exng: "",
  oldpeak: "",
  slp: "",
  caa: "",
  thall: "",
};

const AssessForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const numericSelects = ['sex', 'cp', 'fbs', 'restecg', 'exng', 'thall'];

    const finalValue = numericSelects.includes(name) ? Number(value) : value;

    setFormData((prev) => ({ ...prev, [name]: finalValue }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(formData)) {
      if (value === '') {
        alert(`O campo "${key}" está vazio.`);
        return;
      }

      if (value <= 0) {
        alert(`O campo "${key}" deve ser maior que zero.`);
        return;
      }
    }


    // Simulação do retorno da IA — substitua depois por fetch/axios
    const simulatedResult = {
      risk: "High",
      accuracy: 89.4,
    };

    setResult(simulatedResult);
  };

  return (
    <section id="form" className="bg-slate-50 py-20 px-10 md:px-40 md:mt-20 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#003049] mb-2">Assess Your Cardiac Risk</h2>
        <p className="text-gray-600">Fill in the information below and get your result instantly.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <InputTypeNumber label="Age" name="age" value={formData.age} onChange={handleChange} placeholder="Ex:30" />

        {/* select sex */}
        <div className="flex flex-col gap-2">
          <label htmlFor="sex">Sex</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
          >
            <option value="">Select an option</option>
            <option value="0">Feminine</option>
            <option value="1">Masculine</option>
          </select>
        </div>

        {/* select cp */}
        <div className="flex flex-col gap-2">
          <label htmlFor="cp">Chest Pain</label>
          <select
            name="cp"
            value={formData.cp}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
          >
            <option value="">Select an option</option>
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="13">4</option>
          </select>
        </div>

        <InputTypeNumber label="Resting Blood Pressure" name="trtbps" value={formData.trtbps} onChange={handleChange} placeholder="Ex:140" />

        <InputTypeNumber label="Serum Cholesterol" name="chol" value={formData.chol} onChange={handleChange} placeholder="Ex:140" />

        {/* select fbs */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fbs">Fasting Bloog Sugar</label>
          <select
            name="fbs"
            value={formData.fbs}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
          >
            <option value="">Select an option</option>
            <option value="0">120 mg/dl or below</option>
            <option value="1">Above 120 mg/dl</option>
          </select>
        </div>

        {/* select restecg */}
        <div className="flex flex-col gap-2">
          <label htmlFor="restecg">Resting Electrocardiographic Results</label>
          <select
            name="restecg"
            value={formData.restecg}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
          >
            <option value="">Select an option</option>
            <option value="0"> 0 </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
          </select>
        </div>

        <InputTypeNumber label="Maximum Heart Rate Achieved" name="thalachh" value={formData.thalachh} onChange={handleChange} placeholder="Ex:140" />

        {/* select exng */}
        <div className="flex flex-col gap-2">
          <label htmlFor="exng">Exercise Induced Angina</label>
          <select
            name="exng"
            value={formData.exng}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
          >
            <option value="">Select an option</option>
            <option value="0"> No </option>
            <option value="1"> Yes </option>
          </select>
        </div>

        <InputTypeNumber label="Oldpeak" name="oldpeak" value={formData.oldpeak} onChange={handleChange} placeholder="Ex:0.0" />

        <InputTypeNumber label="Slope" name="slp" value={formData.slp} onChange={handleChange} placeholder="Ex:140" />

        <InputTypeNumber label="Number Of Majar Vessels Colored Bby Fluoroscopy" name="caa" value={formData.caa} onChange={handleChange} placeholder="Ex:140" />

        {/* select thall - incompleto */}
        <div className="flex flex-col gap-2">
          <label htmlFor="thall">Thalassemia </label>
          <select
            name="thall"
            value={formData.thall}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
          >
            <option value="">Select an option</option>
            <option value="0"> Normal </option>
            <option value="1"> Fixed </option>
            <option value="2"> Reversible </option>
            <option value="3"> Falta esse </option>
          </select>
        </div>

        <div className="md:col-span-2 text-center mt-6">
          <button
            type="submit"
            className="bg-[#C1121F] text-white px-6 py-3 rounded hover:bg-[#a00f1a] transition"
          >
            Submit & Predict
          </button>
        </div>
      </form>


      {result && (
        <ResultCard risk={result.risk} accuracy={result.accuracy} />
      )}
    </section>
  );
};

export default AssessForm;
