import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Register from './Pages/Register';
import Result from './Pages/Result';
import PageNotFound from './Pages/PageNotFound';

class App extends React.Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Nav />
                <img className="bg" alt="background" src="bg.jpg" />
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/Home" />
                    </Route>
                    <Route path="/Home" exact component={Home} />
                    <Route path="/About" exact component={About} />
                    <Route path="/Register" exact component={Register} />
                    <Route path="/Result" exact component={Result} />
                    <Route path="/*" exact component={PageNotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default App;