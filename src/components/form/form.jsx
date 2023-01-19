import './form.css'
import { Name } from './nameComponent/name';
import { Email } from './emailComponent/email';
import { Date } from './dateComponent/date';
import { Select } from './selectComponent/select';
import { Checkbox } from './checkboxComponent/checkbox';
import { Button } from './buttonComponent/button';
import { useState, useEffect } from 'react';
import { ShowDataButton } from '../showDataButton/showDataButton';

export const Form = ({ data, getData, postData }) => {
    const [inputValues, setInputValues] = useState({})
    const [formDisplay, setFormDisplay] = useState(true)
    const [showDataButtonDisplay, setShowDataButtonDisplay] = useState(false)

    const handleInputs = (e) => {
        const { name, value } = e.target
        setInputValues({ ...inputValues, [name]: value })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        postData(inputValues)
        setFormDisplay(false)
        setShowDataButtonDisplay(true)
    }

    return (
        <div>
            <form method='post' action='/userInformation' className={`${formDisplay ? 'form' : 'displayNone'}`}
                onSubmit={handleSubmit}>
                <Name nameData={data[0]} onChange={handleInputs} />
                <Email emailData={data[1]} onChange={handleInputs} />
                <Date dateData={data[2]} onChange={handleInputs} />
                <Select selectData={data[3]} onChange={handleInputs} />
                <Checkbox checkboxData={data[4]} onChange={handleInputs} />
                <Button buttonData={data[5]} />
            </form>
            {showDataButtonDisplay &&
                <ShowDataButton getData={getData} />}
        </div>
    );
};