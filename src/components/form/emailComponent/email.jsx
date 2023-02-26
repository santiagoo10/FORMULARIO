import './../form.css'
import { useState } from 'react';

export const Email = ({ emailData, onChange }) => {
    const [errorMsg, setErrorMsg] = useState(null)

    const emailValidation = (e) => {
        const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const errorMessage = (!emailReg.test(e.target.value)) ? 'Formato de email invalido' : ''
        setErrorMsg(errorMessage)
     
    };

    return (
        <div className='inputContainer'>
            <label>{emailData.label}</label>
            <input
                type={emailData.type}
                name={emailData.name}
                required={emailData.required}
                placeholder={emailData.label}
                onInput={emailValidation}
                onChange={onChange} />
            <span>{errorMsg}</span>
        </div>
    )
}