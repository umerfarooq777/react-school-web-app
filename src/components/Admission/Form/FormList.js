import React, { useState, useEffect } from 'react';
import FormForm from './FormForm';

const retrieveData = localStorage.getItem('Forms') ? JSON.parse(localStorage.getItem('Forms')) : [];

const FormList = () => {

    const [forms, setForms] = useState(retrieveData);

    const addForm = (form) => {
        if (!form.fName || !form.mName || !form.lName || !form.birthday || !form.contact || !form.email || !form.address || !form.program || /^\s*$/.test(form.fName) || /^\s*$/.test(form.mName) || /^\s*$/.test(form.lName) || /^\s*$/.test(form.birthday) || /^\s*$/.test(form.contact) || /^\s*$/.test(form.email) || /^\s*$/.test(form.address) || /^\s*$/.test(form.address) || /^\s*$/.test(form.program)) {
            return
        }
        const newForms = [form, ...forms];
        setForms(newForms);
    };

    useEffect(() => {

        localStorage.setItem('Forms', JSON.stringify(forms));
    }, [forms])

    return (
        <div className='col-lg-6'>
            <FormForm
                onSubmit={addForm}
            />
            {console.log(forms)}
        </div>
    );
}

export default FormList