import './../form.css'

export const Date = ({ dateData, onChange }) => {

    return (
        <div className='inputContainer'>
            <label>{dateData.label}</label>
            <input
                type={dateData.type}
                name={dateData.name}
                required={dateData.required}
                onChange={onChange} />
        </div>
    )
}