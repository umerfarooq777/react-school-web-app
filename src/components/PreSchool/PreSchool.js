import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Col, Row, Image } from 'react-bootstrap';
import JuniorHigh from '../JuniorHighSchool/JuniorHigh';
import SeniorHigh from '../SeniorHigh/SeniorHigh'
import AcademicTrackStrand from '../AcademicTrackStrand/AcademicTrackStrand';
import './PreSchool.css';
function Copyright() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Escuela De Sto Rosario
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Col>
        <Col xs={6}>
          <Image src="#/171x180" thumbnail />
        </Col>
      </Row>


    </Container>

  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#198754",
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div>
          <Container>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom my="11">
              Programs
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Our solution to continuous learning during these times.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>

                  <Button variant="contained" color="primary">
                    LEARN more about ESR
                  </Button>
                </Grid>

              </Grid>
              <br />
              <hr />
              <Row><JuniorHigh /></Row>
              <Row> <SeniorHigh /> </Row>
              <Row> <AcademicTrackStrand /> </Row>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Inclusive
                    </Typography>
                    <Typography>
                      Placeholder/ Features of educating your children on Escuela De Sto Rosario
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                    
                  </CardActions>
                </Card>

              </Grid>
            ))}

          </Grid>
          
          <div> <footer className={classes.footer}> 
          <Container fluid> KodeGo Group 1
          <div className='col-lg-12'>
          <a href='https://www.facebook.com/'><i className="fab fa-facebook mx-1 text-black "></i></a>
          <a href='https://www.facebook.com/'><i className="fab fa-twitter mx-1 text-black "></i></a>
          <a href='https://www.facebook.com/'><i className="fab fa-youtube mx-1 text-black "></i></a>
          <a href='https://www.facebook.com/'><i className="fab fa-instagram mx-1 text-black "></i></a>
        </div>
        
        <Row>
        <div className='col-lg-12 text-black'>
          <small>2021 &copy; Escuela De Sto Rosafrio </small>
        </div>
        </Row>
        <Row> 
        <div className='col-lg-12 text-black'>
          Dr. Sixto Antonio Ave., Pasig, Metro Manila, Philippines
         </div>
         </Row>
        


       
        
        </Container>
          </footer>
          
          {/*<div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">

            </Container>
            <footer className={classes.footer}>
              <Container fluid>
                <Typography variant="body1">Proudly Made By KodeGo Group 1</Typography>
                <Copyright />
              </Container>
            </footer>
          </div>*/}
          
          </div>
        </Container>
      </main>
      {/* Programs */}
      <Container>

      </Container>





      {/* End Programs */}
    </React.Fragment>
  );
}