import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Login from "./components/login.component";
import Success from "./components/success.component";

function App() {
    return (
        <Router>
            <div className="container">
                <Route path="/" exact component={Login} />
                <Route path="/success" exact component={Success} />
            </div>
        </Router>
    );
}

export default App;
