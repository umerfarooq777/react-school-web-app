import React, { useState, useEffect } from 'react';
import FormForm from './FormForm';

const retrieveData = localStorage.getItem('Forms') ? JSON.parse(localStorage.getItem('Forms')) : [];

const FormList = () => {

    const [forms, setForms] = useState(retrieveData);

    const addForm = (form) => {
        if (!form.fName || /^\s*$/.test(form.fName)) {
            return
        }
        const newForms = [form, ...forms];
        setForms(newForms);

        console.log(form, ...forms);
    };

    useEffect(() => {

        localStorage.setItem('Forms', JSON.stringify(forms));

    }, [forms])

    return (
        <div className='col-lg-6'>
            <FormForm
                onSubmit={addForm}
            />
        </div>
    );
}

export default FormList