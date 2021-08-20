import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import FormForm from './FormForm';

const Form = ({ forms, completeForm, removeForm, updateForm }) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateForm(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    };

    if (edit.id) {
        return <FormForm edit={edit} onSubmit={submitUpdate} />
    };

    return (

        <div className="m-2 mb-4 border-rounded">

            {forms.map((form) => (
                <div
                    className={form.isComplete ? 'form-row complete' : 'form-row'}
                    key={form.id}
                >
                    <div className='d-flex col-12 p-2 justify-content-between'>
                        <div onClick={() => completeForm(form.id)}>
                            {form.date}
                        </div>

                        <div className="icons">
                            <AiFillCloseCircle
                                onClick={() => removeForm(form.id)}
                                className="delete-icon"
                            />
                            <TiEdit
                                onClick={() => setEdit({ id: form.id, text: form.text, date: form.date })}
                                className="edit-icon"
                            />
                        </div>
                    </div>

                    <pre onClick={() => completeForm(form.id)} className='col-12 p-2'>
                        {form.text}
                    </pre>

                </div>
            ))}
        </div>
    )
}

export default Form
