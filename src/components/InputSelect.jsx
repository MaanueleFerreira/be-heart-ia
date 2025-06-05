const InputSelect = ({ label, name, value1, value2, onChange, choice1, choice2 }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name}>
                {label}
            </label>
            <select
                name={name}
                onChange={onChange}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C1121F]"
                required
            >
                <option value="">Selecione</option>
                <option value={value1}>{choice1}</option>
                <option value={value2}>{choice2}</option>
            </select>
        </div>
    )
}
export default InputSelect