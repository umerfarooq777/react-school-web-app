import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import "./TeacherSignIn.css";
import { DataGrid } from '@material-ui/data-grid';

// TODO: Need to use ^^ css to have background image pwede na bing background image
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="localhost:3000">
                Escuela De Sto. Rosario
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function TeacherSignIn() {
    // Fetch
    const [loadedEnrollee, setLoadedEnrollee] = useState([]);

    useEffect(() => {
        fetch('https://react-getting-started-b6430-default-rtdb.asia-southeast1.firebasedatabase.app/enrollee.json'
        ).then(response => {
            return response.json();
        }).then(data => {

            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup)
            }
            setLoadedEnrollee(meetups);
        });

    }, []);

    const columns = [
        {
            field: 'date',
            headerName: 'Date of Registration',
            width: 250,
            type: 'date',
            editable: false,
        },
        {
            field: 'id',
            headerName: 'Applicant ID',
            width: 190
        },
        {
            field: 'fName',
            headerName: 'First name',
            width: 200,
            editable: false,
        },
        {
            field: 'mName',
            headerName: 'Middle name',
            width: 200,
            editable: false,
        },
        {
            field: 'lName',
            headerName: 'Last Name',
            width: 200,
            editable: false,
        },
        {
            field: 'program',
            headerName: 'Education Program',
            width: 250,
            editable: false,
        },
        {
            field: 'email',
            headerName: 'Email Address',
            width: 250,
            type: 'email',
            editable: false,
        },
        {
            field: 'contact',
            headerName: 'Contact Number',
            width: 250,
            type: 'tel',
            editable: false,
        },
        {
            field: 'address',
            headerName: 'Home Address',
            width: 500,
            editable: false,
        },
        {
            field: 'birthday',
            headerName: 'Birthdate',
            width: 250,
            type: 'date',
            editable: false,
        },
    ];

    const rows = loadedEnrollee.map(meetup => (
        {
            date: meetup.date,
            id: meetup.id,
            fName: meetup.fName,
            mName: meetup.mName,
            lName: meetup.lName,
            program: meetup.program,
            email: meetup.email,
            contact: meetup.contact,
            address: meetup.address,
            birthday: meetup.birthday,
        }
    ));
    // Fetch
    const classes = useStyles();
    const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <h1 className="text-center">Fetching Database...</h1>

    return (



        !isAuthenticated ? (
            <div className='teacher-signin'>
                <Container component="main" maxWidth="xs">
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Teacher Portal
                        </Typography>
                        <form className={classes.form} required>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={() => loginWithRedirect()}
                            >
                                1-tap Sign In
                            </Button>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>
            </div>
        ) : (

            isLoading ? (
                <section>
                    <p>Loading...</p>
                </section>
            ) : (
                <div className='teacher-signin'>
                    <div className="d-flex flex-column align-items-center">
                        <Typography component="h1" variant="h5">
                            Teacher Portal
                        </Typography>
                        <Avatar className={classes.avatar} />
                        <div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={() => logout()}
                            >
                                Sign Out
                            </Button>
                        </div>
                        <h1>ENROLLEE DATABASE</h1>
                        <div style={{ height: '80vh', width: '90%' }} className="mb-5">
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                checkboxSelection
                                disableSelectionOnClick
                            />
                        </div>
                    </div>
                </div>
            )
        )
    );
}

