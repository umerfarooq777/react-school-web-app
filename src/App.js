import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";

function App() {

  const location = useLocation();

  return (
    <>
      <Navigation />
      <TransitionGroup>
        <CSSTransition
          timeout={75}
          classNames='fade'
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default App;
