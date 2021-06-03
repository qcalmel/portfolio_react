import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
            </div>
        </BrowserRouter>

    );
}

export default App;
