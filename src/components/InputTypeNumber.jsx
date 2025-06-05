const InputTypeNumber = ({ label, name, value, onChange, placeholder }) => {

    const handleChange = (e) => {
        const inputValue = e.target.value;

        if (isNaN(inputValue)) return;

        const numericValue = Number(inputValue);
        onChange({target: {name, value: numericValue}});
    }


    return (
        <div className="flex flex-col gap-2">
            <label> 
                {label}
            </label>
            <input
                type="number"
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                required
            />
        </div>
    )
}
export default InputTypeNumber