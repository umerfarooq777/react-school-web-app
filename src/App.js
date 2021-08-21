import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
// import PreSchool from "./components/PreSchool/PreSchool";
import TeacherSignIn from "./components/TeacherPortal/TeacherSignIn";
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from "./components/ExtraPages/NotFound";
import UnderDevelopment from "./components/ExtraPages/UnderDevelopment";
import AboutUs from "./components/AboutUs/AboutUs";
import Admission from "./components/Admission/Admission";
import Album from './components/PreSchool/PreSchool';




function App() {

  const location = useLocation();

  return (
    <>
      <Navigation />
      <TransitionGroup>
        <CSSTransition
          timeout={200}
          classNames='fade'
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/preschool" component={Album} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/teacher-portal" component={TeacherSignIn} />
            {/* FOR FUTURE DEVELOPMENT */}
            <Route path="/gradeschool" component={UnderDevelopment} />
            <Route path="/junior-highschool" component={UnderDevelopment} />
            <Route path="/senior-highschool" component={UnderDevelopment} />
            <Route path="/admission" component={Admission} />
            {/* Dapat laging nasa huli si 404 page Andrew: Noted! */}
            <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default App;
