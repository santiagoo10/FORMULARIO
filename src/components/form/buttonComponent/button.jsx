import './../form.css'

export const Button = ({ buttonData }) => {

    return (
        <div className='inputContainer'>
            {/* Me tomé el atrevimiento de no 
            mostrar el label del botón enviár, dado 
            que como se muestra el texto en el mismo, 
            considero que sería repetitivo. */}

            {/* <label>{buttonData.label}</label> */}

            <button
                type={buttonData.type}
                required={buttonData.required}>
                {buttonData.label}
            </button>

        </div>
    )
}