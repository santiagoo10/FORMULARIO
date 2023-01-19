import './../form.css'
import { useState } from 'react';

export const Name = ({ nameData, onChange }) => {
    const [errorMsg, setErrorMsg] = useState(null)

    const nameValidation = (e) => {
        const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

        if (!regName.test(e.target.value)) {
            setErrorMsg('Formato de nombre invalido')
        } else {
            setErrorMsg('')
        }
    };

    return (
        <div className="inputContainer">
            <label>{nameData.label}</label>
            <input
                type={nameData.type}
                name={nameData.name}
                required={nameData.required}
                placeholder={nameData.label}
                onInput={nameValidation}
                onChange={onChange} />
            <span>{errorMsg}</span>
        </div>
    )
}