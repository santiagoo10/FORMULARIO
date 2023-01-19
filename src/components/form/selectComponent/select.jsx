import './../form.css'

export const Select = ({ selectData, onChange }) => {

    return (
        <div className='inputContainer'>
            <label>{selectData.label}</label>
            <select
                type={selectData.type}
                name={selectData.name}
                required={selectData.required}
                onChange={onChange}>
                <option>{selectData.label}</option>
                {selectData.options.map((option, i) => (
                    <option
                        key={i} value={option.value} >
                        {option.label}
                    </option>))}
            </select>
        </div >
    )
}