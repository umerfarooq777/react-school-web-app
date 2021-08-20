import React, { useState, useEffect } from 'react';
import Form from './Form';
import FormForm from './FormForm';

const retrieveData = localStorage.getItem('Forms') ? JSON.parse(localStorage.getItem('Forms')) : [];

const FormList = () => {

    const [forms, setForms] = useState(retrieveData);

    const addForm = (form) => {
        if (!form.text || /^\s*$/.test(form.text)) {
            return
        }
        const newForms = [form, ...forms];
        setForms(newForms);

        console.log(form, ...forms);
    };

    const updateForm = (formId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setForms(prev => prev.map(item => item.id === formId ? newValue : item))
    };

    const removeForm = (id) => {
        if (window.confirm('Are you sure you want to delete this entry?')) {

            const removeArr = [...forms].filter(form => form.id !== id);
            setForms(removeArr);

        } else {
            return false;
        };
    };

    const deleteAllForms = () => {
        if (window.confirm('Are you sure you want to delete all of your entries?')) {
            setForms([]);

        } else {
            return false;
        };
    };

    const completeForm = (id) => {
        let updatedForms = forms.map(form => {
            if (form.id === id) {
                form.isComplete = !form.isComplete
            }
            return form;
        });
        setForms(updatedForms);
    };

    useEffect(() => {

        localStorage.setItem('Forms', JSON.stringify(forms));

    }, [forms])

    return (
        <div className='col-lg-6'>
            <FormForm
                onSubmit={addForm}
                onClick={deleteAllForms}
            />
            <Form
                forms={forms}
                completeForm={completeForm}
                removeForm={removeForm}
                updateForm={updateForm}
            />
        </div>
    );
}

export default FormList