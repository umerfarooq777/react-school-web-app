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

export default function TeacherSignIn() {
    // Fetch
    const [isLoading, setIsLoading] = useState(true);
    const [loadedEnrollee, setLoadedEnrollee] = useState([]);

    useEffect(() => {
        setIsLoading(true);
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


            setIsLoading(false);
            setLoadedEnrollee(meetups);
        });

    }, []);
    // Fetch
    const classes = useStyles();
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();


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
                                    onClick={() => logout()}
                                >
                                    Sign Out
                                </Button>
                            </form>
                        </div>
                        <div className="m-2 mb-4 border-rounded">
                            DATA
                            <table>
                                <tr>
                                    <th>Applicant ID</th>
                                    <th>Full Name</th>
                                </tr>
                                {loadedEnrollee.map(meetup =>
                                    <tr>
                                        <td>{meetup.id}</td>
                                        <td>{meetup.fName}</td>
                                    </tr>
                                )}
                            </table>
                        </div>
                    </Container>
                </div>
            )
        )
    );
}

