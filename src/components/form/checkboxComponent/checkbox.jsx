import './../form.css'

export const Checkbox = ({ checkboxData, onChange }) => {

    return (
        <div className='checkboxInputContainer'>
            <label>{checkboxData.label}</label>
            <input
                type={checkboxData.type}
                name={checkboxData.name}
                required={checkboxData.required}
                onChange={onChange} />
        </div>
    )
}



