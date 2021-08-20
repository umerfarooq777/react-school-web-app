import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import PreSchool from "./components/PreSchool/PreSchool";
import SignIn from "./components/StudentPortal/StudentSignIn";
import ContactUs from './components/Pages/ContactUs';



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
            <Route path="/pre-school" component={PreSchool} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/application-id" component={SignIn} />
            {/* Dapat laging nasa huli si 404 page Andrew: Noted! */}
            <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default App;
