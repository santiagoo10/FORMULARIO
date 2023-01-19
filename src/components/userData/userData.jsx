import './userData.css'

export const UserData = ({ userInformation }) => {

    return (
        <div className='container'>
            {userInformation.map((info) => (
                <ul className='ul' key={info.id}>
                    <li><strong>Nombre:</strong> {info.full_name}</li>
                    <li><strong>Email:</strong> {info.email}</li>
                    <li><strong>Fecha de nacimiento:</strong> {info.birth_date}</li>
                    <li><strong>Pais de origen:</strong> {info.country_of_origin}</li>
                </ul>
            ))}
        </div>
    )
}