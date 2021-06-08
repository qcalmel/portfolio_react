import './App.css';
import {Route, useHistory, useLocation} from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {CSSTransition} from "react-transition-group";
import "../src/styles/pageTransition.css"
import {useSwipeable} from "react-swipeable";
import {useState} from "react";

function App() {
    let history = useHistory()
    const location = useLocation().pathname
    const routes = [
        {path: ['/', '/skills'], name: 'compétences', Component: Skills},
        {path: '/about', name: 'présentation', Component: About},
        {path: '/projects', name: 'projets', Component: Projects},
        {path: '/contact', name: 'contact', Component: Contact}
    ]
    const paths = routes.reduce((acc, route) => {
        acc.push(Array.isArray(route.path) ? route.path[1] : route.path)
        return acc
    }, [])
    const [transitionCSS, setTransitionCSS] = useState('page')
    const swipeLocation = (swipeDirection) => {
        let index = paths.indexOf(location)
        if(index < 0)  index = 0
        if (swipeDirection === 'right') {
            setTransitionCSS('page-right')
        } else {
            setTransitionCSS('page-left')
        }
        history.push(paths[index + (swipeDirection === 'left' ? +1 : -1)])
        setTransitionCSS('page')
    }
    const handlers = useSwipeable({
        onSwipedLeft: (() => swipeLocation('left')),
        onSwipedRight: (() => swipeLocation('right')),
        preventDefaultTouchmoveEvent: true
    });
    return (


        <div className="App">
            <Header/>
            <Menu routes={routes}/>
            <div {...handlers} className="content">
                {
                    routes.map(({path, Component}) => (
                        <Route key={Array.isArray(path) ? path[1] : path} exact path={path}>
                            {({match}) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames={transitionCSS}
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

    );
}

export default App;
