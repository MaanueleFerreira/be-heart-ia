const InputTypeNumber = ({ label, name, value, onChange, placeholder }) => {
    return (
        <div className="flex flex-col gap-2">
            <label> 
                {label}
            </label>
            <input
                type="number"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                required
            />
        </div>
    )
}
export default InputTypeNumber