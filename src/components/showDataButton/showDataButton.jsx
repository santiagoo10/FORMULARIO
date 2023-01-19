import './showDataButton.css'
import { Link } from 'react-router-dom'

export const ShowDataButton = ({ getData }) => {

    return (
        <div>
            <Link to='/userInformation'>
                <button onClick={getData}
                    className='button' type="button">
                    Ver datos enviados
                </button>
            </Link>
        </div>
    )
}