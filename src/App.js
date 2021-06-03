import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Menu/>
                <Switch>
                    <Route exact path={["/","/competences"]} component={Skills}/>
                    <Route exact path={"/moi"} component={About}/>
                    <Route exact path={"/projets"} component={Projects}/>
                    <Route exact path={"/contact"} component={Contact}/>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
