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
    },

    paper: {
        backgroundColor: 'lightgreen',
        border: 'none',
        borderRadius: '5px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const FormForm = (props) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        setError(false);
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

        if (fName !== '' || mName !== '' || lName !== '' || birthday !== '' || contact !== '' || email !== '' || address !== '' || program !== '') {

            props.onSubmit({
                id: Date.now(),
                date: dateToday,
                fName: fName,
                lName: lName,
                mName: mName,
                birthday: birthday,
                contact: contact,
                email: email,
                address: address,
                program: program,
            });
            setFName('');
            setLName('');
            setMName('');
            setBirth('');
            setContact('');
            setEmail('');
            setAddress('');
            setProgram('');
            setOpen(true);

        } else {

            setError(true);

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
                        className='form-control  mt-1'
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
                    <small>Pre-School | Gradeschool | Senior/Junior Highschool</small>
                    <input
                        className='form-control  mt-1'
                        type='text'
                        id='program'
                        placeholder='Choose one educational program'
                        value={program}
                        onChange={handleProgram}
                        
                    />
                </div>

                <div>
                    <button className='btn btn-success col-12 my-3'>
                        Submit Registration
                    </button>
                </div>
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
