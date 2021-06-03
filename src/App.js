import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {CSSTransition} from "react-transition-group";
import "../src/styles/pageTransition.css"

function App() {
    const routes = [
        {path: ['/','/skills'], name: 'COMPETENCES', Component: Skills},
        {path: '/about', name: 'PRESENTATION', Component: About},
        {path: '/projects', name: 'PROJETS', Component: Projects},
        {path: '/contact', name: 'CONTACT', Component: Contact}
    ]
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Menu routes={routes}/>
                <div className="content">
                    {
                        routes.map(({path, Component}) => (
                            <Route exact path={path}>
                                {({match}) => (
                                    <CSSTransition
                                        in={match != null}
                                        timeout={300}
                                        classNames="page"
                                        unmountOnExit
                                    >
                                        <div className="page">
                                            <Component/>
                                        </div>
                                    </CSSTransition>
                                )}
                            </Route>
                        ))
                    }
                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
