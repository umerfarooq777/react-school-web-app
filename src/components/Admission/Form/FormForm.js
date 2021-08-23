import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperError: {
        backgroundColor: '#ff7f7f',
        border: 'none',
        borderRadius: '5px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxWidth: '80vw',
        overflow: 'auto',
    },

    paper: {
        backgroundColor: 'lightgreen',
        border: 'none',
        borderRadius: '5px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxWidth: '80vw',
        overflow: 'auto',
    },

    paperPrivacy: {
        backgroundColor: 'lightgreen',
        border: 'none',
        borderRadius: '5px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxWidth: '80vw',
        height: '80vh',
        overflow: 'auto',
    },
}));

const FormForm = (props) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [privacy, setPrivacy] = React.useState(true);
    const [validationStyle, setValidationStyle] = useState('');

    const handleClose = () => {
        setOpen(false);
        setError(false);
        setPrivacy(false)
    };

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [mName, setMName] = useState('');
    const [birthday, setBirth] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [program, setProgram] = useState('');

    const today = new Date();
    const dateToday = today.getFullYear() + '-' + (today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today
        .getMonth() + 1) + '-' + (today.getDate() < 10 ? `0${today.getDate()}` : today.getDate());

    const handleFName = (e) => {
        setFName(e.target.value)
    }

    const handleLName = (e) => {
        setLName(e.target.value)
    }

    const handleMName = (e) => {
        setMName(e.target.value)
    }

    const handleBirthday = (e) => {
        setBirth(e.target.value)
    }

    const handleContact = (e) => {
        setContact(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleProgram = (e) => {
        setProgram(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (fName === '' || mName === '' || lName === '' || birthday === '' || contact === '' || email === '' || address === '' || program === '' || /^\s*$/.test(fName) || /^\s*$/.test(mName) || /^\s*$/.test(lName) || /^\s*$/.test(birthday) || /^\s*$/.test(contact) || /^\s*$/.test(email) || /^\s*$/.test(address) || /^\s*$/.test(program)) {

            setValidationStyle(`red`)
            setError(true);

        } else {

            setFName('');
            setLName('');
            setMName('');
            setBirth('');
            setContact('');
            setEmail('');
            setAddress('');
            setProgram('');
            setOpen(true);
            setPrivacy(false);
            setValidationStyle(``)

            fetch('https://react-getting-started-b6430-default-rtdb.asia-southeast1.firebasedatabase.app/enrollee.json',

                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            id: 'AID-' + Date.now(),
                            date: dateToday,
                            fName: fName,
                            lName: lName,
                            mName: mName,
                            birthday: birthday,
                            contact: contact,
                            email: email,
                            address: address,
                            program: program,
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} className='m-2'>
                <div className='text-center'>
                    <h1>Escuela De Sto Rosario</h1>
                    <h4>Online Applicant Registration</h4>
                </div>

                <input className='form-control  mt-1' value={dateToday} type="date" id="date" name="date" readOnly />

                <div>
                    <label htmlFor='fName' className='form-check-label mt-3'>First Name</label>
                    <input
                        className='form-control mt-1'
                        style={(fName === '' || /^\s*$/.test(fName)) ? { borderColor: validationStyle } : { borderColor: 'green' }}
                        type='text'
                        id='fName'
                        value={fName}
                        placeholder='First Name'
                        onChange={handleFName}
                    />
                </div>

                <div>
                    <label htmlFor='lName' className='form-check-label mt-3'>Middle Name</label>
                    <input
                        className='form-control  mt-1'
                        style={(mName === '' || /^\s*$/.test(mName)) ? { borderColor: validationStyle } : { borderColor: 'green' }}
                        type='text'
                        id='lName'
                        value={mName}
                        placeholder='Middle Name'
                        onChange={handleMName}

                    />
                </div>

                <div>
                    <label htmlFor='mName' className='form-check-label mt-3'>Last Name</label>
                    <input
                        className='form-control  mt-1'
                        style={(lName === '' || /^\s*$/.test(lName)) ? { borderColor: validationStyle } : { borderColor: 'green' }}
                        type='text'
                        id='mName'
                        value={lName}
                        placeholder='Last Name'
                        onChange={handleLName}

                    />
                </div>

                <div>
                    <label htmlFor='birthday' className='form-check-label mt-3'>Birthdate</label>
                    <input
                        className='form-control  mt-1'
                        style={(birthday === '' || /^\s*$/.test(birthday)) ? { borderColor: validationStyle } : { borderColor: 'green' }}
                        type='date'
                        id='birthday'
                        min='1960-01-01'
                        max={dateToday}
                        value={birthday}
                        onChange={handleBirthday}

                    />
                </div>

                <div>
                    <label htmlFor='mobile' className='form-check-label mt-3'>11-Digit Mobile Contact Number</label>
                    <input
                        className='form-control  mt-1'
                        style={(contact === '' || /^\s*$/.test(contact)) ? { borderColor: validationStyle } : { borderColor: 'green' }}
                        type='tel'
                        id='mobile'
                        pattern='[0-9]{11}'
                        placeholder='09#########'
                        value={contact}
                        onChange={handleContact}

                    />
                </div>

                <div>
                    <label htmlFor='email' className='form-check-label mt-3'>Email Address</label>
                    <input
                        className='form-control  mt-1'
                        style={(email === '' || /^\s*$/.test(email)) ? { borderColor: validationStyle } : { borderColor: 'green' }}
                        type='email'
                        id='email'
                        placeholder='Working Email Address'
                        value={email}
                        onChange={handleEmail}

                    />
                </div>

                <div>
                    <label htmlFor='address' className='form-check-label mt-3'>Current Home Address</label>
                    <input
                        className='form-control  mt-1'
                        style={(address === '' || /^\s*$/.test(address)) ? { borderColor: validationStyle } : { borderColor: 'green' }}
                        type='text'
                        id='address'
                        placeholder='Current Home Address'
                        value={address}
                        onChange={handleAddress}

                    />
                </div>

                <div>
                    <label htmlFor='program' className='form-check-label mt-3'>Educational Program</label>
                    <br />
                    <div className="mb-3">
                        <select
                            className="form-select"
                            name="program"
                            id="program"
                            onChange={handleProgram}
                            style={program === '' ? { borderColor: validationStyle } : { borderColor: 'green' }}
                        >
                            <option value="">Select one</option>
                            <option value="Preschool">Pre-School</option>
                            <option value="Gradeschool">Gradeschool</option>
                            <option value="Junior Highschool">Junior Highschool</option>
                            <option value="Senior Highschool">Senior Highschool</option>
                        </select>
                    </div>
                </div>

                <div>
                    <button type='submit' className='btn btn-success col-12 mt-3'>
                        Submit Registration
                    </button>
                </div>

                <div>
                    <a href='https://semantic-ui.com/examples/login.html' target='_blank' rel='noreferrer'>
                        <button type='button' className='btn btn-secondary col-12 mt-3 mb-5'>
                            Go To Student Portal
                        </button>
                    </a>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={privacy}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={privacy}>
                        <div className={classes.paperPrivacy}>
                            <h3 id="transition-modal-title">Data Privacy Policy Statement</h3>
                            <hr />
                            <h6 id="transition-modal-title">Data Privacy Policy Statement</h6>
                            <p>
                                ESR or Escuela de Sto. Rosario and its Institution are committed to uphold the rights of individuals to data privacy.
                                <br />Each person shall be guided by the principles of transparency, legitimate purpose and proportionality in processing personal data of students, parents, employees, external parties, and other stakeholders.
                                <br />These principles shall guide the university in the acquisition, use and dissemination of the cited personal data.
                            </p>
                            <p>Transparency: Data subjects must be aware of the nature, purpose, and extent of the processing of his or her personal data, including the risks and safeguards involved, the identity of the personal information controller, his or her rights as a data subject, and how these can be exercised.</p>
                            <p>Legitimate purpose : Personal data collected shall be processed based on declared and specified purpose, and shall not be contrary to law, morals, or public policy.</p>
                            <p>Proportionality : Processing of personal data shall be adequate, relevant, suitable, necessary, and not excessive in relation to the functions of the institution.</p>
                            <p>We shall adhere to all the provisions of Republic Act No. 10173 or Data Privacy Act of 2012, its implementing Rules and Regulations, relevant policies and issuance's of the National Privacy Commission, and all other requirements and standards for continuous improvement and effectiveness of personal security management system</p>
                            <div className='text-center'>
                                <button type='button' className='btn bg-success text-white' onClick={handleClose}>Agree</button>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </form>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Submitted Succesfully</h2>
                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={error}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={error}>
                    <div className={classes.paperError}>
                        <h2 id="transition-modal-title">Please Complete the Form</h2>
                    </div>
                </Fade>
            </Modal>
        </Container>
    )
}

export default FormForm
