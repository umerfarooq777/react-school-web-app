import React from 'react';


const FormDisplay = ({ forms }) => {


    return (

        <div className="m-2 mb-4 border-rounded">

            {forms.map((todo) => (
                <div
                    key={todo.id}
                >

                    <pre className='col-12 p-2'>
                        {todo.fName}
                    </pre>

                </div>
            ))}
        </div>
    )
}

export default FormDisplay

