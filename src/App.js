import Main from "./components/Main";
import "./App.css";
import Card from "react-bootstrap/Card";
import SignIn from "./components/AdminLogin";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <div>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
